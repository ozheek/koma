var REGISTRATION = 'Реєстрація';

/* МЕНЮ */

var REGISTRATION_PHONE_BUTTON_TEXT = '📲 Надати свій номер телефону';

var YES_REGISTER_ME = 'Так! Хочу зареєструватись 😍';
var NO_REGISTER_ME = 'Ні, не маю бажання реєструватись 😔';

/* ТЕКСТИ */

var REGISTRATION_MEMBER_ALREADY_EXISTS = 'На жаль, користувач з іменем <b>{0} вже існує</b> в базі 😔\
\n\nЯкщо ви зареєстровані вже, зверніться до офіцерів клубу або спробуйте інший варіант написання імені.';

var REGISTRATION_USER_IS_NOT_REGISTERED = 'На жаль, ви не зареєстровані в системі 😔 Надайте, будь ласка, доступ до номеру телефону, щоб зареєструватись 😊 \
\n\nВикористовуйте кнопку:\
\n\n<b>{0}</b>\
\n\nВона знаходиться нижче 👇🏼😉';

var REGISTRATION_SUCCESS = '<b>Вітаю, {0}! Ви успішно зареєстровані в системі 😍</b>\
\n\nЦе офіційний бот клубу "{1}". Також, це зручний спосіб зв\'язатись з віце-президентом з освіти, потрібно просто відправити текстове повідомлення сюди.\
\n\nЩо ви можете робити в боті:\
\n1. Записуватись на ролі\
\n2. Отримувати нагадування\
\nта багато іншого...\
\n\nЯ постійно розвиваюсь і якщо, раптом, ви помітили, що щось працює неправильно - обов\'язково повідомте офіцерам ☺';

var REGISTRATION_INVALID_NAME = "Будь ласка, введiть iм'я кирилицею!";
var REGISTRATION_INVALID_LASTNAME = 'Будь ласка, введiть прiзвище кирилицею!';
var REGISTRATION_INVALID_EMAIL = 'Це не дуже схоже на e-mail...\nПеревiрте, будь ласка, чи правильно Ви записали адресу';
var REGISTRATION_NOT_FINISHED = 'Привiт! Ваш номер є у базi, але ми, схоже, не познайомились як слiд';
/*
var REGISTRATION_PHONE_NUMBER_IS_NOT_FOUND = 'На жаль, <b>телефон {0}</b> не закріплено за жодним користувачем 😔\
\n\n<b>Але не хвилюйтесь, я вас зареєстрував, тепер ви маєте доступ до основних функцій бота 😍</b>\
\n\nНадайте, будь ласка, персональну інформацію, щоб я міг вірно до вас звертатись 😊';
*/



var REGISTRATION_STEP_1 = 'Введіть ваше прізвище:'; //3
var REGISTRATION_STEP_2 = 'Як вас звати (Ім\'я)?'; //1
var REGISTRATION_STEP_3 = 'Введіть або виберіть кличний відмінок вашого імені:'; //2
var REGISTRATION_STEP_4 = 'Введіть, будь ласка, електронну пошту:';





