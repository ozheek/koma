var SHEET_CONTACTS = "Контакти"

/* МЕНЮ */
var MEMBERS_SHOW_LIST = 'Показати список';
var MEMBERS_ADD = 'Додати';
var MEMBERS_EDIT = 'Редагувати';
var MEMBERS_SEND_MESSAGE = 'Відправити повідомлення';
var MEMBERS_SEND_TELEGRAM_MESSAGE = '💬 Телеграм';
var MEMBERS_SEND_EMAIL_MESSAGE = '✉️ E-mail';

var MEMBERS_ADDED_MEMBER_SEND_EMAIL = '✉️ Привітати';
var MEMBERS_ADDED_MEMBER_ADD_NEW = '➕ Додати нового';
var MEMBERS_ADDED_MEMBER_EDIT = '✏ Редагувати';

var SEX_MALE = "Чоловiча";
var SEX_FEMALE = "Жiноча";

/* СПИСКИ */
var MEMBERS = '👥 Члени клубу';
var MEMBERS_STATUSES = 'Статуси';
var MEMBERS_PROGRAM = 'Програма';
var MEMBERS_POSITIONS = "Посади";
var MEMBERS_PROGRAMS = "Програми";
var MEMBERS_CLUBS = "Клуби";

var MEMBERS_PROGRAM_KOMA = 'КОМА';
var MEMBERS_PROGRAM_TOASTMASTERS = 'Toastmasters';

/* СТАТУСИ */
var MEMBERS_STATUS_GUEST = 'Гість';
var MEMBERS_STATUS_WAITING_PAYMENT = 'Чекаємо на внесок';
var MEMBERS_STATUS_EX_MEMBER = 'Колишній член';
var MEMBERS_STATUS_MEMBER = 'Дійсний член';

/* ЗАГОЛОВКИ БАЗИ ДАННИХ */
var MEMBERS_HEADER_FULLNAME = "Ім'я та прізвище";
var MEMBERS_HEADER_MOBILE_PHONE_NUMBER = "Мобільний телефон";
var MEMBERS_HEADER_NAME = "Ім'я";
var MEMBERS_HEADER_LASTNAME = "Прізвище";
var MEMBERS_HEADER_CALLNAME = "Кличний відмінок";
var MEMBERS_HEADER_STATUS = "Статус";
var MEMBERS_HEADER_EMAIL_ADDRESS = "Електронна пошта";
var MEMBERS_HEADER_CLUB = "Клуб";
var MEMBERS_HEADER_SEX = "Стать";
var MEMBERS_HEADER_POSITION = "Посада";
var MEMBERS_HEADER_PROGRAM = 'Програма';
var MEMBERS_HEADER_DATE = 'Дата реєстрації';
var MEMBERS_HEADER_MENTOR = 'Наставник';
var MEMBERS_HEADER_FACEBOOK = 'Facebook';
var MEMBERS_HEADER_TELEGRAM = 'Телеграм';
var MEMBERS_HEADER_MEMBERSHIP_EXPIRES = "Членство до";

/* CALLBACKS */
var MEMBERS_SEND_TELEGRAM_MESSAGE_CALLBACK = 'send_telegram_message_callback';
var MEMBERS_SEND_EMAIL_MESSAGE_CALLBACK = 'send_email_message_callback';
var MEMBERS_EDIT_MEMBER_CALLBACK = 'edit_member';
var MEMBERS_ADD_NEW_MEMBER_CALLBACK = 'add_new_member';

var MEMBERS_CANCEL_MEMBERSHIP_CALLBACK = 'membership_cancel_callback';
var MEMBERS_CANCEL_WAITING_PAYMENT_CALLBACK = 'membership_waiting_payment';

var MEMBERS_ACCEPT_SEND_MESSAGE_CALLBACK = 'accept_send_message';
var MEMBERS_REJECT_SEND_MESSAGE_CALLBACK = 'reject_send_message';

var MEMBERS_KEEP_MEMBERSHIP_CALLBACK = 'membership_keep_callback';

/* ПОШУК ПО БАЗI */
var MEMBER_SEARCH_FAILED = 'На жаль, члена клубу з таким iменем не було знайдено в базi...\
                        \n\nПеревiрте, будь ласка, чи правильно ви ввели iм\'я і прiзвище та спробуйте знову!';
var SEVERAL_MEMBERS_FOUND = 'За вашим запитом я знайшов декiлька членiв клубу.\
                             \n\nБудь ласка, оберiть когось iз них або повторiть пошук!';
var MEMBER_SEARCH_SUCCESS = 'Я знайшов члена клубу з iменем <b>{0}</b> у своїй базi, i ми можемо продовжувати далi!'

/* РОБОЧІ ЗАГОЛОВКИ */
var MEMBERS_HEADER_TELEGRAM_ID = "telegram_id";
var MEMBERS_HEADER_TELEGRAM_STATUS = "status";


/* ТЕКСТИ */

