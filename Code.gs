
function ttt(data)
{
   var spreadsheet = SpreadsheetApp.openById('1De09vO4YHLGzPpy8Xfzqg2YExEZ_5si0wvam3wagt1w');
  var sheet = spreadsheet.getSheetByName('Sheet1');
  sheet.appendRow([data]);
}


function test()
{
  //                      showMenu('432298769', format(MEETING_ASSIGN_ROLE_BUSY_DATE, 'date', 'sss'), getAvailableRoleDates('12-09-2019'));

//cancelMeeting('19-09-2019', 'xxx');
  //sendMeetingNotifications();
  
  
    //var roles = getMeetingProgramRoles('29-08-2019');
  //Browser.msgBox(JSON.stringify(roles));
  return;
  
  //sendText('574381511', 'Привіт! :) Який в тебе нік в телеграмі?');
  
  //Browser.msgBox(getListItemsByName(INVENTORY_LISTS_TYPE));
  //Browser.msgBox(format('Виберіть нового ментору для {0}:', 'ffff'));
  //showMenu('432298769', 'Це було надходження коштів чи витрати?', ['ddddd'])         
  //confirmRolesOfLastMeeting();
  //Browser.msgBox(getMemberInfo(MEMBERS_HEADER_FULLNAME, 'Олексій Петренко').fields['Мобільний телефон']);
  //askToConfirmMeetingRoles('432298769', '27-06-2019');
  return;
  

                insertFinanceData(FINANCE_TYPE_TRANSFER, 'aaa', -1 * 333, 'fds', 'dfsfs');
        //showMenu('432298769', 'Це було надходження коштів чи витрати?', getAllMembers());
        //showMenu('432298769', 'Це було надходження коштів чи витрати?', getAllMembers());
      //var userData = getUserData('432298769');
  //Browser.msgBox(JSON.stringify(userData));
    //    var newStatus = userData.status + "DDD" + "___";
    //    updateUserStatus('432298769', newStatus);
  
  
  //showMainMenu('432298769');
  //showMenu('432298769');
}

function getMe() {
  var url = telegramUrl + "/getMe";
  var response = UrlFetchApp.fetch(url);
}

function doGet(e) {
//{"parameter":{"ddd":"333"},"contextPath":"","contentLength":-1,"queryString":"ddd=333","parameters":{"ddd":["333"]}}
  return HtmlService.createHtmlOutput("Hello from KOMA");
}

function doPost(e)
{  
  var contents = JSON.parse(e.postData.contents);
  //ttt(contents);

  //parse user data
  if (contents.callback_query)
  {
    processCallback(contents);
  }
  else if (contents.message)
  {
    var userTelegramId = contents.message.from.id;   
    var text = contents.message.text; 
    var keyBoard = null;
    
    // Відправлено телефон - зареєструвати користувача
    if (contents.message.contact)
    {
      if (contents.message.contact.user_id == userTelegramId)
      {
          var phoneNumber = contents.message.contact.phone_number;
          var username = contents.message.from.username;        
        
        checkRegistration(userTelegramId, phoneNumber, username, contents.message.contact.first_name, contents.message.contact.last_name);
      }
      else
      {
        requestPhoneNumberForRegistration(userTelegramId);        
      }
    }
    else
    { 
      var replyToMessageText = contents.message.reply_to_message ? contents.message.reply_to_message.text : null;
      if (replyToMessageText && replyToMessageText.length > 2 && replyToMessageText.substring(0, REPLY_SYMBOL.length) == REPLY_SYMBOL)
      {
        var firstLine = replyToMessageText.split('\n')[0];
        var reaplyUserTelegramId = firstLine.split(/\(|\)/)[1];
        showMenu(reaplyUserTelegramId, text); 
      }
      else 
      {        
        //showMenu(userTelegramId, "🤔");
        var userData = getMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userTelegramId);
        
        var spaceIndex = text.indexOf(' ');
        var icon = text.substring(0, spaceIndex);
        if (icon == MANAGEMENT_ICON && text != MANAGEMENT)
        {
          text = text.substring(spaceIndex + 1);
          userData.statuses.splice(1);
          userData.status = userData.statuses[0] + '___';
        }
        
        if (!userData)
        {
          requestPhoneNumberForRegistration(userTelegramId);
        }
        else if (text == "/start" || text == MAIN_MENU)
        {
          showMainMenu(userTelegramId);
        }
        else if (text == GO_BACK)
        {
          goBack(userData);
        }
        else
        {
          processRequest(userData, text);
        }
      }
    }
  }    
}

function goBack(userData, text)
{ 
  if (!!text)
  {
    userData.statuses.push(text);
  }
  
  userData.statuses.pop();
  userData.statuses.pop();
  text = userData.statuses.pop();
  
  if ((!userData.statuses || userData.statuses.length == 0) && !text)
  {
    showMainMenu(userData.telegramId);
  }
  else
  {
    userData.status = userData.statuses.length == 0 
                      ? '' : userData.statuses.join('___') + '___';    
    
    processRequest(userData, text);
  }
}

