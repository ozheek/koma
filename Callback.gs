
function processCallback(contents)
{
  var callbackId = contents.callback_query.from.id;
    var data = contents.callback_query.data;
    
    var callback = findCallback(data);
    
    if (!callback)
    {
      showMenu(callbackId, "Сесія закінчилась, будь ласка, виконайте операцію ще раз!" );
    }
    else
    {
      var statuses = callback.split('___');
      
      if (statuses)
      {
        if (statuses[0] == MEETING_ROLE_REJECT_CALLBACK)
        {
          var date = statuses[1];
          var role = statuses[2];
          var fullName = statuses[3];
          var now = new Date();
          
          var memberInfo = getMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, callbackId);
          
          if (memberInfo && (memberInfo.fields[MEMBERS_HEADER_POSITION] == OFFICER_POSITION_PRESIDENT || memberInfo.fields[MEMBERS_HEADER_POSITION] == OFFICER_POSITION_VP_EDUCATION )
            || now.addDays(7) <= parseDate(date))
          {
            if (updateMeetingInfo(date, role, '', false))
            {
              var roleMemberInfo = getMemberInfo(MEMBERS_HEADER_FULLNAME, fullName);
              sendMemberCanceledRoleMessage(roleMemberInfo, date, role)
              showMenu(callbackId, "Роль " + role + " " + " на засіданні " + date + " тепер вільна!" );
            }
          }
          else
          {
            showMenu(callbackId, "На жаль, не можна відмовитись від ролі на найближчкому засіданні. Спробуйте прийти! 😊" );
          }
        }
        else if (statuses[0] == MEETING_ROLE_CLEAN_CALLBACK)
        {
          var date = statuses[1];
          var role = statuses[2];
          var fullName = statuses[3];
          
          if (updateMeetingInfo(date, role, '', false))
          {
            showMenu(callbackId, "Дякую, записав, що роль " + role + " " + " на засіданні " + date + " ніхто не виконував!" );
          }
        }
        else if (statuses[0] == MEETING_SPEACH_CHANGE_PROJECT_CALLBACK)
        {
          updateMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, callbackId, MEMBERS_HEADER_TELEGRAM_STATUS, callback);  
          
          var projects = getListItemsByName(MEETING_PROJECTS);
          projects.unshift(MEETING_SPEACH_PROJECT_EMPTY);
          showMenu(callbackId, MEETING_SPEACH_CHOOSE_PROJECT, projects); 
        }
        else if (statuses[0] == MEETING_SPEACH_CHANGE_TITLE_CALLBACK)
        {
          updateMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, callbackId, MEMBERS_HEADER_TELEGRAM_STATUS, callback);         
          showMenu(callbackId, MEETING_SPEACH_CHOOSE_TITLE); 
        }
        else if (statuses[0] == MEETING_ROLE_CHANGE_CALLBACK)
        {
          var date = statuses[1];
          var role = statuses[2];
          
          updateMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, callbackId, MEMBERS_HEADER_TELEGRAM_STATUS, callback);         
          showMenu(callbackId, 'Хто виконував роль ' + role + ' на засіданні ' + date + '?', getAllMembers());          
        }
      }      
    }     
}


/* РОБОТА З БАЗОЮ ДАННИХ */

function inseertCallback(data)
{
  var time = (new Date()).getTime();      
  var sheet = SpreadsheetApp.openById(databaseSpreadSheetId).getSheetByName(SHEET_CALLBACK);

  var id = time;

  var lastRow = sheet.getLastRow();
  if (lastRow == 0) lastRow = 1;
  
  sheet.insertRowsAfter(lastRow, 1);
  sheet.getRange(sheet.getLastRow() + 1, 1, 1, 3).setValues([[id, time, data]]);
  
  return id;
}

function findCallback(id)
{
  var sheet = SpreadsheetApp.openById(databaseSpreadSheetId).getSheetByName(SHEET_CALLBACK);

  var values = sheet.getRange(1, 1, sheet.getLastRow(), sheet.getLastColumn()).getValues();
  
  for (var i = 0; i < values.length; i++)
  {
    if (values[i][0] == id)
    {
      return values[i][2];
    }
  }
}