var MEMBERS_CANCEL_MEMBERSHIP = 'Скасувати членство 😢';
var MEMBERS_MEMBERSHIP_CANCELED = 'Ваше членство було скасоване 😢 Але ви можете продовжувати ходити на засіданні, брати деякі технічні ролі та виступати на експромт-сесії 😊\
                                   \n\nТакож, ви можете продовжити членство в будь-який момент 😍';
var MEMBERS_CANCEL_WAITING_PAYMENT = 'Змінились плани 😢'; 
var MEMBERS_WAITING_PAYMENT_CANCELED = 'Я більше не буду надсилати нагадування про сплату членських внесків 😊\
                                   \n\nПроте ви можете продовжити членство в будь-який момент 😍';
var MEMBERS_MEMBERSHIP_KEPT = 'Дякую, що залишаєтесь з нами 😍';
var MEMBERS_KEEP_MEMBERSHIP = 'Нагадати пізніше 🕘';

var MEMBERS_PREVIOUS_VALUE_EMPTY = 'Попереднє значення відсутнє';
var MEMBERS_PREVIOUS_VALUE = 'Попереднє значення <i>"{0}"</i> буде перезаписане';

var MEMBERS_SELECT_NEW_MENTOR = 'Виберіть нового ментора для {0}. {1}:';
var MEMBERS_SELECT_NEW_PROGRAM = 'Виберіть нову програму, по якій буде займатись {0}. {1}:';
var MEMBERS_SELECT_NEW_POSITION = 'Виберіть нову офіцерську позицію для {0}. {1}:';
var MEMBERS_SELECT_NEW_STATUS = 'Виберіть новий статус для {0}. {1}:';
var MEMBERS_SELECT_NEW_CLUB = 'Виберіть з якого клубу {0}. {1}:';
var MEMBERS_SELECT_NEW_EMAIL_ADDRESS = 'Введіть нову електронну пошту для {0}. {1}:';
var MEMBERS_SELECT_NEW_CALLNAME = 'Введіть новий кличний відмінок для {0}. {1}:';
var MEMBERS_SELECT_NEW_MOBILE_PHONE_NUMBER = 'Введіть новий номер мобільного телефону у форматі +380ххххххххх. {1}:';
var MEMBERS_SELECT_NEW_FACEBOOK = 'Введіть посилання на Фейсбук-сторінку для {0}. {1}:';
var MEMBERS_SELECT_NEW_NAME = 'Введіть нове ім\'я для {0} (повне ім\'я буде змінено автоматично). {1}:';
var MEMBERS_SELECT_NEW_LASTNAME = 'Введіть нове прізвище для {0} (повне ім\'я буде змінено автоматично). {1}:';
var MEMBERS_SELECT_SEX = "Оберiть стать:";

//var MEMBERS_SUCCESS_ADDED = 'Дякую! Додав <b>{0} {1}</b> (<i>{2}</i>) до бази.\n☎️: {3}, 📧: {4}\n\n<b>Ви можете продовжити заповнення інших полей.</b>';

var MEMBERS_SEND_MESSAGE_SELECT_MEMBER = 'Оберіть члена клубу (або введіть ім\'я для пошуку), якому хочете відправити повідомлення:';
var MEMBERS_SEND_MESSAGE_SELECT_TYPE = 'Ви хочете відправити повідомлення в телеграмі чи e-mail?';
var MEMBERS_SEND_MESSAGE_ALL = 'Всім';

var MEMBERS_CANCEL_ROLE = '{0}, привіт! 😊 На жаль, вашу роль <b>{1}</b> на засіданні <b>{2}</b> було скасовано 😌. Зверніться до віце-президента з освіти, щоб дізнатись деталі або перегляньте програму засідання.\n\nМожливо цього дня в клубі відбудеться конкурс або інший захід 😍';

var MEMBERS_SUCCESS_ADDED = 'Дякую! Додав <b>{0}</b> (<i>{1}</i>) до бази.\n☎️: {2},\n📧: {3}';
var MEMBERS_NEW_MEMBER_MENU = 'Ви можете продовжити заповнення інших полей, відправити лист-привітання, або додати нового члена клубу, використовуючи кнопки нижче:';
var MEMBERS_MESSAGE_TEMPLATE_ABOUT = 'Напишіть повідомлення, що буде відправлено користувачу.';
var MEMBERS_MESSAGE_TEMPLATE_BUTTONS = 'Ви також можете вставити готовий шаблон за допомогою кнопок нижче 👇'; 
var MEMBERS_MESSAGE_TEMPLATE_EDIT = 'Напишіть нове повідомлення або вставте попередню версію повідомлення за допомогою кнопки нижче 👇'; 
var MEMBERS_MESSAGE_SENDING_CONFIRM = 'Перевірте, будь ласка, чи все правильно, і підтвердіть відправку повідомлення. Фінальна версія повідомлення нижче 👇';
var MEMBERS_MESSAGE_SUCCESSFULLY_SENT = '<b>Повідомлення було успішно відправлено!</b> 😎';
var MEMBERS_MESSAGE_NO_EMAIL = 'На жаль, <b>ви не вказали адресу електронної скриньки</b>. Додайте електронну пошту для <b>{0}</b> та повторіть відправку.';

