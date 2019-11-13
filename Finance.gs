var SHEET_FINANCE = "Скарбниця";

/* МЕНЮ */
var FINANCE = "💵 Фінанси";
var FINANCE_IN = "Отримали кошти";
var FINANCE_OUT = "Витратили кошти";
var FINANCE_TRANSFER = "Передати кошти";
var FINANCE_BALANCE = "Показати баланс";

/* СПИСКИ */
var FINANCE_LISTS_TYPE = 'Типи фінансових операцій'
var FINANCE_LISTS_TYPE_TRANSFER = "Передача коштів";
var FINANCE_LISTS_TYPE_MEMBERSHIP = "Членство";
var FINANCE_LISTS_TYPE_MEMBERSHIP_TM = "Членство в ТМ";
var FINANCE_LISTS_TYPE_LIBRARY = "Бібліотека";

/* ЗАГОЛОВКИ БАЗИ ДАННИХ */
var FINANCE_HEADER_DATE = "Дата";
var FINANCE_HEADER_TYPE = "Тип операції";
var FINANCE_HEADER_DESCRIPTION = "Опис операції";
var FINANCE_HEADER_MEMBER = "Член клубу";
var FINANCE_HEADER_PROCESSED_BY = "Хто провів операцію";
var FINANCE_HEADER_AMOUNT = "Сума (грн)";

/* ТЕКСТИ */
var FINANCE_NO_DESCRIPTION = "Опису немає";

var FINANCE_WRONG_AMOUNT = "Введена вами сума '{0}' не є числом, введіть суму ще раз:";

var FINANCE_TRANSFER_DESCRIPTION = 'Передача кошти від члена клубу {0} члену клуба {1}';
var FINANCE_TRANSFER_SUCCESS = 'Дякую, записав, що ви передали {0}грн {1}! 😍';
var FINANCE_TRANSFER_AMOUNT = 'Яку суму (грн) ви передаєте {0}?';
var FINANCE_TRANSFER_START = 'Оберіть члена клубу (або введіть ім\'я для пошуку), якому ви передаєте кошти?';

var FINANCE_OUT_TM_SUCCESS = 'Дякую, записав, що витрачено на сплату в ТМ {0}грн за {1}! 😉';
var FINANCE_OUT_TM_AMOUNT = 'Яка сума (грн) сплачена в ТМ за {0}?';

var FINANCE_OUT_SUCCESS = 'Дякую, записав, що витрачено {0}грн на {1}! 😉';
var FINANCE_OUT_AMOUNT = 'Яка сума (грн)?';
var FINANCE_OUT_MEMBERSHIP = 'Оберіть члена клубу (або введіть ім\'я для пошуку), за якого сплачено членський внесок?';
var FINANCE_OUT_DESCRIPTION = 'Вкажіть опис операції, якщо потрібен:';
var FINANCE_OUT_START= 'На що було потрачено гроші (виберіть з меню або введіть текст)?';

var FINANCE_IN_MEMBERSHIP_TM_SUCCESS = 'Дякую, записав, що отримано членський внесок {0}грн від {1}! 😉';
var FINANCE_IN_MEMBERSHIP_SUCCESS = 'Дякую, записав, що отримано членський внесок {0}грн від {1}! <b>Членство</b> продовжено на <b>{2} міс. і дійсне до {3}</b>. 😉';
var FINANCE_IN_SUCCESS = 'Дякую, записав, що отримано {0}грн за {1}! 😉';
var FINANCE_IN_AMOUNT = 'Яка сума (грн)?';
var FINANCE_IN_MEMBERSHIP = 'Оберіть члена клубу (або введіть ім\'я для пошуку), що сплатив членський внесок?';
var FINANCE_IN_DESCRIPTION = 'Вкажіть опис операції, якщо потрібен:';
var FINANCE_IN_START = 'За що було отримано гроші (виберіть з меню або введіть текст)?';

var FINANCE_BALANCE_TITLE = "💰 <b>В кого гроші клубу:</b>\n\n";
var FINANCE_BALANCE_TOTAL = '\n<b>Загальний баланс:</b> {0}грн';
var FINANCE_BALANCE_RECORD = '<b>{0}:</b> {1}грн\n';

