var REGISTRATION = 'Реєстрація';

/* МЕНЮ */

var REGISTRATION_PHONE_BUTTON_TEXT = '📲 Надати свій номер телефону';

var YES_REGISTER_ME = 'Так! Хочу зареєструватись 😍';
var NO_REGISTER_ME = 'Ні, не маю бажання реєструватись 😔';


/* ТЕКСТИ */

var REGISTRATION_MEMBER_ALREADY_EXISTS = 'На жаль, користувач з іменем <b>{0} вже існує</b> в базі 😔\
\n\nCпробуйте інший варіант написання імені або зверніться до офіцерів клубу.';

var REGISTRATION_USER_IS_NOT_REGISTERED = 'Надайте, будь ласка, доступ до номеру телефону, щоб зареєструватись 😊 \
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
var REGISTRATION_INVALID_EMAIL = 'Це не дуже схоже на e-mail... Перевiрте, будь ласка, чи правильно ви написали електронну адресу 😊';
var REGISTRATION_NOT_FINISHED = 'Привiт! Ваш номер є у базi, але ми, схоже, не познайомились як слiд 😊';

var REGISTRATION_STEP_1 = 'Введіть ваше прізвище:'; //3
var REGISTRATION_STEP_2 = 'Як вас звати (Ім\'я)?'; //1
var REGISTRATION_STEP_3 = 'Введіть або виберіть кличний відмінок вашого імені:'; //2
var REGISTRATION_STEP_4 = 'Вкажiть, будь ласка, якої ви статi:';

var REGISTRATION_STEP_5 = 'Введіть, будь ласка, електронну пошту:';

var REGISTRATION_NOT_FINISHED = 'Вітаю, {0}! 😊\
                                              \n\nВи почали реєструватись у боті клуба ораторської майстерності <i>"{2}"</i>.\
                                              \n\nПроте не завершили реєстрацію, що розпочали <b>{1}</b>. Тому я вирішив нагадати про себе і показати, яким функціоналом я володію! 😎\
                                              \n\nХочете глянути? 😍';
var REGISTRATION_NOT_FINISHED_NO_FULLNAME = 'Вiтаю, {0}! 😊\
                                              \n\nВи почали реєструватись у боті клуба ораторської майстерності <i>"{2}"</i>.\
                                              \n\nПроте не завершили реєстрацію, що розпочали <b>{1}</b>.\
                                              \n\nБажаєте продовжити? 😍';

                                              
var REGISTRATION_USERDATA_HAS_BEEN_REMOVED = "Ваші дані були успішно видалені з бази! 😟\n\nЯкщо ви передумаєте — можете повтори реєстрацію ще раз ☺\
                                              \n\nЯк будете готові — відправте мені будь-який текст або команду /start.";
var REGISTRATION_USERDATA_HAS_BEEN_REMOVED_BEFORE = "Вашi данi не було знайдено у базi. 😟 Швидше за все, їх вже видалив хтось iз офiцерiв.\n\nЯкщо ви передумаєте — можете повтори реєстрацію ще раз ☺\
                                                  \n\nЯк будете готові — відправте мені будь-який текст або команду /start.";

var REGISTRATION_CANCELED_BY_USER = "📑😌 <b>Скасування реєстрації</b>\n\nЩойно користувач скасував реєстрацію і видалив свої данi з бази:\n\n<b>Користувач:</b> {0}\n<b>Телеграм:</b> @{1}\n<b>Телеграм ID:</b> {2}"
var REGISTRATION_NEW_USER = "📑😍 <b>Нова реєстрація</b>\n\nЩойно зареєструвався новий користувач:\n\n<b>Користувач:</b> {0}\n<b>Телеграм:</b> @{1}\n<b>Телеграм ID:</b> {2}"



/* CALLBACKS */

var REGISTRATION_CONTINUE_CALLBACK = 'registration_continue_callback';
var REGISTRATION_CANCEL_CALLBACK = 'registration_cancel_callback';


