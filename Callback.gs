var CANCEL_ROLE_BEFORE_DAYS = 7;

/* ТЕКСТИ */

var CALLBACK_EXPIRED = "Сесія закінчилась, будь ласка, виконайте операцію ще раз!";
var CALLBACK_ROLE_FREE = "Роль <b>{0}</b> на засіданні <b>{1}</b> тепер вільна!";
var CALLBACK_ROLE_CAN_NOT_BE_CANCELED = "На жаль, не можна відмовитись від ролі на найближчкому засіданні. Спробуйте прийти! 😊";
var CALLBACL_ROLE_VALUE_CLEANED = "Дякую! Очистив значення для <b>{0}</b> на засіданні <b>{1}</b>.";
var CALLBACK_ROLE_VALUE_NEW = 'Вкажіть нове значення для <b>{0}</b> на засіданні <b>{1}</b>:';

function processCallback(contents) {
    var callbackId = contents.callback_query.from.id;
    var data = contents.callback_query.data;

    var callback = findCallback(data);

    if (!callback) {
        showMenu(callbackId, CALLBACK_EXPIRED);
    } else {
        var statuses = callback.split('___');

        if (statuses) {
            if (statuses[0] == MEETING_ROLE_REJECT_CALLBACK) {
                var date = statuses[1];
                var role = statuses[2];
                var fullName = statuses[3];
                var now = new Date();

                var memberInfo = getMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, callbackId);

                if (memberInfo && (memberInfo.fields[MEMBERS_HEADER_POSITION] == OFFICER_POSITION_PRESIDENT || memberInfo.fields[MEMBERS_HEADER_POSITION] == OFFICER_POSITION_VP_EDUCATION) ||
                    now.addDays(CANCEL_ROLE_BEFORE_DAYS) <= parseDate(date)) {
                    if (updateMeetingInfo(date, role, '', false)) {
                        sendMemberCanceledRoleMessage(memberInfo, date, role)
                        showMenu(callbackId, format(CALLBACK_ROLE_FREE, role, date));
                    }
                } else {
                    showMenu(callbackId, CALLBACK_ROLE_CAN_NOT_BE_CANCELED);
                }
            } else if (statuses[0] == MEETING_ROLE_CLEAN_CALLBACK) {
                var date = statuses[1];
                var role = statuses[2];
                var fullName = statuses[3];

                if (updateMeetingInfo(date, role, '', false)) {
                    showMenu(callbackId, format(CALLBACL_ROLE_VALUE_CLEANED, role, date));
                }
            } else if (statuses[0] == MEETING_SPEACH_CHANGE_PROJECT_CALLBACK) {
                updateMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, callbackId, MEMBERS_HEADER_TELEGRAM_STATUS, callback);

                var projects = getListItemsByName(MEETING_PROJECTS);
                projects.unshift(MEETING_SPEACH_PROJECT_EMPTY);
                showMenu(callbackId, MEETING_SPEACH_CHOOSE_PROJECT, projects);
            } else if (statuses[0] == MEETING_SPEACH_CHANGE_TITLE_CALLBACK) {
                updateMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, callbackId, MEMBERS_HEADER_TELEGRAM_STATUS, callback);
                showMenu(callbackId, MEETING_SPEACH_CHOOSE_TITLE);
            } else if (statuses[0] == MEETING_CHANGE_WORD_OF_THE_DAY_CALLBACK) {
                updateMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, callbackId, MEMBERS_HEADER_TELEGRAM_STATUS, callback);
                showMenu(callbackId, MEETING_CHOOSE_WORD_OF_THE_DAY);
            } else if (statuses[0] == MEETING_CHANGE_THEME_CALLBACK) {
                updateMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, callbackId, MEMBERS_HEADER_TELEGRAM_STATUS, callback);
                showMenu(callbackId, MEETING_CHOOSE_THEME);
            } else if (statuses[0] == MEETING_ROLE_CHANGE_CALLBACK) {
                var date = statuses[1];
                var role = statuses[2];

                updateMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, callbackId, MEMBERS_HEADER_TELEGRAM_STATUS, callback);
                showMenu(callbackId, format(CALLBACK_ROLE_VALUE_NEW, role, date), getAllMembers());
            } else if (statuses[0] == MEETING_ROLE_REQUEST_CONFIRM_CALLBACK) {
                var date = statuses[1];
                var role = statuses[2];
                var fullName = statuses[3];
                
                var memberInfo = getMemberInfo(MEMBERS_HEADER_FULLNAME, fullName);
                if (updateMeetingInfo(date, role, fullName, true)) {
                    sendText(memberInfo.telegramId, format(MEETING_ROLE_REQUEST_CONFIRMED, memberInfo.callName, date, role));
                    sendText(callbackId, format(MEETING_ROLE_REQUEST_CONFIRMED_INFO, fullName, role, date));
                } else {
                    sendText(callbackId, format(MEETING_ROLE_REQUEST_BUSY, role, date, fullName));
                }
            } else if (statuses[0] == MEETING_ROLE_REQUEST_REJECT_CALLBACK) {
                var date = statuses[1];
                var role = statuses[2];
                var fullName = statuses[3];
                
                var memberInfo = getMemberInfo(MEMBERS_HEADER_FULLNAME, fullName);
                sendText(memberInfo.telegramId, format(MEETING_ROLE_REQUEST_REJECTED, memberInfo.callName, role, date));
                sendText(callbackId, format(MEETING_ROLE_REQUEST_REJECTED_INFO, fullName, role, date));
            } else if (statuses[0] == MEMBERS_SEND_EMAIL_MESSAGE_CALLBACK
                      || statuses[0] == MEMBERS_SEND_TELEGRAM_MESSAGE_CALLBACK) {            
                var userData = getMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, callbackId);
                var memberInfo = getMemberInfo(MEMBERS_HEADER_FULLNAME, statuses[1]);
                if (!memberInfo) {
                   sendText(userData.telegramId, MEMBER_SEARCH_FAILED);
                } else {
                  var type = statuses[0] == MEMBERS_SEND_EMAIL_MESSAGE_CALLBACK 
                                              ? MEMBERS_SEND_EMAIL_MESSAGE 
                                              : MEMBERS_SEND_TELEGRAM_MESSAGE;
                  startSendMessage(userData, memberInfo, type);
                }
            } else if (statuses[0] == MEMBERS_EDIT_MEMBER_CALLBACK) {
                  var userData = getMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, callbackId);
                  
                  continueEditMember(userData, statuses[1]);              
            } else if (statuses[0] == MEMBERS_ADD_NEW_MEMBER_CALLBACK) {
                  var userData = getMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, callbackId);
                  
                  userData.statuses = userData.statuses.slice(0, 2);
                  userData.status = userData.statuses.join('___') + '___';
                  
                  processRequest(userData, MEMBERS_ADD);              
            } else if (statuses[0] == MEMBERS_ACCEPT_SEND_MESSAGE_CALLBACK
                      || statuses[0] == MEMBERS_REJECT_SEND_MESSAGE_CALLBACK) {
                 var userData = getMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, callbackId);
                 var fullName = statuses[1];
                 var type = statuses[2];
                 var encodedMessage = statuses[3];
              
                 var memberInfo = getMemberInfo(MEMBERS_HEADER_FULLNAME, fullName);
                 var memberEmailAddress = memberInfo.fields[MEMBERS_HEADER_EMAIL_ADDRESS];
                 var memberTelegramId = memberInfo.fields[MEMBERS_HEADER_TELEGRAM_ID];
                 
                 var decodedMessage = Utilities.base64Decode(encodedMessage);
                 var message = Utilities.newBlob(decodedMessage).getDataAsString();
                 
                 if (statuses[0] == MEMBERS_ACCEPT_SEND_MESSAGE_CALLBACK) {
                   if (type == MEMBERS_SEND_EMAIL_MESSAGE) {
                     if (memberEmailAddress) {
                       GmailApp.sendEmail(memberEmailAddress, MESSAGES_EMAIL_SUBJECT, message);
                     } else {
                       showMenu(callbackId, format(MEMBERS_MESSAGE_NO_EMAIL, fullName));                                     
                       continueEditMember(userData, fullName); 
                       return false;
                     }
                   } else {
                     sendText(memberTelegramId, message);      
                   }
                   
                   showMenu(callbackId, MEMBERS_MESSAGE_SUCCESSFULLY_SENT);    
                 }
                 else {
                   startSendMessage(userData, memberInfo, type, message);
                 }
            } 
        }
    }
}