var MEMBERS_TYPE_NEW_VALUE = 'Введіть нові дані поля <b>{0}</b> для <b>{1}</b>. {2}:';
var MEMBERS_CHOOSE_STATUS = 'Виберіть статус:';
var MEMBERS_CHOOSE_EMAIL_ADDRESS = 'Введіть електронну пошту:';
var MEMBERS_CHOOSE_PHONE_NUMBER = 'Введіть мобільний телефон (формат: +380ххххххххх):';
var MEMBERS_CHOOSE_CALLNAME = 'Введіть кличний відмінок імені (використовуйте підказку в меню):';
var MEMBERS_CHOOSE_LASTNAME = 'Введіть прізвище:';
var MEMBERS_CHOOSE_MEMBER = 'Виберіть члену клубу, інформацію його хочете змінити:';
var MEMBERS_CHOOSE_NAME = 'Введіть ім\'я (без прізвища):';
var MEMBERS_CHOOSE_FIELD = 'Виберіть поле, що хочете змінити:';
var MEMBERS_SUCCESS_UPDATE = 'Дякую! Змінив <b>{0}</b> на <b>{1}</b> для <b>{2}</b> 😍\n\n<b>Ви можете продовжити заповнення інших полей.</b>';
var MEMBERS_MEMBER_ALREADY_EXISTS = 'На жаль, користувач <b>{0}</b> вже <b>є в базі</b> 😟. Якщо це новий користувач, спробуйте інший варіант написання імені.';

var MEMBERS_LIST = '<b>Список членів клубу та гостей ({0}):</b>\n\n';
var MEMBERS_LIST_EMPTY = 'За вибраним критерієм немає користувачів 😔';

var MEMBERS_LIST_PHONE_NUMBER = '\nТелефон: +{0}';
var MEMBERS_LIST_EMAIL = '\nПошта: {0}';
var MEMBERS_LIST_TELEGRAM = '\nТелеграм: @{0}';
var MEMBERS_LIST_CLUB = '\nКлуб: {0}';
var MEMBERS_LIST_POSITION = '\nОфіцер: {0}';
var MEMBERS_LIST_PROGRAM = '\nПрограма: {0}';
var MEMBERS_LIST_MENTOR = '\nМентор: {0}';
var MEMBERS_LIST_FACEBOOK = '\nФейсбук: {0}';
var MEMBERS_LIST_DATE = '\nДата реєстрації: {0}';

var MEMBERS_LIST_ALL = 'Всі';
var MEMBERS_LIST_CHOOSE_STATUS = 'Виберіть статус користувачів, що ви хочете побачити:';