function processRequest(userData, text)
{
  
          var isContinue = false;
          if(userData.statuses[0]) 
          {
            if (userData.statuses[0] == MANAGEMENT)
            {
              isContinue = processManagement(userData, text);
            }    
            //else if (userData.statuses[0] == MEETING_SIGN_UP_FOR_ROLE)
            //{
            //  isContinue = processSignUpForRole(userData, text);
            //}
            //else if (userData.statuses[0] == MEETING_SHOW_PROGRAM)
            //{
            //  isContinue = processShowMeetingProgram(userData, text);
            //}
            else if (userData.statuses[0] == LIBRARY)
            {
              isContinue = processLibrary(userData, text);
            }
            else if (userData.statuses[0] == MEETING)
            {
              isContinue = processMeeting(userData, text);
            }
            else if (userData.statuses[0] == REGISTRATION)
            {
              isContinue = processRegistration(userData, text);
            }
            else if (userData.statuses[0] == MEETING_ROLES_CONFIRM)
            {
              if (text == YES)
              {
                isContinue = confirmMeetingRoles(userData.telegramId, userData.statuses[1]);
              }
              else 
              {
                // Знайти іншого члена, що може підтвердити
                findOfficerToConfirmMeetingRoles(userData.statuses[1], userData.fullName, userData.telegramId);
                resetStatus(userData.telegramId);
              }
            }       
            else if (userData.statuses[0] == MEETING_SPEACH_CHANGE_PROJECT_CALLBACK)
            { 
              if (!userData.statuses[4]) {
                var date = userData.statuses[1];
                var speachRole = userData.statuses[2];
                var fullName = userData.statuses[3];
                var projectRole = speachRole.replace(MEETING_ROLE_SPEACH, MEETING_ROLE_SPEACH_PROJECT);
                
                if (updateMeetingInfo(date, projectRole, text, false))
                {
                  showMenu(userData.telegramId, format('Дякую, записав, що проект вашої промови <b>"{0}"</b> на засіданні <b>{1}</b>.', text, date) );
                  return true;
                }
              }
            }
            else if (userData.statuses[0] == MEETING_SPEACH_CHANGE_TITLE_CALLBACK)
            { 
              if (!userData.statuses[4]) {
                var date = userData.statuses[1];
                var speachRole = userData.statuses[2];
                var fullName = userData.statuses[3];
                var projectRole = speachRole.replace(MEETING_ROLE_SPEACH, MEETING_ROLE_SPEACH_TITLE);
                
                if (updateMeetingInfo(date, projectRole, text, false))
                {
                  showMenu(userData.telegramId, format('Дякую, записав, що назва вашої промови <b>"{0}"</b> на засіданні <b>{1}</b>.', text, date) );
                  return true;
                }
              }
            }
            else if (userData.statuses[0] == MEETING_ROLE_CHANGE_CALLBACK)
            {           
              var date = userData.statuses[1];
              var role = userData.statuses[2];
              
              if (updateMeetingInfo(date, role, text, false))
              {
                sendText(userData.telegramId, 'Дякую, записав!');
                resetStatus(userData.telegramId);
              }
            }
            else 
            {              
              sendMessageToOfficer(OFFICER_POSITION_VP_EDUCATION, REPLY_SYMBOL 
                                   + ' ' + userData.fullName 
                                   + ' (' + userData.telegramId + ') ' 
                                   + REPLY_SYMBOL + '\n\n' + text);     
            }
          }
          else
          {
            if (text == MANAGEMENT)
            {
              
              var memberInfo = getMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userData.telegramId);
              if (!memberInfo.fields[MEMBERS_HEADER_POSITION]) {
                 showMenu(userData.telegramId, MANAGEMENT_NO_ACCESS, MAIN_MENU);
                 isContinue = false;
              }
              else {
                showMenu(userData.telegramId, 'Яку операцію бажаєте виконати?', [LIBRARY, FINANCE, MEETING, INVENTORY, MEMBERS]);
                isContinue = true;
              }
            }
            else if (text == MEETING) {                         
              showMenu(userData.telegramId, 'Яку операцію бажаєте виконати?', [MEETING_SIGN_UP_FOR_ROLE, MEETING_SHOW_MY_ROLES, MEETING_SHOW_PROGRAM]);
              
              isContinue = true;
              //showLibraryBooks(userData.telegramId);
            }
            //else if (text == MEETING_SIGN_UP_FOR_ROLE)
            //{
            //  showMenu(userData.telegramId, 'Хочете вибрати спочатку засідання чи роль?', [MEETING_SIGN_UP_DATE, MEETING_SIGN_UP_ROLE]);
            //  isContinue = true;
            //}
            //else if (text == MEETING_SHOW_MY_ROLES)
            //{
            //  showSignedRoles(userData.telegramId, userData.fullName, true);
            //  //resetStatus(userTelegramId);
            //  isContinue = false;
            //}
            //else if (text == MEETING_SHOW_PROGRAM)
            //{
            //  showMenu(userTelegramId, 'Виберіть дату засідання:', getNextMeetingDates(SIGN_UP_FOR_NEXT_MEETINGS_AMOUNT));
            //  isContinue = true;
            //}     
            else if (text == LIBRARY) {                         
              showMenu(userData.telegramId, 'Яку операцію бажаєте виконати?', [LIBRARY_SHOW_LIST, LIBRARY_TAKE_BOOK]);
              
              isContinue = true;
              //showLibraryBooks(userData.telegramId);
            }
            else if (text == CONTACTS){
              showMenu(userData.telegramId, CONTACTS_INFO);
            }
            else 
            {          
              sendMessageToOfficer(OFFICER_POSITION_VP_EDUCATION, REPLY_SYMBOL 
                                   + ' ' + userData.fullName 
                                   + ' (' + userData.telegramId + ') ' 
                                   + REPLY_SYMBOL + '\n\n' + text);    
            }
          }
          
          if (isContinue)
          {
            var newStatus = userData.status + text + "___";
            updateMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userData.telegramId, MEMBERS_HEADER_TELEGRAM_STATUS, newStatus);
          }
}