/* ПОВІДОМЛЕННЯ */

function sendTextWithCallbacks(telegramId, callbacks, message) {
  
  var callbacksToInsert = [];
  var keyboards = [];
  
  for (var i = 0; i < callbacks.length; i++)
  {
    var callback = callbacks[i];
    var callbackId = (new Date()).getTime() + i;
    var time = (new Date()).getTime();
    var keyboard = {
      text: callback.text,
      callback: callbackId
    };
    keyboards.push(keyboard);
    callbacksToInsert.push([callbackId, time, callback.data]);
  }

  insertCallbacks(callbacksToInsert);
  sendText(telegramId, message, getMenuInlineKeyBoardMultiline(keyboards));  
}

/* РОБОТА З БАЗОЮ ДАННИХ */

function insertCallbacks(callbacks) {
    var sheet = SpreadsheetApp.openById(databaseSpreadSheetId).getSheetByName(SHEET_CALLBACK);
    var lastRow = sheet.getLastRow();
    if (lastRow == 0) lastRow = 1;
    var insertedRowsAmount = callbacks.length;

    sheet.insertRowsAfter(lastRow, insertedRowsAmount);
    sheet.getRange(sheet.getLastRow() + 1, 1, insertedRowsAmount, 3).setValues(callbacks);
}

function inseertCallback(callback) {
    var time = (new Date()).getTime();
    var sheet = SpreadsheetApp.openById(databaseSpreadSheetId).getSheetByName(SHEET_CALLBACK);

    var id = time;

    var lastRow = sheet.getLastRow();
    if (lastRow == 0) lastRow = 1;

    sheet.insertRowsAfter(lastRow, 1);
    sheet.getRange(sheet.getLastRow() + 1, 1, 1, 3).setValues([
        [id, time, callback]
    ]);

    return id;
}

function findCallback(id) {
    var sheet = SpreadsheetApp.openById(databaseSpreadSheetId).getSheetByName(SHEET_CALLBACK);

    var values = sheet.getRange(1, 1, sheet.getLastRow(), sheet.getLastColumn()).getValues();

    for (var i = 0; i < values.length; i++) {
        if (values[i][0] == id) {
            return values[i][2];
        }
    }
}

function deleteExpiredCallbacks() {

  var sheet = SpreadsheetApp.openById(databaseSpreadSheetId).getSheetByName(SHEET_CALLBACK);
  var timeValues = sheet.getRange(1, 1, sheet.getLastRow(), 1).getValues();
  var now = new Date();
  var oneWeekAgo = now.setDate(now.getDate() - 7);
  var lastExpiredCallback = 0;
    
  for (var i = 0; i < timeValues.length; i++) {
    if (timeValues[i][0] <= oneWeekAgo) {
      lastExpiredCallback = i + 1;
    }
  }
  
  if (lastExpiredCallback) {
    sheet.deleteRows(1, lastExpiredCallback);
  }
}