function processMembers(userData, text) {
    if (userData.statuses[2]) {
        if (userData.statuses[2] == MEMBERS_SEND_MESSAGE) {
          if (userData.statuses[3]) {
              if (userData.statuses[4]) {
                confirmSendMessage(userData.telegramId, userData.statuses[3], userData.statuses[4], text);
                return false;
              }
          } else {
            if (text == MEMBERS_SEND_MESSAGE_ALL) {
              showSendMessageMenu(userData, text); 
              return true;
            } else if (searchMemberInDatabase(text, userData.telegramId, null, null)) {
              showSendMessageMenu(userData, text); 
              return true;
            }  
          }       
        }
        else if (userData.statuses[2] == MEMBERS_EDIT) {
            if (userData.statuses[3]) {
                if (userData.statuses[4]) {
                    if (!userData.statuses[5]) {
                        if (userData.statuses[4] == MEMBERS_HEADER_MOBILE_PHONE_NUMBER) {
                            text = text.replace('+', '');
                        } else if (userData.statuses[4] == MEMBERS_HEADER_TELEGRAM) {
                            text = text.replace('@', '');
                        } else if (userData.statuses[4] == MEMBERS_HEADER_NAME || userData.statuses[4] == MEMBERS_HEADER_LASTNAME) {
                            var memberInfo = getMemberInfo(MEMBERS_HEADER_FULLNAME, userData.statuses[3]);
                            var fullName = userData.statuses[4] == MEMBERS_HEADER_NAME ?
                                text + ' ' + memberInfo.fields[MEMBERS_HEADER_LASTNAME] :
                                memberInfo.fields[MEMBERS_HEADER_NAME] + ' ' + text;

                            updateMemberInfo(MEMBERS_HEADER_FULLNAME, userData.statuses[3], MEMBERS_HEADER_FULLNAME, fullName);
                            userData.statuses[3] = fullName;
                            userData.status = userData.statuses.join('___') + '___';
                        } else if (userData.statuses[4] == MEMBERS_HEADER_MENTOR) { 
                            if (searchMemberInDatabase(text, userData.telegramId, format(MEMBERS_SUCCESS_UPDATE, userData.statuses[4], text, userData.statuses[3]), null)) {
                               updateMemberInfo(MEMBERS_HEADER_FULLNAME, userData.statuses[3], userData.statuses[4], text);
                               continueEditMember(userData, userData.statuses[3]);
                            }
                            return false;
                        }
                        updateMemberInfo(MEMBERS_HEADER_FULLNAME, userData.statuses[3], userData.statuses[4], text);
                        showMenu(userData.telegramId, format(MEMBERS_SUCCESS_UPDATE, userData.statuses[4], text, userData.statuses[3]));
                        
                        continueEditMember(userData, userData.statuses[3]);
                        return false;
                    }
                } else {
                    var memberInfo = getMemberInfo(MEMBERS_HEADER_FULLNAME, userData.statuses[3]);
                    var previousValue = memberInfo.fields[text] ? format(MEMBERS_PREVIOUS_VALUE, memberInfo.fields[text]) : MEMBERS_PREVIOUS_VALUE_EMPTY;

                    if (text == MEMBERS_HEADER_STATUS) {
                        showMenu(userData.telegramId, format(MEMBERS_SELECT_NEW_STATUS, userData.statuses[3], previousValue), getListItemsByName(MEMBERS_STATUSES));
                    } else if (text == MEMBERS_HEADER_POSITION) {
                        showMenu(userData.telegramId, format(MEMBERS_SELECT_NEW_POSITION, userData.statuses[3], previousValue), getListItemsByName(MEMBERS_POSITIONS));
                    } else if (text == MEMBERS_HEADER_PROGRAM) {
                        showMenu(userData.telegramId, format(MEMBERS_SELECT_NEW_PROGRAM, userData.statuses[3], previousValue), getListItemsByName(MEMBERS_PROGRAMS));
                    } else if (text == MEMBERS_HEADER_MENTOR) {
                        showMenu(userData.telegramId, format(MEMBERS_SELECT_NEW_MENTOR, userData.statuses[3], previousValue), getAllMembers());
                    } else if (text == MEMBERS_HEADER_CLUB) {
                        showMenu(userData.telegramId, format(MEMBERS_SELECT_NEW_CLUB, userData.statuses[3], previousValue), getListItemsByName(MEMBERS_CLUBS));
                    } else if (text == MEMBERS_HEADER_SEX) {
                        showMenu(userData.telegramId, format(MEMBERS_SELECT_NEW_CLUB, userData.statuses[3], previousValue), [SEX_MALE, SEX_FEMALE]);
                    } else if (text == MEMBERS_HEADER_EMAIL_ADDRESS) {
                        showMenu(userData.telegramId, format(MEMBERS_SELECT_NEW_EMAIL_ADDRESS, userData.statuses[3], previousValue));
                    } else if (text == MEMBERS_HEADER_CALLNAME) {
                        showMenu(userData.telegramId, format(MEMBERS_SELECT_NEW_CALLNAME, userData.statuses[3], previousValue));
                    } else if (text == MEMBERS_HEADER_NAME) {
                        showMenu(userData.telegramId, format(MEMBERS_SELECT_NEW_NAME, userData.statuses[3], previousValue));
                    } else if (text == MEMBERS_HEADER_LASTNAME) {
                        showMenu(userData.telegramId, format(MEMBERS_SELECT_NEW_LASTNAME, userData.statuses[3], previousValue));
                    } else if (text == MEMBERS_HEADER_FACEBOOK) {
                        showMenu(userData.telegramId, format(MEMBERS_SELECT_NEW_FACEBOOK, userData.statuses[3], previousValue));
                    } else if (text == MEMBERS_HEADER_MOBILE_PHONE_NUMBER) {
                        showMenu(userData.telegramId, format(MEMBERS_SELECT_NEW_MOBILE_PHONE_NUMBER, userData.statuses[3], previousValue));
                    } else {
                        showMenu(userData.telegramId, format(MEMBERS_TYPE_NEW_VALUE, text, userData.statuses[3], previousValue));
                    }
                    return true;
                }
            } else {
                //var memberInfo = getMemberInfo(MEMBERS_HEADER_FULLNAME, member); для чого це тут?
                var items = getMemberFields();
                var index = items.indexOf(MEMBERS_HEADER_DATE);
                
                items.splice(index, 1);
                
                return searchMemberInDatabase(text, userData.telegramId, MEMBERS_CHOOSE_FIELD, items);
            }
        } else if (userData.statuses[2] == MEMBERS_ADD) {
            if (userData.statuses[3]) {
                if (userData.statuses[4]) {
                    if (userData.statuses[5]) {
                        if (userData.statuses[6]) {
                            if (userData.statuses[7]) {
                                if (userData.statuses[8]) {
                                    if (!userData.statuses[9]) {
                                        var name = capitalizeFirstLetter(userData.statuses[4]);
                                        var lastname = capitalizeFirstLetter(userData.statuses[3]);
                                        var fullName = name + ' ' + lastname;
                                        var callName = userData.statuses[5];
                                        var sex = userData.statuses[6];
                                        var phoneNumber = userData.statuses[7].replace('+', '') == EMPTY ? '' : userData.statuses[7];
                                        var email = userData.statuses[8] == EMPTY ? '' : userData.statuses[8];
                                        var status = text;
                                        
                                        insertMembersData(name, lastname, callName, sex, phoneNumber, email, status);
                                        showMenu(userData.telegramId, format(MEMBERS_SUCCESS_ADDED, fullName, status, userData.statuses[7], userData.statuses[8]));
                                        showNewMemberMenu(userData, fullName);
                                        return false;
                                   }
                                } else {
                                    if (validateEmail(text) || text == EMPTY) {
                                      showMenu(userData.telegramId, MEMBERS_CHOOSE_STATUS, getListItemsByName(MEMBERS_STATUSES));
                                      return true;
                                    } else {
                                      sendText(userData.telegramId, REGISTRATION_INVALID_EMAIL);
                                      showMenu(userData.telegramId, MEMBERS_CHOOSE_EMAIL_ADDRESS, [EMPTY]);
                                    }
                                } 
                            } else {
                                  showMenu(userData.telegramId, MEMBERS_CHOOSE_EMAIL_ADDRESS, [EMPTY]);
                                  return true;
//                               if (validateEmail(text) || text == EMPTY) {
//                                 showMenu(userData.telegramId, MEMBERS_CHOOSE_STATUS, getListItemsByName(MEMBERS_STATUSES));
//                                 return true;
//                               } else {
//                                 sendText(userData.telegramId, REGISTRATION_INVALID_EMAIL);
//                                 showMenu(userData.telegramId, MEMBERS_CHOOSE_EMAIL_ADDRESS, [EMPTY]);
//                               }
                                 
                            }
                        } else {
                            showMenu(userData.telegramId, MEMBERS_CHOOSE_PHONE_NUMBER, [EMPTY]);
                            //showMenu(userData.telegramId, MEMBERS_CHOOSE_EMAIL_ADDRESS, [EMPTY]);
                            return true;
                        }
                    } else {
                        showMenu(userData.telegramId, MEMBERS_SELECT_SEX, [SEX_MALE, SEX_FEMALE]);
                       // showMenu(userData.telegramId, MEMBERS_CHOOSE_PHONE_NUMBER, [EMPTY]);
                        return true;
                    }
                } else {
                     if (isCyrillic(text)) {
                        var fullName = capitalizeFirstLetter(text) + ' ' + capitalizeFirstLetter(userData.statuses[3]);//
                        var memberInfo = getMemberInfo(MEMBERS_HEADER_FULLNAME, fullName);
                        if (memberInfo) {
                            showMenu(userData.telegramId, format(MEMBERS_MEMBER_ALREADY_EXISTS, fullName));
                            goBack(userData);
                            return false;
                        } else {
                            showMenu(userData.telegramId, MEMBERS_CHOOSE_CALLNAME, [getCallName(capitalizeFirstLetter(text))]);
                            return true;
                        }
                     }
                     showMenu(userData.telegramId, REGISTRATION_INVALID_NAME);
                     return false;
                }
            } else {
              if (isCyrillic(text)) {
                showMenu(userData.telegramId, MEMBERS_CHOOSE_NAME);
                return true;
              }
              showMenu(userData.telegramId, REGISTRATION_INVALID_LASTNAME);
              return false;
            }
        } else if (userData.statuses[2] == MEMBERS_SHOW_LIST) {
            if (!userData.statuses[3]) {
                showMembers(userData.telegramId, text);
                return true;
            }
        }
    } else {
        if (text == MEMBERS_SEND_MESSAGE) {
            var members = getAllMembers();
            members.unshift(MEMBERS_SEND_MESSAGE_ALL);
            showMenu(userData.telegramId, MEMBERS_SEND_MESSAGE_SELECT_MEMBER, members);
            return true;
        } else if (text == MEMBERS_EDIT) {
            showMenu(userData.telegramId, MEMBERS_CHOOSE_MEMBER, getAllMembers());
            return true;
        } else if (text == MEMBERS_ADD) {
            showMenu(userData.telegramId, MEMBERS_CHOOSE_LASTNAME);
            return true;
        } else if (text == MEMBERS_SHOW_LIST) {
            var items = getListItemsByName(MEMBERS_STATUSES);
            items.unshift(MEMBERS_LIST_ALL);
            showMenu(userData.telegramId, MEMBERS_LIST_CHOOSE_STATUS, items);
            return true;
        }
    }
}

