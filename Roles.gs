
var HEADER_DATE = "Дата";


/* ТЕКСТИ */


function showSignedRoles(userTelegramId, fullName, me)
{
  var signedRoles = getSignedRoles(fullName);
  
  if (!signedRoles)
  {
    if (me) {
      showMenu(userTelegramId, MEETING_ROLES_NOT_ASSIGNED);
    }
    else {
      showMenu(userTelegramId, format(MEETING_ROLES_MEMBER_NOT_ASSIGNESD,fullName));
    }
    return true;
  }
  else
  {
    if (me) {
      showMenu(userTelegramId, MEETING_ROLES_ASSIGNED_TITLE);
    }
    else {
      showMenu(userTelegramId, format(MEETING_ROLES_ASSIGNED_MEMBER_TITLE, fullName));
    }
  }
  
  for (var date in signedRoles) {
    var dateSignedRoles = signedRoles[date];
    var formattedDate = formatDate(new Date(date));
    showMenu(userTelegramId, format(MEETING_ROLES_ASSIGNED_DATE_TITLE, formattedDate));
    
    for (var i = 0; i < dateSignedRoles.length; i++)
    {
      var role = dateSignedRoles[i];
      var callbackData = MEETING_ROLE_REJECT_CALLBACK + '___' + formattedDate + '___' + role + '___' + fullName;  
      
      var callbackId = inseertCallback(callbackData);
        
      var keyBoard = [ {text: MEETING_ROLE_REJECT, callback:  callbackId} ];
      sendText(userTelegramId, role + ', <i>' + formattedDate + '</i>', getMenuInlineKeyBoard(keyBoard));
    }
  }
}


function confirmMeetingRoles(userTelegramId, date)
{
  showMenu(userTelegramId, format(MEETING_ROLES_CONFIRM_TITLE, date));
  
  var sheet = SpreadsheetApp.openById(databaseSpreadSheetId).getSheetByName(SHEET_MEETINGS);
  
  var headerValues = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  var toastmasterColumnIndex = headerValues.findIndex(MEETING_ROLE_TOASTMASTER) + 1;
  var dateColumnIndex = headerValues.findIndex(HEADER_DATE) + 1;
  var rolesValues = [];

  var values = sheet.getRange(1, dateColumnIndex, sheet.getLastRow(), sheet.getLastColumn()).getValues();
  
  //MEETING_ROLES_CONFIRM  
  var meetingDate = parseDate(date);
  
  for (var i = 0; i < values.length; i++)
  {    
    var row = values[i];
    
    var parsedDate = parseDate(row[0]);
    
    if (meetingDate.getYear() == parsedDate.getYear() 
      && meetingDate.getMonth() == parsedDate.getMonth() 
      && meetingDate.getDate() == parsedDate.getDate()) {
          
        for (var k = 1; k < row.length; k++)
        {
          var role = values[0][k];
          
          if (role.indexOf(MEETING_SPEACH_PROJECT) > -1
              || role.indexOf(MEETING_SPEACH_TITLE) > -1)
          {
            continue;
          }
                      
          var member = row[k];
          if (role) 
          {
            var callbackData = MEETING_ROLE_CHANGE_CALLBACK + '___' + date + '___' + role + '___';            
            var callbackId = inseertCallback(callbackData);            
            
            var keyBoard = [ {text: MEETING_ROLE_CHANGE, callback:  callbackId}];
            
            if (member)
            {
              callbackData = MEETING_ROLE_CLEAN_CALLBACK + '___' + date + '___' + role;
              callbackId = inseertCallback(callbackData);
              keyBoard.push({text: MEETING_ROLE_CLEAN, callback:  callbackId});
            }
            
            sendText(userTelegramId, role + ', <i>' + (member ? member : MEETING_ROLE_NOBODY) + '</i>', getMenuInlineKeyBoardMultiline(keyBoard));
            //sendText(userData.telegramId, role +":" +member);
          }
        }
        
        break;
      }   
  }

}

function confirmRolesOfLastMeeting()
{
  var lastMeetingDate = getLastMeetingDate();
  findOfficerToConfirmMeetingRoles(formatDate(lastMeetingDate));
}

function findOfficerToConfirmMeetingRoles(date, currentOfficerFullName, userTelegramId)
{
  var isNextOfficerFound = false;
  var officers = getAllMembers(MEMBERS_HEADER_POSITION);
  
  for (var i = 0; i < officers.length; i++)
  {
    var officer = officers[i];
    if (!currentOfficerFullName || officer == currentOfficerFullName)
    {
      if (i + 1 < officers.length)
      {
        // Пропускаємо першого офіцера - це повинен бути президент
        var nextOfficerData = getMemberInfo(MEMBERS_HEADER_FULLNAME, officers[i + 1]);
        askToConfirmMeetingRoles(nextOfficerData.telegramId, date);
        isNextOfficerFound = true;
        break;
      }
    }
  }
              
  if (!isNextOfficerFound)
  {
    sendMessageToOfficer(OFFICER_POSITION_PRESIDENT, 'Привіт! На жаль, ролі на засіданні <b>' + date + '</b> ніхто не зміг підтвердити.');   
  }
  else
  {
    if (userTelegramId)
    {
      sendText(userTelegramId, 'Дякую за відповідь! Запитав наступного офіцера 😊');
    }
  }
}

function askToConfirmMeetingRoles(userTelegramId, date)
{  
  showMenu(userTelegramId, 'Необхідно підтвердити виконання ролей. Ви були на засіданні ' + date + '?', [NO, YES]);  
  updateMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userTelegramId, MEMBERS_HEADER_TELEGRAM_STATUS, MEETING_ROLES_CONFIRM + '___' + date);  
}

/* РОБОТА З БАЗОЮ */

function getSignedRoles(fullName)
{
  var nextMeetings = getNextMeetingDates(SIGN_UP_FOR_NEXT_MEETINGS_AMOUNT);
  
  var sheet = SpreadsheetApp.openById(databaseSpreadSheetId).getSheetByName(SHEET_MEETINGS);

  var headerValues = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  var dateColumnIndex = headerValues.findIndex(HEADER_DATE) + 1;
  headerValues = sheet.getRange(1, dateColumnIndex, 1, sheet.getLastColumn()).getValues()[0];
  
  var toastmasterColumnIndex = headerValues.findIndex(MEETING_ROLE_TOASTMASTER) + 1;

  var values = sheet.getRange(2, dateColumnIndex, sheet.getLastRow(), sheet.getLastColumn()).getValues();
  var now = new Date();
  
  var roles = {};
  var isFoundRole = false;
  
  for (var i = 0; i < values.length; i++)
  {
    if (values[i][0] >= now)
    {
      var dateRoles = [];
      for (var k = 1; k < values[i].length; k++)
      {
        if (values[i][k] == fullName)
        {
          dateRoles.push(headerValues[k]);
        }
      }
      if (dateRoles.length > 0)
      {
        roles[values[i][0]] = dateRoles;
        isFoundRole = true;
      }
    }
  }
  
  if (!isFoundRole)
  {
    return null;
  }
  
  return roles;
}