var FINANCE_IN_MEMBERSHIP_NOT_ENOUGH_MONEY = "⚠️ Вибачте, але потрiбно додати <b>{0}грн</b>, щоб оплатити членство хоча б за один мiсяць!";
var FINANCE_IN_MEMBERSHIP_PAID_EXTRA_MONEY = "⚠️ Вибачте, але потрiбно внести суму, що кратна мiсячному членському внеску (<b>{0}грн</b>)!\
                                      \n\nЗменшiть суму на <b>{1}грн</b>, щоб оплатити за <b>{2} мiсяць(-iв)</b>, або збiльшiть на <b>{3}грн</b>, щоб оплатити за <b>{4} мiсяцi(-в)</b>!";   

var FINANCE_TREASURER_MESSAGE_TITLE = '💰 <b>Сповіщення по скарбничці</b>\n\n';
var FINANCE_TRANSFER_TREASURER_MESSAGE = FINANCE_TREASURER_MESSAGE_TITLE + '{0} передав(-ла) {1}грн {2}.';
var FINANCE_OUT_MEMBERSHIP_TM_TREASURER_MESSAGE = FINANCE_TREASURER_MESSAGE_TITLE + '{0} витратив(-ла) на сплату в ТМ {1}грн за {2}.';
var FINANCE_OUT_MEMBERSHIP_MESSAGE = FINANCE_TREASURER_MESSAGE_TITLE + '{0} витратив(-ла) на членський внесок {1}грн за {2}.';
var FINANCE_OUT_TREASURER_MESSAGE = FINANCE_TREASURER_MESSAGE_TITLE + '{0} витратив(-ла) {1}грн на {2}{3}.';
var FINANCE_IN_MEMBERSHIP_TM_TREASURER_MESSAGE = FINANCE_TREASURER_MESSAGE_TITLE + 'Отримано членський внесок за ТМ, у розмірі {0}грн від {1}.';
var FINANCE_IN_MEMBERSHIP_TREASURER_MESSAGE = FINANCE_TREASURER_MESSAGE_TITLE + 'Отримано членський внесок {0}грн від {1}.';
var FINANCE_IN_TREASURER_MESSAGE = FINANCE_TREASURER_MESSAGE_TITLE + '{0} отримав(-ла) {1}грн за {2} {3}.';


                                   
var FINANCE_MEMBERSHIP_TREASURER_NOTIFICATION = FINANCE_TREASURER_MESSAGE_TITLE + '⌛ <b>Таким членам клубу необхiдно сплатити внески:</b>\n\n{0}\
                                                         \n\n❌ <b>Члени клубу, якi були позбавленi членства за несплату внескiв:</b>\n\n{1}\
                                                         \n\n😏 <b>Члени клубу, що виявили бажання сплатити членські внески, проте ще не сплатили:</b>\n\n{2}';
                                                         
var FINANCE_MEMBERSHIP_EXPIRED_MEMBER_NOTIFICATION = 'Вiтаю, {0}!\n\nНагадую, що у вас закінчилось членство у нашому клубі 😔\
                                                      \n\nЗв\'яжіться з нашим скарбником <b>{1}</b> (@{2}), щоб продовжити членство.\
                                                      \n\nЯкщо ви не бажаєте продовжувати членство і отримувати про це сповіщення, натисніть кнопку нижче 👇';
var FINANCE_MEMBERSHIP_GUEST_NOTIFICATION = 'Вiтаю, {0}!\n\nЦе маленьке нагадування, що ми очікуємо від вас членських внесків ☺\
                                             \n\nЗв\'яжіться з нашим скарбником <b>{1}</b> (@{2}), щоб продовжити членство ☺.\
                                             \n\nЯкщо у вас змінились плани і ви не бажаєте отримувати нагадування, натисніть кнопку нижче 👇';
var FINANCE_MEMBERSHIP_REMOVED_NOTIFICATION = 'Вiтаю, {0}!\n\nНа жаль, ви не продовжили членство і його було автоматично скасовано через певний час 😔\
                                               \n\nЗв\'яжіться з нашим скарбником <b>{1}</b> (@{2}), щоб продовжити членство ☺';



function showBalancesByMembers(userTelegramId) {
    var balances = getBalancesByMembers();
    var html = FINANCE_BALANCE_TITLE;
    var total = 0;
    for (var key in balances) {
        var balance = balances[key];
        total += 1 * balance;
        if (balance != 0) {
          html += format(FINANCE_BALANCE_RECORD, key, balance);
        }
    }

    html += format(FINANCE_BALANCE_TOTAL, total);

    showMenu(userTelegramId, html);
}