function showMembers(userTelegramId, status) {
    var sheet = SpreadsheetApp.openById(databaseSpreadSheetId).getSheetByName(SHEET_CONTACTS);

    var headerValues = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

    var fullNameHeaderIndex = headerValues.findIndex(MEMBERS_HEADER_FULLNAME);
    var mobilePhoneNumberHeaderIndex = headerValues.findIndex(MEMBERS_HEADER_MOBILE_PHONE_NUMBER);
    var emailAddressHeaderIndex = headerValues.findIndex(MEMBERS_HEADER_EMAIL_ADDRESS);
    var statusHeaderIndex = headerValues.findIndex(MEMBERS_HEADER_STATUS);
    var clubHeaderIndex = headerValues.findIndex(MEMBERS_HEADER_CLUB);
    var positionHeaderIndex = headerValues.findIndex(MEMBERS_HEADER_POSITION);
    var programHeaderIndex = headerValues.findIndex(MEMBERS_HEADER_PROGRAM);
    var mentorHeaderIndex = headerValues.findIndex(MEMBERS_HEADER_MENTOR);
    var facebookHeaderIndex = headerValues.findIndex(MEMBERS_HEADER_FACEBOOK);
    var dateHeaderIndex = headerValues.findIndex(MEMBERS_HEADER_DATE);
    var telegramHeaderIndex = headerValues.findIndex(MEMBERS_HEADER_TELEGRAM);

    var values = sheet.getRange(2, 1, sheet.getLastRow(), sheet.getLastColumn()).getValues();

    var message = format(MEMBERS_LIST, status);
    var number = 1;

    for (var i = 0; i < values.length; i++) {
        var row = values[i];

        if (row && row[fullNameHeaderIndex] && (status == MEMBERS_LIST_ALL || status == row[statusHeaderIndex])) {
            message += number + '. <b>' + row[fullNameHeaderIndex] + '</b> (<i>' + row[statusHeaderIndex] + '</i>)';

            if (row[mobilePhoneNumberHeaderIndex])
                message += format(MEMBERS_LIST_PHONE_NUMBER, row[mobilePhoneNumberHeaderIndex]);
            if (row[emailAddressHeaderIndex])
                message += format(MEMBERS_LIST_EMAIL, row[emailAddressHeaderIndex]);
            if (row[telegramHeaderIndex])
                message += format(MEMBERS_LIST_TELEGRAM, row[telegramHeaderIndex]);
            if (row[mentorHeaderIndex])
                message += format(MEMBERS_LIST_MENTOR, row[mentorHeaderIndex]);
            if (row[clubHeaderIndex])
                message += format(MEMBERS_LIST_CLUB, row[clubHeaderIndex]);
            if (row[positionHeaderIndex])
                message += format(MEMBERS_LIST_POSITION, row[positionHeaderIndex]);
            if (row[programHeaderIndex])
                message += format(MEMBERS_LIST_PROGRAM, row[programHeaderIndex]);
            if (row[facebookHeaderIndex])
                message += format(MEMBERS_LIST_FACEBOOK, row[facebookHeaderIndex]);
            if (row[dateHeaderIndex])
                message += format(MEMBERS_LIST_DATE, formatDate(row[dateHeaderIndex]));

            message += '\n\n';
            number++;
        }

        if (message.length >= 4048) {
            if (message) {
                showMenu(userTelegramId, message);
                message = '';
            }
        }
    }

    if (number == 1) {
        message += MEMBERS_LIST_EMPTY;
    }

    if (message) {
        showMenu(userTelegramId, message);
        message = '';
    }
}