function processRegistration(userData, text) {
    if (userData.statuses[1]) {
        if (userData.statuses[2]) {
            if (userData.statuses[3]) {
               if (userData.statuses[4]) {
                  if (text == EMPTY || validateEmail(text)) {
                      var emailAddress = (text == EMPTY) ? '' : text;
                      updateMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userData.telegramId, MEMBERS_HEADER_EMAIL_ADDRESS, emailAddress);
  
                      sendWelcomeMessage(userData.telegramId);
                      return false;
                  } else {
                      sendText(userData.telegramId, REGISTRATION_INVALID_EMAIL);
                      showMenu(userData.telegramId, REGISTRATION_STEP_5, [EMPTY]);
                  }
              } else {
                 updateMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userData.telegramId, MEMBERS_HEADER_SEX, text);
                 
                 showMenu(userData.telegramId, REGISTRATION_STEP_5, [EMPTY]);
                 return true;
              }
            } else {
                var callname = capitalizeFirstLetter(text);
                updateMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userData.telegramId, MEMBERS_HEADER_CALLNAME, callname);
                
                showMenu(userData.telegramId, REGISTRATION_STEP_4, [SEX_MALE, SEX_FEMALE]);
                return true;
            }
        } else {
             if (isCyrillic(text)) {
                var firstname = capitalizeFirstLetter(text);
                var lastname = capitalizeFirstLetter(userData.statuses[1]);
                var fullName = (firstname + ' ' + lastname).trim();
                var memberInfo = getMemberInfo(MEMBERS_HEADER_FULLNAME, fullName);

                if (memberInfo) {
                    var newStatus = REGISTRATION + "___";
                    var userTelegramId = userData.telegramId;

                    updateMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userTelegramId, MEMBERS_HEADER_TELEGRAM_STATUS, newStatus);

                    sendText(userTelegramId, format(REGISTRATION_MEMBER_ALREADY_EXISTS, fullName));
                    sendText(userTelegramId, REGISTRATION_STEP_1);

                    //var phoneNumber = userData.fields[MEMBERS_HEADER_MOBILE_PHONE_NUMBER];
                    //checkRegistration(userTelegramId, phoneNumber);
                } else {
                    updateMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userData.telegramId, MEMBERS_HEADER_NAME, firstname);
                    updateMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userData.telegramId, MEMBERS_HEADER_LASTNAME, lastname);
                    updateMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userData.telegramId, MEMBERS_HEADER_FULLNAME, fullName);

                    var callname = getCallName(capitalizeFirstLetter(text));
                    updateMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userData.telegramId, MEMBERS_HEADER_CALLNAME, callname);
                    showMenu(userData.telegramId, REGISTRATION_STEP_3, [callname]);
                    return true;
                }
            } else {
                showMenu(userData.telegramId, REGISTRATION_INVALID_NAME);
            }
        }
    } else {
        if (isCyrillic(text)) {
            showMenu(userData.telegramId, REGISTRATION_STEP_2);
            return true;
        } else {
            showMenu(userData.telegramId, REGISTRATION_INVALID_LASTNAME);
        }
    }
}