function processFinance(userData, text) {
    if (userData.statuses[2]) {
        if (userData.statuses[2] == FINANCE_TRANSFER) {
            if (userData.statuses[3]) {
                if (!userData.statuses[4]) {
                  if(!isNaN(text)) {
                    var description = format(FINANCE_TRANSFER_DESCRIPTION, userData.fullName ,userData.statuses[3]);
                    insertFinanceData(FINANCE_LISTS_TYPE_TRANSFER, userData.statuses[3], -1 * text, userData.fullName, description);
                    insertFinanceData(FINANCE_LISTS_TYPE_TRANSFER, userData.fullName, text, userData.statuses[3], description);
                    showMenu(userData.telegramId, format(FINANCE_TRANSFER_SUCCESS,text , userData.statuses[3]));
                    sendMessageToOfficer(OFFICER_POSITION_TREASURE, format(FINANCE_TRANSFER_TREASURER_MESSAGE, userData.fullName, text, userData.statuses[3]));
                    return true;
                  }
                  else {
                    showMenu(userData.telegramId, format(FINANCE_WRONG_AMOUNT, text));
                    return false;
                  }
                }
            } else {
                  return searchMemberInDatabase(text, userData.telegramId, format(FINANCE_TRANSFER_AMOUNT, text), null);
            }
        } else if (userData.statuses[2] == FINANCE_OUT) {
            if (userData.statuses[3]) {
                if (userData.statuses[3] == FINANCE_LISTS_TYPE_MEMBERSHIP_TM || userData.statuses[3] == FINANCE_LISTS_TYPE_MEMBERSHIP) {
                    if (userData.statuses[4]) {
                      if (!userData.statuses[5]) {
                        if(!isNaN(text)) {
                          // ADD DEBIT BALANCE RECORD
                          var description = '';
                          insertFinanceData(FINANCE_LISTS_TYPE_MEMBERSHIP_TM, userData.statuses[4], -1 * text, userData.fullName, description);
                          sendMessageToOfficer(OFFICER_POSITION_TREASURE, format(FINANCE_OUT_MEMBERSHIP_TM_TREASURER_MESSAGE, userData.fullName, text, userData.statuses[4]));
                          showMenu(userData.telegramId, format(FINANCE_OUT_TM_SUCCESS, text, userData.statuses[4]));s                          
                          return true;
                        }
                        else {
                          showMenu(userData.telegramId, format(FINANCE_WRONG_AMOUNT, text));
                          return false;
                        }
                      }
                    } else {
                        return searchMemberInDatabase(text, userData.telegramId, format(FINANCE_OUT_TM_AMOUNT, text), null);
                    }
                } else {
                    if (userData.statuses[4]) {
                      if (!userData.statuses[5]) {
                        if(!isNaN(text)) {
                          // ADD DEBIT BALANCE RECORD
                          var description = userData.statuses[4] == FINANCE_NO_DESCRIPTION ? '' : userData.statuses[4];
                          insertFinanceData(userData.statuses[3], null, -1 * text, userData.fullName, description);
                          showMenu(userData.telegramId, format(FINANCE_OUT_SUCCESS, text, userData.statuses[3]));
                          var descriptionMessage = !description ? '' : format(' ({0})', description);
                          sendMessageToOfficer(OFFICER_POSITION_TREASURE, format(FINANCE_OUT_TREASURER_MESSAGE, userData.fullName, text, userData.statuses[4], descriptionMessage));
                          //showParentManagementMenu(userData);
                          return true;
                        }
                        else {
                          showMenu(userData.telegramId, format(FINANCE_WRONG_AMOUNT, text));
                          return false;
                        }
                      }
                    } else {
                        showMenu(userData.telegramId, FINANCE_OUT_AMOUNT);
                        return true;
                    }

                }
            } else {
                if (text == FINANCE_LISTS_TYPE_MEMBERSHIP || text == FINANCE_LISTS_TYPE_MEMBERSHIP_TM) {
                    showMenu(userData.telegramId, FINANCE_OUT_MEMBERSHIP, getAllMembers());
                    return true;
                } else {
                    showMenu(userData.telegramId, FINANCE_OUT_DESCRIPTION, [FINANCE_NO_DESCRIPTION]);
                    return true;
                }
            }
        } else if (userData.statuses[2] == FINANCE_IN) {
            if (userData.statuses[3]) {
                if (userData.statuses[3] == FINANCE_LISTS_TYPE_MEMBERSHIP_TM || userData.statuses[3] == FINANCE_LISTS_TYPE_MEMBERSHIP) {
                    if (userData.statuses[4]) {
                      if (!userData.statuses[5]) {
                        if(!isNaN(text)) {
                          var paymentSuccessfull = processPaymentMembership(userData, text);
                          
                          if (paymentSuccessfull) { 
//                          var description = '';
//                          
//                          insertFinanceData(userData.statuses[3], userData.statuses[4], text, userData.fullName, description);
//                          var program = userData.statuses[3] == FINANCE_LISTS_TYPE_MEMBERSHIP_TM ? MEMBERS_PROGRAM_TOASTMASTERS : MEMBERS_PROGRAM_KOMA;
//                          updateMemberInfo(MEMBERS_HEADER_FULLNAME, userData.statuses[4], MEMBERS_HEADER_PROGRAM, program);         
//                          updateMemberInfo(MEMBERS_HEADER_FULLNAME, userData.statuses[4], MEMBERS_HEADER_STATUS, MEMBERS_STATUS_MEMBER);                 
//                          showMenu(userData.telegramId, format(FINANCE_IN_SUCCESS, text, userData.statuses[3]));
                          
                            if (userData.statuses[3] == FINANCE_LISTS_TYPE_MEMBERSHIP_TM) {
                              sendMessageToOfficer(OFFICER_POSITION_TREASURE, format(FINANCE_IN_MEMBERSHIP_TM_TREASURER_MESSAGE, text, userData.statuses[4]));                              
                            } else {
                              sendMessageToOfficer(OFFICER_POSITION_TREASURE, format(FINANCE_IN_MEMBERSHIP_TREASURER_MESSAGE, text, userData.statuses[4]));
                            }
                            return true;
                          }
                          return false;
                        }
                        else {
                          showMenu(userData.telegramId, format(FINANCE_WRONG_AMOUNT, text));
                          return false;
                        }
                      }
                    } else {
                       return searchMemberInDatabase(text, userData.telegramId, format(FINANCE_IN_AMOUNT, text), null);
                    }
                } else {
                    if (userData.statuses[4]) {
                      if (!userData.statuses[5]) {
                        if(!isNaN(text)) {
                          // ADD CREDIT BALANCE RECORD      
                          var description = userData.statuses[4] == FINANCE_NO_DESCRIPTION ? '' : userData.statuses[4];
                          insertFinanceData(userData.statuses[3], null, text, userData.fullName, description);
                          showMenu(userData.telegramId, format(FINANCE_IN_SUCCESS, text, userData.statuses[3]));
                          var descriptionMessage = !description ? '' : format(' ({0})', description);
                          sendMessageToOfficer(OFFICER_POSITION_TREASURE, format(FINANCE_IN_TREASURER_MESSAGE, userData.fullName, text, userData.statuses[3], descriptionMessage));
                          return true;
                        }
                        else {
                          showMenu(userData.telegramId, format(FINANCE_WRONG_AMOUNT, text));
                          return false;
                        }
                      }
                    } else {
                        showMenu(userData.telegramId, FINANCE_IN_AMOUNT);
                        return true;
                    }

                }
            } else {
                if (text == FINANCE_LISTS_TYPE_MEMBERSHIP || text == FINANCE_LISTS_TYPE_MEMBERSHIP_TM) {
                    showMenu(userData.telegramId, FINANCE_IN_MEMBERSHIP, getAllMembers());
                    return true;
                } else {
                    showMenu(userData.telegramId, FINANCE_IN_DESCRIPTION, [FINANCE_NO_DESCRIPTION]);
                    return true;
                }
            }
        }
    } else {
        if (text == FINANCE_BALANCE) {
            showBalancesByMembers(userData.telegramId);
            return true;
        } else if (text == FINANCE_OUT) {            
            showMenu(userData.telegramId, FINANCE_OUT_START, getFinanceTypes());
            return true;
        } else if (text == FINANCE_IN) {
            showMenu(userData.telegramId, FINANCE_IN_START, getFinanceTypes());
            return true;
        } else if (text == FINANCE_TRANSFER) {
            showMenu(userData.telegramId, FINANCE_TRANSFER_START,
                getAllMembers());
            return true;
        }
    }
}