function sendMemberCanceledRoleMessage(memberInfo, date, role)
{
    if (memberInfo && memberInfo.telegramId) {
      sendText(memberInfo.telegramId, format(MEMBERS_CANCEL_ROLE, memberInfo.fields[MEMBERS_HEADER_CALLNAME], role, date));              
    }       
}

function showNewMemberMenu(userData, newMemberFullName) {
  
  var callbacks = [];
  
  callbacks.push({data : MEMBERS_SEND_EMAIL_MESSAGE_CALLBACK + '___' +  newMemberFullName, text: MEMBERS_ADDED_MEMBER_SEND_EMAIL});
  callbacks.push({data : MEMBERS_EDIT_MEMBER_CALLBACK + '___' +  newMemberFullName, text: MEMBERS_ADDED_MEMBER_EDIT});
  callbacks.push({data : MEMBERS_ADD_NEW_MEMBER_CALLBACK + '___' +  newMemberFullName, text: MEMBERS_ADDED_MEMBER_ADD_NEW});
  
  sendTextWithCallbacks(userData.telegramId, callbacks, MEMBERS_NEW_MEMBER_MENU);
}

function showSendMessageMenu(userData, member) {
  
  var callbacks = [];
  
  callbacks.push({data : MEMBERS_SEND_EMAIL_MESSAGE_CALLBACK + '___' +  member, text: MEMBERS_SEND_EMAIL_MESSAGE});
  callbacks.push({data : MEMBERS_SEND_TELEGRAM_MESSAGE_CALLBACK + '___' +  member, text: MEMBERS_SEND_TELEGRAM_MESSAGE});
  
  sendTextWithCallbacks(userData.telegramId, callbacks, MEMBERS_SEND_MESSAGE_SELECT_TYPE);
}

/* РОБОТА З БАЗОЮ */

function deleteMemberFromDatabase(telegramId) {
  var sheet = SpreadsheetApp.openById(databaseSpreadSheetId).getSheetByName(SHEET_CONTACTS);
  var headerValues = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  var telegramIdColumnIndex = headerValues.findIndex(MEMBERS_HEADER_TELEGRAM_ID) + 1;
  var idValues = sheet.getRange(2, telegramIdColumnIndex, sheet.getLastRow(), 1).getValues();
  
  var rowIndex;
  
  
  for (var i = 0; i < idValues.length; i++) {
    if (idValues[i] == telegramId) {
      rowIndex = i + 2;
    }
  }
  
  if(rowIndex) {
    sheet.deleteRow(rowIndex);
    return true;
  }
  return false;
}