function processRegistration(userData, text) {
    if (userData.statuses[1]) {
        if (userData.statuses[2]) {
            if (userData.statuses[3]) {
                if (text) {
                    if(text == EMPTY || validateEmail(text)) {
                      updateMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userData.telegramId, MEMBERS_HEADER_EMAIL_ADDRESS, text);
                      
                      var firstname = capitalizeFirstLetter(userData.statuses[2]); //memberInfo.fields[MEMBERS_HEADER_LASTNAME];
                      var lastname = capitalizeFirstLetter(userData.statuses[1]); //memberInfo.fields[MEMBERS_HEADER_NAME];
                      var fullname = (firstname + ' ' + lastname).trim();
      
                      updateMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userData.telegramId, MEMBERS_HEADER_FULLNAME, fullname);
      
                      sendWelcomeMessage(userData.telegramId);
                      
                      return false;
                      
                    } 
                    else 
                    {
                      sendText(userData.telegramId, REGISTRATION_INVALID_EMAIL);
                      showMenu(userData.telegramId, REGISTRATION_STEP_4, [EMPTY]);
                    }
                } 
            } 
            else 
            {
                updateMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userData.telegramId, MEMBERS_HEADER_CALLNAME, capitalizeFirstLetter(text));

                var memberInfo = getMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userData.telegramId);
                
                showMenu(userData.telegramId, REGISTRATION_STEP_4, [EMPTY]);

                return true;
            }
        }
        else 
        {
            var name = capitalizeFirstLetter(text);
            
            if (isCyrillic(name)) 
            {
              var fullName = name + ' ' + userData.statuses[1];
              var memberInfo = getMemberInfo(MEMBERS_HEADER_FULLNAME, fullName);
              
              if (memberInfo) 
              {
                  var newStatus = REGISTRATION + "___";
                  var userTelegramId = userData.telegramId;
                  var phoneNumber = userData.fields[MEMBERS_HEADER_MOBILE_PHONE_NUMBER];
                  
                  updateMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userTelegramId, MEMBERS_HEADER_TELEGRAM_STATUS, newStatus);
                  
                  sendText(userTelegramId, format(REGISTRATION_MEMBER_ALREADY_EXISTS, fullName));
                  sendText(userTelegramId, REGISTRATION_STEP_1);
                  
                  checkRegistration(userTelegramId, phoneNumber);
              } 
              else 
              {
                updateMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userData.telegramId, MEMBERS_HEADER_NAME, name);
                    
                var callname = getCallName(name);
  
                showMenu(userData.telegramId, REGISTRATION_STEP_3, [callname]);
              }
              return true;
            } 
            else 
            {
              sendText(userData.telegramId, REGISTRATION_INVALID_NAME);
            }
        }
    } 
    else 
    {
        var memberInfo = getMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userData.telegramId);
        var lastname = capitalizeFirstLetter(text); //memberInfo.fields[MEMBERS_HEADER_NAME];
        
        if(isCyrillic(lastname))
        {
          updateMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userData.telegramId, MEMBERS_HEADER_LASTNAME, lastname);
          sendText(userData.telegramId, REGISTRATION_STEP_2 /* [memberInfo.fields[MEMBERS_HEADER_NAME]] */);
          return true;
        }
        else 
        {
          sendText(userData.telegramId, REGISTRATION_INVALID_LASTNAME);
        } 
    }
}





function requestPhoneNumberForRegistration(userTelegramId) {
    var keyBoard = '{\
            "one_time_keyboard": true,\
            "resize_keyboard": true,\
            "keyboard": [[{\
                "text": "' + REGISTRATION_PHONE_BUTTON_TEXT + '",\
                "request_contact": true\
            }]]\
        }';
    sendText(userTelegramId, format(REGISTRATION_USER_IS_NOT_REGISTERED, REGISTRATION_PHONE_BUTTON_TEXT), keyBoard);
}






function checkRegistration(userTelegramId, phoneNumber/*, username, firstname, lastname */) {
    var phoneNumberWithoutPlus = phoneNumber.replace('+', '');
    var contactInfo = getMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userTelegramId);
    
    if(!contactInfo) 
    {
      //sendMessageToOfficer(OFFICER_POSITION_PRESIDENT, 'Привіт! Користувач <b>' + fullName + '</b> з телефоном <b>' + phoneNumber + '</b> спробував зареєструватись, але його <b>не було знайдено</b>.');
        //var callname = '';
        //var email = '';
        //var club = '';
        //insertMembersData(firstname, lastname, callname, phoneNumberWithoutPlus,  email, status, club, userTelegramId, username);
        var status = MEMBERS_STATUS_GUEST;
        var newStatus = REGISTRATION + "___";
        
        insertMembersData('', '', '', phoneNumberWithoutPlus,  '', status, '', userTelegramId, '');
        updateMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userTelegramId, MEMBERS_HEADER_TELEGRAM_STATUS, newStatus);

        //sendText(userTelegramId, format(REGISTRATION_PHONE_NUMBER_IS_NOT_FOUND, phoneNumber));
        sendText(userTelegramId, REGISTRATION_STEP_1);
    }
    else
    {
        if (contactInfo && contactInfo.name) {
          showMainMenu(userTelegramId);
        } 
        else
        {
          var status = MEMBERS_STATUS_GUEST;
          var newStatus = REGISTRATION + "___";
          
          updateMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userTelegramId, MEMBERS_HEADER_TELEGRAM_STATUS, newStatus);
          sendText(userTelegramId,REGISTRATION_NOT_FINISHED);
          sendText(userTelegramId, REGISTRATION_STEP_1);
        }
    }
}







function sendWelcomeMessage(userTelegramId) {
    var memberInfo = getMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userTelegramId);
    var callname = memberInfo.fields[MEMBERS_HEADER_CALLNAME];

    showMenu(userTelegramId, format(REGISTRATION_SUCCESS, callname, CLUB_NAME), MAIN_MENU);
}