function processPaymentMembership(userData, paidAmount) {
  var program, fee;
  
  if (userData.statuses[3] == FINANCE_LISTS_TYPE_MEMBERSHIP_TM) {
    program = MEMBERS_PROGRAM_TOASTMASTERS;
    fee = MONTHLY_MEMBERSHIP_FEE_TM;
  } else {
    program = MEMBERS_PROGRAM_KOMA;
    fee = MONTHLY_MEMBERSHIP_FEE;
  }
  
  if (+paidAmount < +fee) {
    var shortage = fee - paidAmount;
    sendText(userData.telegramId, format(FINANCE_IN_MEMBERSHIP_NOT_ENOUGH_MONEY, shortage));
    return false;
  } 
  
  var paidForMonths = Math.floor(paidAmount / fee);
  var paidExtra = paidAmount % fee;
  
  if (paidExtra) {
    sendText(userData.telegramId, format(FINANCE_IN_MEMBERSHIP_PAID_EXTRA_MONEY, fee, paidExtra, paidForMonths, fee - paidExtra, paidForMonths + 1));
    return false;
  }
  
  var currentDate = new Date();
  var memberInfo = getMemberInfo(MEMBERS_HEADER_FULLNAME, userData.statuses[4]);  
  var membershipExpiryDate = parseDate(memberInfo.fields[MEMBERS_HEADER_MEMBERSHIP_EXPIRES]);
  var monthsDiff = monthsBetweenTwoDates(currentDate, membershipExpiryDate);
  
  var isExtendMembership = isValidDate(membershipExpiryDate) && monthsDiff <= TRIAL_PERIOD_TO_PAY_MONTHS;
  var payFromDate = isExtendMembership ? membershipExpiryDate : currentDate;
  var newMembershipExpiryDate = isExtendMembership || payFromDate.getDate() < DAY_IN_MONTH_FROM_WHICH_DISCOUNT_APLIED
                              ? new Date(payFromDate.setMonth(payFromDate.getMonth()+paidForMonths))
                              : new Date(payFromDate.getFullYear(), payFromDate.getMonth() + 1 + paidForMonths, 0, 0, 0, 0);
  newMembershipExpiryDate = formatDate(newMembershipExpiryDate);
  
  var description = '';

  insertFinanceData(userData.statuses[3], userData.statuses[4], paidAmount, userData.fullName, description); 
  updateMemberInfo(MEMBERS_HEADER_FULLNAME, userData.statuses[4], MEMBERS_HEADER_PROGRAM, program);         
  updateMemberInfo(MEMBERS_HEADER_FULLNAME, userData.statuses[4], MEMBERS_HEADER_STATUS, MEMBERS_STATUS_MEMBER);  
  updateMemberInfo(MEMBERS_HEADER_FULLNAME, userData.statuses[4], MEMBERS_HEADER_MEMBERSHIP_EXPIRES, newMembershipExpiryDate); 
  showMenu(userData.telegramId, format(FINANCE_IN_MEMBERSHIP_SUCCESS, paidAmount, userData.statuses[4], paidForMonths, newMembershipExpiryDate));
  return true;
}