function insertMembersData(name, lastname, callName, sex, phoneNumber, email, status, club, telegramId, username, telegramStatus) {
    var sheet = SpreadsheetApp.openById(databaseSpreadSheetId).getSheetByName(SHEET_CONTACTS);
    var headerValues = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

    var fullNameColumnIndex = headerValues.findIndex(MEMBERS_HEADER_FULLNAME);
    
    var telegramIdColumnIndex = headerValues.findIndex(MEMBERS_HEADER_TELEGRAM_ID);
    var telegramColumnIndex = headerValues.findIndex(MEMBERS_HEADER_TELEGRAM);
   
    var nameColumnIndex = headerValues.findIndex(MEMBERS_HEADER_NAME);
    var lastnameColumnIndex = headerValues.findIndex(MEMBERS_HEADER_LASTNAME);
    var callNameColumnIndex = headerValues.findIndex(MEMBERS_HEADER_CALLNAME);
    var sexColumnIndex = headerValues.findIndex(MEMBERS_HEADER_SEX);
    var phoneNumberColumnIndex = headerValues.findIndex(MEMBERS_HEADER_MOBILE_PHONE_NUMBER);
    var statusColumnIndex = headerValues.findIndex(MEMBERS_HEADER_STATUS);
    var emailAddressColumnIndex = headerValues.findIndex(MEMBERS_HEADER_EMAIL_ADDRESS);
    var clubColumnIndex = headerValues.findIndex(MEMBERS_HEADER_CLUB);
    var dateColumnIndex = headerValues.findIndex(MEMBERS_HEADER_DATE);
    var telegramStatusColumnIndex = headerValues.findIndex(MEMBERS_HEADER_TELEGRAM_STATUS);
    
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
  
    name = capitalizeFirstLetter(name);
    lastname = capitalizeFirstLetter(lastname);
    callName = capitalizeFirstLetter(callName);

    values[0][fullNameColumnIndex] = (name + ' ' + lastname).trim();
    values[0][nameColumnIndex] = name;
    values[0][lastnameColumnIndex] = lastname;
    values[0][callNameColumnIndex] = callName;
    values[0][sexColumnIndex] = sex;
    values[0][phoneNumberColumnIndex] = phoneNumber.replace('+', '');
    values[0][emailAddressColumnIndex] = email;
    values[0][statusColumnIndex] = (status ? status : '');
    values[0][telegramIdColumnIndex] = (telegramId ? telegramId : '');  
    values[0][telegramColumnIndex] = (username ? username : '');
    values[0][dateColumnIndex] = formatDate(new Date());
    values[0][telegramStatusColumnIndex] = (telegramStatus ? telegramStatus : '');

    insertedRange.setValues(values);
}

function getMemberFields() {
    var sheet = SpreadsheetApp.openById(databaseSpreadSheetId).getSheetByName(SHEET_CONTACTS);
    var headerValues = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

    var fullNameColumnIndex = headerValues.findIndex(MEMBERS_HEADER_FULLNAME);
    var telegramIdColumnIndex = headerValues.findIndex(MEMBERS_HEADER_TELEGRAM_ID);

    var fields = [];

    for (var i = fullNameColumnIndex + 1; i < telegramIdColumnIndex; i++) {
        fields.push(headerValues[i]);
    }

    return fields;
}

function getAllMembers(searchHeader, searchValue) {
    var sheet = SpreadsheetApp.openById(databaseSpreadSheetId).getSheetByName(SHEET_CONTACTS);
    var headerValues = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

    var fullNameColumnIndex = headerValues.findIndex(MEMBERS_HEADER_FULLNAME); 
//    var lastNameColumnIndex = headerValues.findIndex(MEMBERS_HEADER_LASTNAME);
//    var firstNameColumnIndex = headerValues.findIndex(MEMBERS_HEADER_NAME);
    var searchColumnIndex = headerValues.findIndex(searchHeader);
    
    var members = {};

    var range = sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn());
    var values = range.getValues();

    for (var i = 0; i < values.length; i++) {
        if (!searchHeader || searchHeader && (!searchValue && values[i][searchColumnIndex] || values[i][searchColumnIndex] == searchValue)) {
            var fullName = values[i][fullNameColumnIndex];
            // Сортування за прізвищем
//            var lastName = values[i][lastNameColumnIndex];
//            var firstName = values[i][firstNameColumnIndex];          
//            if (!lastName || !firstName) continue;
//            var fullName =  firstName + ' ' + lastName;
            members[fullName] = fullName;
            // щоб сортувати за ім'ям: members[fullName] = fullName;
        } 
    }

    const sortedMembers = [];
    Object.keys(members).sort().forEach(function(key) {
        sortedMembers.push(members[key]);
    });
    
    return sortedMembers;
}

