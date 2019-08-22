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
\n\nЯ постійно розвиваюсь і якщо раптом, ви помітили, що щось працює не правильно. Обов\'язково повідомне офіцерам ☺';

var REGISTRATION_PHONE_NUMBER_IS_NOT_FOUND = 'На жаль, <b>телефон {0}</b> не закріплено за жодним користувачем 😔\
\n\n<b>Але не хвилюйтесь, я вас зареєстрував, тепер ви маєте доступ до основних функцій бота 😍</b>\
\n\nНадайте, будь ласка, персональну інформацію, щоб я міг вірно до вас звертатись 😊';

var REGISTRATION_STEP_1 = 'Введіть ваше прізвище:'; //3
var REGISTRATION_STEP_2 = 'Як вас звати (Ім\'я)?'; //1
var REGISTRATION_STEP_3 = 'Введіть або виберіть кличний відмінок вашого імені:'; //2
var REGISTRATION_STEP_4 = 'Введіть, будь ласка, електронну пошту:';


function processRegistration(userData, text) {
    if (userData.statuses[1]) {
        if (userData.statuses[2]) {
            if (userData.statuses[3]) {
                if (text != EMPTY) {
                    updateMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userData.telegramId, MEMBERS_HEADER_EMAIL_ADDRESS, text);
                }

                //var memberInfo = getMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userData.telegramId);
                var firstname = capitalizeFirstLetter(userData.statuses[2]); //memberInfo.fields[MEMBERS_HEADER_LASTNAME];
                var lastname = capitalizeFirstLetter(userData.statuses[1]); //memberInfo.fields[MEMBERS_HEADER_NAME];
                var fullname = (firstname + ' ' + lastname).trim();

                updateMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userData.telegramId, MEMBERS_HEADER_FULLNAME, fullname);

                sendWelcomeMessage(userData.telegramId);

                return false;
            } else {
                updateMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userData.telegramId, MEMBERS_HEADER_CALLNAME, capitalizeFirstLetter(text));

                var memberInfo = getMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userData.telegramId);
                showMenu(userData.telegramId, REGISTRATION_STEP_4, [EMPTY]);

                return true;
            }
        } else {
            var name = capitalizeFirstLetter(text);
            var fullName = name + ' ' + userData.statuses[1];
            var memberInfo = getMemberInfo(MEMBERS_HEADER_FULLNAME, fullName);
            if (memberInfo) {

                var newStatus = REGISTRATION + "___";
                updateMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userData.telegramId, MEMBERS_HEADER_TELEGRAM_STATUS, newStatus);

                showMenu(userData.telegramId, format(REGISTRATION_MEMBER_ALREADY_EXISTS, fullName));
                showMenu(userData.telegramId, REGISTRATION_STEP_1, [memberInfo.fields[MEMBERS_HEADER_LASTNAME]]);

            } else {
                updateMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userData.telegramId, MEMBERS_HEADER_NAME, name);
                var callname = getCallName(name);

                showMenu(userData.telegramId, REGISTRATION_STEP_3, [callname]);
            }
            return true;
        }
    } else {
        var memberInfo = getMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userData.telegramId);
        var lastname = capitalizeFirstLetter(text); //memberInfo.fields[MEMBERS_HEADER_NAME];
        updateMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userData.telegramId, MEMBERS_HEADER_LASTNAME, lastname);

        showMenu(userData.telegramId, REGISTRATION_STEP_2, [memberInfo.fields[MEMBERS_HEADER_NAME]]);
        return true;
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

function checkRegistration(userTelegramId, phoneNumber, username, firstname, lastname) {
    var phoneNumberWithoutPlus = phoneNumber.replace('+', '');

    updateMemberInfo(MEMBERS_HEADER_MOBILE_PHONE_NUMBER, phoneNumberWithoutPlus, MEMBERS_HEADER_TELEGRAM_ID, userTelegramId);
    updateMemberInfo(MEMBERS_HEADER_MOBILE_PHONE_NUMBER, phoneNumberWithoutPlus, MEMBERS_HEADER_TELEGRAM, username);

    var contactInfo = getMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userTelegramId);

    if (contactInfo) {
        sendWelcomeMessage(userTelegramId);
    } else {
        //sendMessageToOfficer(OFFICER_POSITION_PRESIDENT, 'Привіт! Користувач <b>' + fullName + '</b> з телефоном <b>' + phoneNumber + '</b> спробував зареєструватись, але його <b>не було знайдено</b>.');
        var callname = '';
        var email = '';
        var status = MEMBERS_STATUS_GUEST;
        var club = '';

        insertMembersData(firstname, lastname, callname, phoneNumberWithoutPlus, email, status, club, userTelegramId, username);

        var newStatus = REGISTRATION + "___";
        updateMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userTelegramId, MEMBERS_HEADER_TELEGRAM_STATUS, newStatus);

        showMenu(userTelegramId, format(REGISTRATION_PHONE_NUMBER_IS_NOT_FOUND, phoneNumber));
        showMenu(userTelegramId, REGISTRATION_STEP_1, [lastname]);
    }
}

function sendWelcomeMessage(userTelegramId) {
    var memberInfo = getMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userTelegramId);
    var callname = memberInfo.fields[MEMBERS_HEADER_CALLNAME];

    showMenu(userTelegramId, format(REGISTRATION_SUCCESS, callname, CLUB_NAME), MAIN_MENU);
}