function checkMembershipAndSendNotifications() {

  var sheet = SpreadsheetApp.openById(databaseSpreadSheetId).getSheetByName(SHEET_CONTACTS);
  var headerValues = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  
  var fullNameColumnIndex = headerValues.findIndex(MEMBERS_HEADER_FULLNAME);
  var firstNameColumnIndex = headerValues.findIndex(MEMBERS_HEADER_NAME);
  var callNameColumnIndex = headerValues.findIndex(MEMBERS_HEADER_CALLNAME);
  var telegramIdColumnIndex = headerValues.findIndex(MEMBERS_HEADER_TELEGRAM_ID);
  var emailColumnIndex = headerValues.findIndex(MEMBERS_HEADER_EMAIL_ADDRESS);
  var expiryDateColumnIndex = headerValues.findIndex(MEMBERS_HEADER_MEMBERSHIP_EXPIRES);
  var statusColumnIndex = headerValues.findIndex(MEMBERS_HEADER_STATUS);
  
  var values = sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn()).getValues();
  
  var msBeforeRemovedMembership = DAYS_BEFORE_REMOVED_MEMBERSHIP * 24 * 3600 * 1000;
  
  var expiredMembers = [];
  var removedMembers = [];
  var waitingPaymentMembers = [];
  
  var treasureMemberInfo = getMemberInfo(MEMBERS_HEADER_POSITION, OFFICER_POSITION_TREASURE);
  
  for (var i = 0; i < values.length; i++) {
  
    var fullName = values[i][fullNameColumnIndex];    
    if (!fullName) continue;
    
    var firstName = values[i][firstNameColumnIndex];
    var callName = values[i][callNameColumnIndex];
    var memberExpiryDate = values[i][expiryDateColumnIndex] ? parseDate(values[i][expiryDateColumnIndex]) : null;
    var memberTelegramId = values[i][telegramIdColumnIndex];
    var memberEmail = values[i][emailColumnIndex];
    var memberStatus = values[i][statusColumnIndex];
    var memberAndMessageStatus = fullName;
    var removeMembershipDate = memberExpiryDate ? new Date(memberExpiryDate.getTime() + msBeforeRemovedMembership) : null;
    
    //memberTelegramId = '432298769';
    memberEmail = 'oleksandr@tebenko.com';
    
    if (memberStatus == MEMBERS_STATUS_EX_MEMBER) {
      // Нічого не робити, якщо користувач має статус "Колишній член"
    }
    else if (memberStatus == MEMBERS_STATUS_WAITING_PAYMENT) {      
      var message = format(FINANCE_MEMBERSHIP_GUEST_NOTIFICATION, callName || firstName, treasureMemberInfo.fullName, treasureMemberInfo.fields[MEMBERS_HEADER_TELEGRAM]);
      if (memberTelegramId) {
        var callbacks = []; 
        callbacks.push({data : MEMBERS_CANCEL_WAITING_PAYMENT_CALLBACK + '___' +  fullName, text: MEMBERS_CANCEL_WAITING_PAYMENT});  
        callbacks.push({data : MEMBERS_KEEP_MEMBERSHIP_CALLBACK + '___' +  fullName, text: MEMBERS_KEEP_MEMBERSHIP});  
        sendTextWithCallbacks(memberTelegramId, callbacks, message);
        memberAndMessageStatus += ' 💬';
      } else if (memberEmail) {
        sendEmail(treasureMemberInfo.telegramId, memberEmail, MESSAGES_EMAIL_SUBJECT, message);
        memberAndMessageStatus += ' ✉️';
      }       
      waitingPaymentMembers.push(memberAndMessageStatus);
    } else if (isValidDate(memberExpiryDate) && new Date() >= memberExpiryDate && new Date() <= removeMembershipDate) {      
      var message = format(FINANCE_MEMBERSHIP_EXPIRED_MEMBER_NOTIFICATION, callName || firstName, treasureMemberInfo.fullName, treasureMemberInfo.fields[MEMBERS_HEADER_TELEGRAM]);
      if (memberTelegramId) {
        var callbacks = []; 
        callbacks.push({data : MEMBERS_CANCEL_MEMBERSHIP_CALLBACK + '___' +  fullName, text: MEMBERS_CANCEL_MEMBERSHIP});  
        callbacks.push({data : MEMBERS_KEEP_MEMBERSHIP_CALLBACK + '___' +  fullName, text: MEMBERS_KEEP_MEMBERSHIP});  
        sendTextWithCallbacks(memberTelegramId, callbacks, message);
        memberAndMessageStatus += ' 💬';
      } else if (memberEmail) {
        sendEmail(treasureMemberInfo.telegramId, memberEmail, MESSAGES_EMAIL_SUBJECT, message);
        memberAndMessageStatus += ' ✉️';
      }
      expiredMembers.push(memberAndMessageStatus);
    } else if (isValidDate(memberExpiryDate) && new Date() > removeMembershipDate) {      
      updateMemberInfo(MEMBERS_HEADER_FULLNAME, fullName, MEMBERS_HEADER_STATUS, MEMBERS_STATUS_EX_MEMBER);
      var message = format(FINANCE_MEMBERSHIP_REMOVED_NOTIFICATION, callName || firstName, treasureMemberInfo.fullName, treasureMemberInfo.fields[MEMBERS_HEADER_TELEGRAM]);
      
      if (memberTelegramId) {
        sendText(memberTelegramId, message);
        memberAndMessageStatus += ' 💬';
      } else if (memberEmail) {
        sendEmail(treasureMemberInfo.telegramId, memberEmail, MESSAGES_EMAIL_SUBJECT, message);
        memberAndMessageStatus += ' ✉️';
      }
      removedMembers.push(memberAndMessageStatus);
    }
  }

  if (expiredMembers.length || removedMembers.length || waitingPaymentMembers.length) {
    var expiredMembersList = expiredMembers.length ? expiredMembers.join('\n') : EMPTY;
    var removedMembersList = removedMembers.length ? removedMembers.join('\n') : EMPTY;
    var waitingPaymentMembersList = waitingPaymentMembers.length ? waitingPaymentMembers.join('\n') : EMPTY;

    sendText(treasureMemberInfo.telegramId, format(FINANCE_MEMBERSHIP_TREASURER_NOTIFICATION, expiredMembersList, removedMembersList, waitingPaymentMembersList));
  }
}