function getMemberInfo(searchHeader, searchValue) {
    var sheet = SpreadsheetApp.openById(databaseSpreadSheetId).getSheetByName(SHEET_CONTACTS);
    var headerValues = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

    var searchColumnIndex = headerValues.findIndex(searchHeader);

    var telegramIdColumnIndex = headerValues.findIndex(MEMBERS_HEADER_TELEGRAM_ID);
    var statusColumnIndex = headerValues.findIndex(MEMBERS_HEADER_TELEGRAM_STATUS);
    var fullNameColumnIndex = headerValues.findIndex(MEMBERS_HEADER_FULLNAME);

    var values = sheet.getRange(2, searchColumnIndex + 1, sheet.getLastRow(), 1).getValues();
    var userRowIndex = values.findIndex(searchValue) + 1;

    if (userRowIndex == 0) {
        return null;
    }

    var userDataValues = sheet.getRange(userRowIndex + 1, 1, 1, sheet.getLastColumn()).getValues()[0];

    var fields = {};
    for (var i = 0; i < userDataValues.length; i++) {
        fields[headerValues[i]] = userDataValues[i];
    }

    var status = userDataValues[statusColumnIndex];
    var telegramId = userDataValues[telegramIdColumnIndex];
    var fullName = userDataValues[fullNameColumnIndex];

    return {
        telegramId: telegramId,
        fullName: fullName,
        callName: fields[MEMBERS_HEADER_CALLNAME] || fields[MEMBERS_HEADER_NAME],
        name : fields[MEMBERS_HEADER_NAME],
        fields: fields,
        status: status,
        statuses: status.split('___')
    };
}

function updateMemberInfo(searchHeader, searchValue, setHeader, setValue) {
    var sheet = SpreadsheetApp.openById(databaseSpreadSheetId).getSheetByName(SHEET_CONTACTS);
    var headerValues = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

    var searchColumnIndex = headerValues.findIndex(searchHeader);
    var setColumnIndex = headerValues.findIndex(setHeader);

    var searchValues = sheet.getRange(2, searchColumnIndex + 1, sheet.getLastRow(), 1).getValues();
    var userRowIndex = searchValues.findIndex(searchValue) + 1 /* +1 to skip header */ ;

    if (userRowIndex == 0) {
        return null;
    }
    
    sheet.getRange(userRowIndex + 1, setColumnIndex + 1).setValue(setValue);
}

function continueEditMember(userData, fullName) {
    userData.statuses = userData.statuses.slice(0, 2);
    userData.statuses.push(MEMBERS_EDIT);
    userData.status = userData.statuses.join('___') + '___';
    processRequest(userData, fullName);
}


function searchMemberInDatabase(text, telegramId, data, buttons) {

  var checkResult = checkMembersName(text);              
  if (!checkResult) {
    sendText(telegramId, MEMBER_SEARCH_FAILED);
    return false;
  } else if (typeof checkResult == "object"){
    showMenu(telegramId, SEVERAL_MEMBERS_FOUND, checkResult);
    return false;
  } else {
    sendText(telegramId, format(MEMBER_SEARCH_SUCCESS, checkResult));
    if (data) {
      showMenu(telegramId, data, buttons);
    } 
    return true;
  }
}

function checkMembersName(text) {

  var sheet = SpreadsheetApp.openById(databaseSpreadSheetId).getSheetByName(SHEET_CONTACTS);
  var headerValues = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  var fullNameColumnIndex = headerValues.findIndex(MEMBERS_HEADER_FULLNAME);
  var values = sheet.getRange(2, fullNameColumnIndex + 1, sheet.getLastRow() - 1, 1).getValues();
  var members = {};
  var textAtLowerCase = text.trim().toLowerCase();
  
  for (var i = 0; i < values.length; i++) {
  
    var fullName = values[i][0];
    var fullNameToLowerCase = values[i][0].toLowerCase();
    
    if (text.trim() == fullName) {
      return fullName;
    } 
    
    if(fullNameToLowerCase == textAtLowerCase) {
       members = {};
       members[fullName] = fullName;
       break;
    }
    
    if (~textAtLowerCase.indexOf(' ')) {
      var splittedText = textAtLowerCase.split(' ');
      var switchedText = (splittedText[1] + ' ' + splittedText[0]).trim();
      
      if (fullNameToLowerCase == switchedText) {
        members = {};
        members[fullName] = fullName;
        break;
      }
      if (~fullNameToLowerCase.indexOf(splittedText[0]) || ~fullNameToLowerCase.indexOf(splittedText[1])) {
        members[fullName] = fullName;
      }
    }
    
    if (~fullNameToLowerCase.indexOf(textAtLowerCase)) {
      members[fullName] = fullName; 
    } 
  } 
  if(Object.keys(members).length) {
  const sortedMembers = [];
  
  Object.keys(members).sort().forEach(function(key) {
    sortedMembers.push(members[key]);
  });
    
  return sortedMembers;
  }
  
  return false;
}

/* ТЕЛЕГРАМ СТАТУС */

function resetStatus(userTelegramId) {
    updateMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userTelegramId, MEMBERS_HEADER_TELEGRAM_STATUS, '');
}