function checkRegistration(userTelegramId, phoneNumber, username) {
  var phoneNumberWithoutPlus = phoneNumber.toString().replace("+", "");
  var contactInfo = getMemberInfo(MEMBERS_HEADER_MOBILE_PHONE_NUMBER, phoneNumberWithoutPlus);

  if (contactInfo && contactInfo.fullName)
  {
    updateMemberInfo(MEMBERS_HEADER_MOBILE_PHONE_NUMBER, phoneNumberWithoutPlus, MEMBERS_HEADER_TELEGRAM_ID, userTelegramId);
    updateMemberInfo(MEMBERS_HEADER_MOBILE_PHONE_NUMBER, phoneNumberWithoutPlus, MEMBERS_HEADER_TELEGRAM, username);
    updateMemberInfo(MEMBERS_HEADER_MOBILE_PHONE_NUMBER, phoneNumberWithoutPlus, MEMBERS_HEADER_DATE, formatDate(new Date()));
    sendWelcomeMessage(userTelegramId);    
  }
  else 
  {
    var contactInfo = getMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userTelegramId);
    if (!contactInfo) {
        //sendMessageToOfficer(OFFICER_POSITION_PRESIDENT, 'Привіт! Користувач <b>' + fullName + '</b> з телефоном <b>' + phoneNumber + '</b> спробував зареєструватись, але його <b>не було знайдено</b>.');
        var status = MEMBERS_STATUS_GUEST;
        var telegramStatus = REGISTRATION + "___";

        insertMembersData('', '', '', '', phoneNumberWithoutPlus, '', status, '', userTelegramId, username, telegramStatus);
        showMenu(userTelegramId, REGISTRATION_STEP_1);
    } else {
        if (contactInfo.fullName) {
            showMainMenu(userTelegramId);
        } else {
            var newStatus = REGISTRATION + "___";
            updateMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userTelegramId, MEMBERS_HEADER_TELEGRAM_STATUS, newStatus);
          
            sendText(userTelegramId, REGISTRATION_NOT_FINISHED);
            showMenu(userTelegramId, REGISTRATION_STEP_1);
        }
    }
  }
}

function searchUnfinishedRegistrationsAndNotifyUsers() {

  var sheet = SpreadsheetApp.openById(databaseSpreadSheetId).getSheetByName(SHEET_CONTACTS);
  var headerValues = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  
  var telegramIdColumnIndex = headerValues.findIndex(MEMBERS_HEADER_TELEGRAM_ID);
  var statusesColumnIndex = headerValues.findIndex(MEMBERS_HEADER_TELEGRAM_STATUS);
  var registrationDateColumnIndex = headerValues.findIndex(MEMBERS_HEADER_DATE);
  
  var fullNameColumnIndex = headerValues.findIndex(MEMBERS_HEADER_FULLNAME);
  var callNameColumnIndex = headerValues.findIndex(MEMBERS_HEADER_CALLNAME);
  
  var values = sheet.getRange(2, 1, sheet.getLastRow(), sheet.getLastColumn()).getValues();  
  
  var delayInMiliseconds = REGISTRATION_DAYS_BEFORE_ASK * 24 * 3600 * 1000; 
  var today = new Date().setHours(0,0,0,0); 
  
  for (var i = 0; i < values.length - 1; i++) {
    var telegramId = values[i][telegramIdColumnIndex];
    var statusesString = values[i][statusesColumnIndex];
    
    if (telegramId && statusesString && statusesString.indexOf(REGISTRATION) > -1) {
      var registrationDate = parseDate(values[i][registrationDateColumnIndex]);
      
      if (today - registrationDate.getTime() >= delayInMiliseconds) {           
        var callbacks = [{data: REGISTRATION_CONTINUE_CALLBACK + '___' + telegramId, text: YES},{data: REGISTRATION_CANCEL_CALLBACK  + '___' + telegramId, text: NO}];
        
        var callName = values[i][callNameColumnIndex] || CALLNAME_GENERAL;
        var fullName = values[i][fullNameColumnIndex];
        var message = fullName ? REGISTRATION_NOT_FINISHED : REGISTRATION_NOT_FINISHED_NO_FULLNAME;
        
        sendTextWithCallbacks(telegramId, callbacks, format(message, callName, formatDate(registrationDate), CLUB_NAME));
      }
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

function sendWelcomeMessage(userTelegramId) {
    var memberInfo = getMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userTelegramId);
    var callname = memberInfo.fields[MEMBERS_HEADER_CALLNAME];

    showMenu(userTelegramId, format(REGISTRATION_SUCCESS, callname, CLUB_NAME), MAIN_MENU);
  
    sendMessageToOfficer(OFFICER_POSITION_VP_MEMBERSHIP, format(REGISTRATION_NEW_USER, memberInfo.fullName, 
                                                                             memberInfo.fields[MEMBERS_HEADER_TELEGRAM], 
                                                                             memberInfo.telegramId));
}