/* РОБОТА З БАЗОЮ */

function getFinanceTypes()
{
  var items = getListItemsByName(FINANCE_LISTS_TYPE);
  items.remove(FINANCE_LISTS_TYPE_TRANSFER);
  items.remove(FINANCE_LISTS_TYPE_MEMBERSHIP);
  items.remove(FINANCE_LISTS_TYPE_MEMBERSHIP_TM);
  items.unshift(FINANCE_LISTS_TYPE_MEMBERSHIP_TM);
  items.unshift(FINANCE_LISTS_TYPE_MEMBERSHIP);
  return items;
}

function insertFinanceData(type, member, value, processedByMember, description) {
    var sheet = SpreadsheetApp.openById(databaseSpreadSheetId).getSheetByName(SHEET_FINANCE);
    var headerValues = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

    var dateColumnIndex = headerValues.findIndex(FINANCE_HEADER_DATE);
    var typeColumnIndex = headerValues.findIndex(FINANCE_HEADER_TYPE);
    var descriptionColumnIndex = headerValues.findIndex(FINANCE_HEADER_DESCRIPTION);
    var memberColumnIndex = headerValues.findIndex(FINANCE_HEADER_MEMBER);
    var processedByMemberColumnIndex = headerValues.findIndex(FINANCE_HEADER_PROCESSED_BY);
    var valueColumnIndex = headerValues.findIndex(FINANCE_HEADER_AMOUNT);

    var lastRowIndex = sheet.getLastRow();
    var lastColumnIndex = sheet.getLastColumn();

    sheet.insertRowsAfter(lastRowIndex, 1);
    var insertedRange = sheet.getRange(lastRowIndex + 1, 1, 1, lastColumnIndex);

    var values = [
        []
    ];
    for (var i = 0; i < lastColumnIndex; i++) {
        values[0].push('');
    }

    values[0][dateColumnIndex] = shortDate(new Date());
    values[0][typeColumnIndex] = type;
    values[0][memberColumnIndex] = member;
    values[0][processedByMemberColumnIndex] = processedByMember;
    values[0][descriptionColumnIndex] = description;
    values[0][valueColumnIndex] = value;

    insertedRange.setValues(values);
}

function getBalancesByMembers() {
    var sheet = SpreadsheetApp.openById(databaseSpreadSheetId).getSheetByName(SHEET_FINANCE);
    var headerValues = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

    var processedByMemberColumnIndex = headerValues.findIndex(FINANCE_HEADER_PROCESSED_BY);
    var valueColumnIndex = headerValues.findIndex(FINANCE_HEADER_AMOUNT);

    var range = sheet.getRange(2, 1, sheet.getLastRow(), sheet.getLastColumn());
    var values = range.getValues();

    var balances = {};

    for (var i = 0; i < values.length; i++) {
        var rowValues = values[i];

        var processedByMember = rowValues[processedByMemberColumnIndex];
        var value = rowValues[valueColumnIndex];

        if (!balances[processedByMember]) {
            balances[processedByMember] = 0;
        }
        balances[processedByMember] += value;
    }
    return balances;
}