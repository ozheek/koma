var SHEET_MEETINGS = 'Засідання';

/* ОПЦІЇ */

var LIBRARY_BOOK_FEE = 10; // 10грн

/* СПИСКИ */

var MEETING_PROJECTS = 'Проекти';

/* МЕНЮ */

var MEETING = "🎤️ Засідання";

var MEETING_SHOW_MY_ROLES = "Показати мої ролі";
var MEETING_SHOW_PROGRAM = "Програма засідання";
var MEETING_SIGN_UP_FOR_ROLE = "Записатись на роль";

var MEETING_ASSIGN_ROLE = "Записати на роль";
var MEETING_SHOW_ROLES = "Показати на які ролі записаний член клубу";
var MEETING_CANCEL = 'Скасувати засідання';

var MEETING_SIGN_UP_DATE = "Вибрати засідання (дату)";
var MEETING_SIGN_UP_ROLE = "Вибрати роль";
var MEETING_SIGN_UP_ROLE_REJECTED = "На жаль, ви не можете записатись на роль на засіданні <b>{0}</b>, бо <b>вже записанi на ролi</b>: <i>{1}</i>";

var MEETING_ROLE_REJECT = '❗ Звільнити';
var MEETING_ROLE_CHANGE = '📝 Змінити';
var MEETING_ROLE_CLEAN = 'Ніхто';
var MEETING_ROLE_EMPTY = '❗ Скасувати';
var MEETING_ROLE_NOBODY = 'Ніхто не виконував';
var MEETING_ROLE_REJECT_CALLBACK = 'unsign_role';
var MEETING_ROLE_CHANGE_CALLBACK = 'change_role';
var MEETING_ROLE_CLEAN_CALLBACK = 'clean_role';
var MEETING_SPEACH_CHANGE_PROJECT_CALLBACK = 'change_speach_project';
var MEETING_SPEACH_CHANGE_TITLE_CALLBACK = 'change_speach_title';
var MEETING_CHANGE_WORD_OF_THE_DAY_CALLBACK = 'change_meeting_word';
var MEETING_CHANGE_THEME_CALLBACK = 'change_meeting_theme';

var MEETING_SPEACH_CHANGE_PROJECT = '✏️ Вказати проект промови';
var MEETING_SPEACH_CHANGE_TITLE = '✏️ Вказати назву промови';
var MEETING_CHANGE_WORD_OF_THE_DAY = '✏️ Вказати слово дня';
var MEETING_CHANGE_THEME = '✏️ Вказати тему засідання';

var MEETING_EDIT = 'Редагувати';

/* ОСНОВНІ РОЛІ */

var MEETING_ABOUT = 'Про засідання';
var MEETING_ROLE_SPEACH = "Промова";
var MEETING_ROLE_SPEACH_PROJECT = "Проект промови";
var MEETING_ROLE_SPEACH_TITLE = "Назва промови";
var MEETING_ROLE_EVALUATION = "Відгук на промову";
var MEETING_ROLE_TOASTMASTER = "Голова";
var MEETING_ROLE_AH_COUNTER = "Мисливець за словами-паразитами";
var MEETING_ROLE_TIMER = "Контролер часу";
var MEETING_ROLE_GRAMMARIAN = "Знавець мови";
var MEETING_ROLE_SPEAKER_ADVICE = "Поради оратору";
var MEETING_ROLE_LIBRARIAN = "Бібліотекар";
var MEETING_ROLE_TABLE_TOPIC_MASTER = "Майстер експромт-сесії";
var MEETING_ROLE_TABLE_TOPIC_EVALUATOR = "Відгук на експромт-сесію";
var MEETING_ROLE_GENERAL_EVALUATOR = "Загальна оцінка засідання";

var MEETING_WORD_OF_THE_DAY = "Слово дня";
var MEETING_THEME = "Тема засідання";

/* ТЕКСТИ */

var MEETING_ABOUT_CURRENT_TEXT = 'Вставити поточний текст';
var MEETING_EDIT_SUCCESS = 'Інформацію було успішно змінено! 😎';
var MEETING_EDIT_FAILED = 'Не вдалось змінити інформацію про засідання 😟';
var MEETING_EDIT_CHOOSE_DATE = 'Виберіть засідання, що хочете змінити:';
var MEETING_EDIT_SELECT = 'Яку інформацію про засідання хочете змінити?';
var MEETING_EDIT_ABOUT_1 = 'Відправте мені нову інформацію про засідання. Наприклад, це може бути інформація про конкурс (головний суддя, учасники) або інформація про неформальне засідання.\
\n\
\n\Можна використовувати тег виділення (b), курсиву (i), та теги a, code, pre.';
var MEETING_EDIT_ABOUT_2 = 'За допомогою кнопки нижче, можна вставити поточний опис засідання в поле для набору тексту і відредагувати його.';
var MEETING_EDIT_WORD_OF_THE_DAY = 'Введіть слово дня на засіданні:';
var MEETING_EDIT_THEME = 'Введіть тему засідання:';
var MEETING_NOT_FOUND = 'На жаль, засідання <b>{0}</b> не було знайдено...\
                         \n\nПеревірте, будь ласка, чи правильно Ви вибрали дату!';

var MEETING_ASSIGN_ROLE_SUCCESS_MEMBER = 'Привіт, {0}! ☺️ На засіданні <b>{1}</b> ви будете виконувати роль <b>{2}</b> 😍.';

var MEETING_CANCEL_CHOOSE_DATE = 'Виберіть дату засідання, що хочете скасувати:';

var MEETING_SPEACH_NO_PROJECT = '🗂 <b>Проект промови</b>\
\n\nЯкщо ви виконуєте проект за певним проектом, вкажіть його за допомогою кнопки нижче. Якщо ваша промова без проекту, <b>обов\'язково</b> вкажіть <b>Без проекту</b> 👇🏻';
var MEETING_SPEACH_CONFIRM_PROJECT = '🗂 <b>Проект промови</b>\
\n\nВ мене записано, що проект вашої промови: <b>{0}</b>.\
\n\nЯкщо щось змінилось, то натисніть кнопку нижче і вкажіть новий проект 👇🏻';
var MEETING_SPEACH_NO_TITLE = '📰 <b>Назва вашої промови</b>\
\n\nЧи знаєте ви вже назву промови? Якщо так, то натисніть кнопку нижче і вкажіть її 👇🏻';
var MEETING_SPEACH_CONFIRM_TITLE = '📰 <b>Назва вашої промови</b>\
\n\nВ мене записано, що назва вашої промови: <b>{0}</b>.\
\n\nЯкщо назва змінилась, то натисніть кнопку нижче і вкажіть нову назву 👇🏻';

var MEETING_NO_WORD_OF_THE_DAY = '💬 <b>Слово дня</b>\
\n\nВи вже придумали слово дня? Якщо так, вкажіть його, використовуючи кнопку нижче 👇🏻';
var MEETING_NO_THEME = '💡 <b>Тема засідання</b>\
\n\nЧи знаєте ви вже тему засідання? Якщо так, заповніть її використовуючи кнопку нижче 👇🏻';

var MEETING_SPEACH_PROJECT_EMPTY = 'Без проекту';

var MEETING_SPEACH_CHOOSE_PROJECT = 'Вкажіть проект вашої промови:';
var MEETING_SPEACH_CHOOSE_TITLE = 'Вкажіть назву вашої промови:';
var MEETING_CHOOSE_WORD_OF_THE_DAY = 'Вкажіть слово дня:';
var MEETING_CHOOSE_THEME = 'Вкажіть тему засідання:';

var MEETING_PROGRAM_CHOOSE_DATE = 'Виберіть дату засідання:';
var MEETING_PROGRAM_TITLE_1 = '<b>Програма засідання</b>';
var MEETING_PROGRAM_TITLE_2 = '<b>📆 {0}</b>';
var MEETING_PROGRAM_ROLE_INFO = '<b>{0}</b>:\n{1}\n\n';
var MEETING_PROGRAM_ROLE_SPEACH_INFO_NO_PROJECT = '<b>{0}:</b>\n{2} ⁠— <i>"{1}"</i>\n\n';
var MEETING_PROGRAM_ROLE_SPEACH_INFO_WITH_PROJECT = '<b>{0}:</b>\n{3} ⁠— <i>"{1}"</i> <code>({2})</code>\n\n';
var MEETING_PROGRAM_ROLE_NO_MEMBER = '⇨ <i>Роль вільна</i>';
var MEETING_PROGRAM_ROLE_EMPTY = '⇨ <i>Не вказано</i>';

var MEETING_SIGN_UP_SUCCESS = 'Вітаю! Ви будете виконувати роль <b>{0}</b> на засіданні <b>{1}</b>! 😍';
var MEETING_SIGN_UP_ROLES_BUSY = 'На жаль, роль {0} на засіданні {1} вже зайнята. Спробуйте іншу роль.';
var MEETING_SIGN_UP_ROLES_AVAILABLE = 'Доступні ролі на засідання {0}:';

var MEETING_SIGN_UP_DATE_BUSY = 'На жаль, роль {0} на засіданні {1} вже зайнята. Спробуйте іншу дату.';

var MEETING_SIGN_UP_DATE_AVAILABLE = 'Доступні засідання для виконання ролі <b>{0}</b>:';
var MEETING_SIGN_UP_ROLE_REQUEST = 'Яку роль ви хочете виконати?';
var MEETING_SIGN_UP_DATE_REQUEST = 'На яке засідання ви хочете взяти роль?';
var MEETING_SIGN_UP_SELECT_ROLE_OR_DATE = 'Хочете вибрати спочатку засідання чи роль?';

var MEETING_ASSIGN_ROLE_SUCCESS = 'Вітаю! <b>{0}</b> буде виконувати роль <b>{1}</b> на засіданні <b>{2}</b>! 😍';
var MEETING_ASSIGN_ROLE_BUSY_ROLE = 'На жаль, роль {0} на засіданні {1} вже зайнята. Спробуйте іншу роль:';
var MEETING_ASSIGN_ROLE_BUSY_DATE = 'На жаль, роль {0} на засіданні {1} вже зайнята. Спробуйте іншу дату:';
var MEETING_ASSIGN_ROLE_AVAILABLE_ROLES = 'Доступні ролі на засідання {0}:';
var MEETING_ASSIGN_ROLE_AVAILABLE_DATES = 'Доступні засідання для виконання ролі {0}:';
var MEETING_ASSIGN_ROLE_SELECT_MEMBER = 'Оберіть члена клубу (або введіть ім\'я для пошуку), якого хочете записати на роль?';
var MEETING_ASSIGN_ROLE_SELECT_DATE = 'На яке засідання необхідно записати?';
var MEETING_ASSIGN_ROLE_SELECT_ROLE = 'Яку роль необхідно виконати?';
var MEETING_ASSIGN_ROLE_SELECT_ROLE_OR_DATE = 'Хочете вибрати спочатку засідання чи роль?';

var MEETING_ROLE_INFO_SPEACH_0_DAY = '{0}, засідання вже скоро, а в мене досі немає <b>{1}</b> для <b>вашої промови</b>. Заповніть дані якомога раніше, щоб я міг правильно сформувати програму ☺';
var MEETING_ROLE_INFO_WORD_OF_THE_DAY_0_DAY = '{0}, засідання вже скоро, а в мене досі немає <b>немає слова дня</b>. Придумайте якнайшвидше слово дня і повідомте мені 😍';
var MEETING_ROLE_INFO_THEME_0_DAY = '{0}, засідання вже скоро, а в мене досі <b>немає теми засідання</b>. Придумайте якнайшвидше тему і повідомте мені 😍';

var MEETING_ROLES_NOT_ASSIGNED = 'Ви не записані на жодну роль.';
var MEETING_ROLES_MEMBER_NOT_ASSIGNESD = '{0} не записаний на жодну роль.';
var MEETING_ROLES_ASSIGNED_TITLE = '<b>Ви записані на ролі на наступних засіданнях:</b>';
var MEETING_ROLES_ASSIGNED_MEMBER_TITLE = '<b>{0} записаний на ролі на наступних засіданнях:</b>';
var MEETING_ROLES_ASSIGNED_DATE_TITLE = '<b>{0}:</b>';

var MEETING_ROLES_CONFIRM = 'Підтвердити ролі на засіданні';
var MEETING_ROLES_CONFIRM_TITLE = 'Підтвердіть, будь ласка, виконання ролей на засіданні <b>{0}</b>';

var MEETING_SHOW_ROLES_SELECT_MEMBER = 'Оберіть члена клубу:';

var MEETING_CANCEL_SYMBOL = '*';

var MEETING_CANCEL_REASON_SHORT = 'Введіть коротеньку причину (2-3, ну максимум 4 слова 🙃), чому ви скасовуєте засідання:';
var MEETING_CANCEL_REASON_DETAILED = 'Тут можна вказати детальну інформацію про скасоване засідання. \
\n\
\nНаприклад, це може бути інформація про конкурс (головний суддя, учасники) або інформація про неформальне засідання.\
\n\
\n\Можна використовувати тег виділення (b), курсиву (i), та теги a, code, pre.\
\n\
\nПізніше інформацію можна змінити.';

var MEETING_CANCEL_SUCCESS = 'Засідання скасоване';
var MEETING_CANCEL_REASON_1 = 'Конкурс промов';
var MEETING_CANCEL_REASON_2 = 'Конкурс гумористичних промов';
var MEETING_CANCEL_REASON_3 = 'Конкурс експромт-промов';
var MEETING_CANCEL_KEEP_ROLE = 'Вкажіть роль, яку ви хочете залишити на засідання:';

var MEETING_ROLE_IS_DUPLICATED = 'На жаль, ви не можете записатися на роль <b>{0}</b> на засідання <b>{1}</b>, тому що ви її виконували на попередньому засіданні <b>{2}</b>.\
\n\nВи можете записатися на іншу роль або на <b>{3}</b> засідання.';
var MEETING_ROLE_IS_DUPLICATED_FUTURE = 'На жаль, ви не можете записатися на роль <b>{0}</b> на засідання <b>{1}</b>, тому що ви будете її виконувати на засіданні <b>{2}</b>.\
\n\nВи можете записатися на іншу роль або на <b>{3}</b> засідання.';

var MEETING_ROLE_REQUEST_SENT = "Ваш запит на виконання ролі відправлено віце-президенту з освіти!\
                                 \n\nЯк тільки він підтвердить вашу участь у засіданні - ви отримаєте повідомлення 😊";

var MEETING_ROLE_REQUEST_BUSY = "На жаль, роль <b>{0}</b> на засіданні <b>{1}</b> вже зайнята. Ви не можете записати <b>{2}</b> на цю роль.";
var MEETING_ROLE_REQUEST_FAILED_NO_MEMBER = "На жаль, не змогли підтвердити виконання ролі, тому що не знайшли користувача <b>{0}</b> в базі.";

var MEETING_ROLE_REQUEST_CONFIRM_MESSAGE = 'Вітаю, {0}!\n\nГість <b>{1}</b> просить вас підтвердити його запит на виконання ролі <b>{2}</b> на засіданні <b>{3}</b>';

var MEETING_ROLE_REQUEST_CONFIRM_CALLBACK = 'confirm_guest_to_sign_up_to_role';
var MEETING_ROLE_REQUEST_REJECT_CALLBACK = 'reject_guest_to_sign_up_to_role';

var MEETING_ROLE_REQUEST_CONFIRM = '👍 Підтвердити';
var MEETING_ROLE_REQUEST_REJECT = '👎 Відмовити';

var MEETING_ROLE_REQUEST_CONFIRMED = 'Вітаю, {0}!\n\nВіце-президент з освіти підтвердив ваш запит! 😊\n\nНа засіданні <b>{1}</b> ви будете виконувати роль <b>{2}</b>.';
var MEETING_ROLE_REQUEST_CONFIRMED_INFO = 'Повідомив <b>{0}</b>, що його запит на виконання ролі <b>{1}</b> на засіданні <b>{2}</b> було <b>схвалено 👍</b>.';
var MEETING_ROLE_REQUEST_REJECTED = 'Вітаю, {0}!\n\nНа жаль, віце-президент з освіти не підтвердив вам у виконанні ролі <b>{1}</b> на засіданні <b>{2}</b>. Можливо, на цю роль вже записаний член клубу. За деталями зверніться до віце-президента клубу.';
var MEETING_ROLE_REQUEST_REJECTED_INFO = 'Повідомив <b>{0}</b>, що його запит на виконання ролі <b>{1}</b> на засіданні <b>{2}</b> було <b>відхилено 👎</b>.';

/* ЗАГОЛОВКИ БАЗИ ДАННИХ */

var MEETING_HEADER_DATE = "Дата";

/* EMOJI РОЛЕЙ */

var MEETING_ROLE_ICONS = [];
MEETING_ROLE_ICONS[MEETING_ROLE_SPEACH] = "‍🎤";
MEETING_ROLE_ICONS[MEETING_ROLE_SPEACH_TITLE] = "📰";
MEETING_ROLE_ICONS[MEETING_ROLE_SPEACH_PROJECT] = "📑";
MEETING_ROLE_ICONS[MEETING_ROLE_EVALUATION] = "🍬";
MEETING_ROLE_ICONS[MEETING_ROLE_TOASTMASTER] = "🤵";
MEETING_ROLE_ICONS[MEETING_ROLE_AH_COUNTER] = "🐞";
MEETING_ROLE_ICONS[MEETING_ROLE_TIMER] = "🕐";
MEETING_ROLE_ICONS[MEETING_ROLE_GRAMMARIAN] = "🎓";
MEETING_ROLE_ICONS[MEETING_ROLE_SPEAKER_ADVICE] = "📜";
MEETING_ROLE_ICONS[MEETING_ROLE_LIBRARIAN] = "📚";
MEETING_ROLE_ICONS[MEETING_ROLE_TABLE_TOPIC_MASTER] = "🕺";
MEETING_ROLE_ICONS[MEETING_ROLE_TABLE_TOPIC_EVALUATOR] = "🍭";
MEETING_ROLE_ICONS[MEETING_ROLE_GENERAL_EVALUATOR] = "🏀";

MEETING_ROLE_ICONS[MEETING_WORD_OF_THE_DAY] = "💬";
MEETING_ROLE_ICONS[MEETING_THEME] = "💡";

function showMeetingProgram(userTelegramId, date) {
    var roles = getMeetingProgramRoles(date);

    var about = '';
    var theme = '';
    var wordOfTheDay = '';

    var message = MEETING_PROGRAM_TITLE_1 + '\n\n' + format(MEETING_PROGRAM_TITLE_2, date) + '\n\n';

    for (var i = 0; i < roles.length; i++) {
        var role = roles[i];
        var member = (role.member) ? role.member : MEETING_PROGRAM_ROLE_NO_MEMBER;
        if (member && member[0] == MEETING_CANCEL_SYMBOL) {} else {
            if (role.name.indexOf(MEETING_ABOUT) > -1) {
                about = role.member;
                continue;
            }

            if (role.name.indexOf(MEETING_THEME) > -1) {
                theme = role.member;
                continue;
            }

            if (role.name.indexOf(MEETING_WORD_OF_THE_DAY) > -1) {
                wordOfTheDay = role.member;
                continue;
            }

            if (!role.speachTitle) {
                var icon = MEETING_ROLE_ICONS[role.name];
                if (role.name.indexOf(MEETING_ROLE_SPEACH) > -1) icon = MEETING_ROLE_ICONS[MEETING_ROLE_SPEACH];
                if (role.name.indexOf(MEETING_ROLE_EVALUATION) > -1) icon = MEETING_ROLE_ICONS[MEETING_ROLE_EVALUATION];
                message += icon + " " + format(MEETING_PROGRAM_ROLE_INFO, role.name, member);
            } else {
                var icon = MEETING_ROLE_ICONS[MEETING_ROLE_SPEACH];
                if (role.speachProject && role.speachProject != MEETING_SPEACH_PROJECT_EMPTY) {
                    message += icon + " " + format(MEETING_PROGRAM_ROLE_SPEACH_INFO_WITH_PROJECT, role.name, role.speachTitle, role.speachProject, role.member);
                } else {
                    message += icon + " " + format(MEETING_PROGRAM_ROLE_SPEACH_INFO_NO_PROJECT, role.name, role.speachTitle, role.member);
                }
            }
        }
    }

    if (about) {
        message += format('{0}\n\n', about);
    }

    if (theme) {
        message += format('<b>{0}:</b> {1}\n', MEETING_THEME, theme);
    }

    if (wordOfTheDay) {
        message += format('<b>{0}:</b> {1}', MEETING_WORD_OF_THE_DAY, wordOfTheDay);
    }

    showMenu(userTelegramId, message);
    return true;
}

function processSignUpForRole(userData, text) {
    if (userData.statuses[2]) {
        if (userData.statuses[2] == MEETING_SIGN_UP_DATE) {
            if (userData.statuses[3]) {
                if (!userData.statuses[4]) {
                    var roleDuplicatesInfo = isRoleDuplicated(userData.fullName, parseDate(userData.statuses[3]), text);
                    if (!roleDuplicatesInfo) {
                        var enoughSpeechesSaid = isEnoughAmountOfSpeeches(userData.fullName, text, userData.statuses[3]);
                        if (enoughSpeechesSaid) {
                            var isUserAGuest = (userData.fields[MEMBERS_HEADER_STATUS] == MEMBERS_STATUS_GUEST) ? true : false;
                            if (!isUserAGuest) {
                                if (tryToUpdateMeetingInfo(userData.statuses[3], text, userData.fullName)) {
                                    showMenu(userData.telegramId, format(MEETING_SIGN_UP_SUCCESS, text, userData.statuses[3]));
                                } else {
                                    showMenu(userData.telegramId, format(MEETING_SIGN_UP_ROLES_BUSY, text, userData.statuses[3]), getMeetingRoles(userData.statuses[3]));
                                }
                                return true;
                            } else {
                                showMenu(userData.telegramId, MEETING_ROLE_REQUEST_SENT);
                                askVPEducationToConfirmRole(userData, userData.statuses[3], text);
                                return false;
                            }
                        } else {
                            showMenu(userData.telegramId, MEETING_ROLE_REQUEST_SENT);
                            askVPEducationToConfirmRole(userData, userData.statuses[3], text);
                            return false;
                        }
                    } else {
                        var message = roleDuplicatesInfo.isFuture ?
                            format(MEETING_ROLE_IS_DUPLICATED_FUTURE, text, userData.statuses[3], roleDuplicatesInfo.date, roleDuplicatesInfo.availableDate) :
                            format(MEETING_ROLE_IS_DUPLICATED, text, userData.statuses[3], roleDuplicatesInfo.date, roleDuplicatesInfo.availableDate);

                        showMenu(userData.telegramId, message, getMeetingRoles(userData.statuses[3]));
                        return false;
                    }
                }
            } else {
                var foundRoles = getSignedRolesInSelectedMeeting(userData.fullName, text);

                if (foundRoles == null) {
                    sendText(userData.telegramId, format(MEETING_NOT_FOUND, formatDate(parseDate(text))));
                    return false;
                }

                if (foundRoles) {
                    var listOfSignedRoles = "";

                    for (var key in foundRoles) {
                        listOfSignedRoles += key + ', ';
                    }
                    listOfSignedRoles = listOfSignedRoles.substring(0, listOfSignedRoles.length - 2);

                    sendText(userData.telegramId, format(MEETING_SIGN_UP_ROLE_REJECTED, formatDate(parseDate(text)), listOfSignedRoles));
                    return false;
                } else {
                    showMenu(userData.telegramId, format(MEETING_SIGN_UP_ROLES_AVAILABLE, text), getMeetingRoles(text));
                    return true;
                }
            }
        } else if (userData.statuses[2] == MEETING_SIGN_UP_ROLE) {
            if (userData.statuses[3]) {
                if (!userData.statuses[4]) {
                    var foundRoles = getSignedRolesInSelectedMeeting(userData.fullName, text);

                    if (foundRoles == null) {
                        sendText(userData.telegramId, format(MEETING_NOT_FOUND, formatDate(text)));
                        return false;
                    }

                    if (foundRoles) {
                        var listOfSignedRoles = "";

                        for (var key in foundRoles) {
                            listOfSignedRoles += key + ', ';
                        }
                        listOfSignedRoles = listOfSignedRoles.substring(0, listOfSignedRoles.length - 2);

                        sendText(userData.telegramId, format(MEETING_SIGN_UP_ROLE_REJECTED, formatDate(parseDate(text)), listOfSignedRoles));
                        return false;
                    } else {
                        var roleDuplicatesInfo = isRoleDuplicated(userData.fullName, text, userData.statuses[3]);
                        if (!roleDuplicatesInfo) {
                            var enoughSpeechesSaid = isEnoughAmountOfSpeeches(userData.fullName, userData.statuses[3], text);
                            if (enoughSpeechesSaid) {
                                var isUserAGuest = (userData.fields[MEMBERS_HEADER_STATUS] == MEMBERS_STATUS_GUEST) ? true : false;
                                if (!isUserAGuest) {
                                    if (tryToUpdateMeetingInfo(text, userData.statuses[3], userData.fullName)) {
                                        showMenu(userData.telegramId, format(MEETING_SIGN_UP_SUCCESS, userData.statuses[3], text));
                                    } else {
                                        showMenu(userData.telegramId, format(MEETING_SIGN_UP_DATE_BUSY, userData.statuses[3], text), getAvailableRoleDates(userData.statuses[3]));
                                    }
                                    return true;
                                } else {
                                    showMenu(userData.telegramId, MEETING_ROLE_REQUEST_SENT);
                                    askVPEducationToConfirmRole(userData, text, userData.statuses[3]);
                                    return false;
                                }
                            } else {
                                showMenu(userData.telegramId, MEETING_ROLE_REQUEST_SENT);
                                askVPEducationToConfirmRole(userData, text, userData.statuses[3]);
                                return false;
                            }
                        } else {
                            var message = roleDuplicatesInfo.isFuture ?
                                format(MEETING_ROLE_IS_DUPLICATED_FUTURE, text, userData.statuses[3], roleDuplicatesInfo.date, roleDuplicatesInfo.availableDate) :
                                format(MEETING_ROLE_IS_DUPLICATED, text, userData.statuses[3], roleDuplicatesInfo.date, roleDuplicatesInfo.availableDate);

                            showMenu(userData.telegramId, message, getMeetingRoles( /*userData.statuses[3]*/ text));
                            return false;
                        }
                    }
                }
            } else {
                showMenu(userData.telegramId, format(MEETING_SIGN_UP_DATE_AVAILABLE, text), getAvailableRoleDates(text));
                return true;
            }
        }
    } else {
        if (text == MEETING_SIGN_UP_DATE) {
            showMenu(userData.telegramId, MEETING_SIGN_UP_DATE_REQUEST,
                getNextMeetingDates(SIGN_UP_FOR_NEXT_MEETINGS_AMOUNT));
            return true;
        } else if (text == MEETING_SIGN_UP_ROLE) {
            showMenu(userData.telegramId, MEETING_SIGN_UP_ROLE_REQUEST,
                getMeetingRoles());
            return true;
        }
    }
}

function processAssignRole(userData, text) {
    if (userData.statuses[3]) {
        if (userData.statuses[3] == MEETING_SIGN_UP_DATE) {
            if (userData.statuses[4]) {
                if (userData.statuses[5]) {
                    if (!userData.statuses[6]) {
                        if (tryToUpdateMeetingInfo(userData.statuses[4], text, userData.statuses[5])) {
                            var memberInfo = getMemberInfo(MEMBERS_HEADER_FULLNAME, userData.statuses[5]);
                            if (memberInfo) {
                                var callName = memberInfo.callName || memberInfo.name;
                                sendText(memberInfo.telegramId, format(MEETING_ASSIGN_ROLE_SUCCESS_MEMBER, callName, userData.statuses[4], text));
                            }
                            showMenu(userData.telegramId, format(MEETING_ASSIGN_ROLE_SUCCESS, userData.statuses[5], text, userData.statuses[4]));
                        } else {
                            showMenu(userData.telegramId, format(MEETING_ASSIGN_ROLE_BUSY_ROLE, text, userData.statuses[4]), getMeetingRoles(userData.statuses[4], true));
                        }
                        return true;
                    }
                } else {
                    return searchMemberInDatabase(text, userData.telegramId, format(MEETING_ASSIGN_ROLE_AVAILABLE_ROLES, userData.statuses[4]), getMeetingRoles(userData.statuses[4], true));
                }
            } else {
                showMenu(userData.telegramId, MEETING_ASSIGN_ROLE_SELECT_MEMBER, getAllMembers());
                return true;
            }
        } else if (userData.statuses[3] == MEETING_SIGN_UP_ROLE) {
            if (userData.statuses[4]) {
                if (userData.statuses[5]) {
                    if (!userData.statuses[6]) {
                        if (tryToUpdateMeetingInfo(text, userData.statuses[4], userData.statuses[5])) {
                            showMenu(userData.telegramId, format(MEETING_ASSIGN_ROLE_SUCCESS, userData.statuses[5], userData.statuses[4], text));
                        } else {
                            showMenu(userData.telegramId, format(MEETING_ASSIGN_ROLE_BUSY_DATE, userData.statuses[4], text), getAvailableRoleDates(userData.statuses[4], true));
                        }
                        return true;
                    }
                } else {
                    return searchMemberInDatabase(text, userData.telegramId, format(MEETING_ASSIGN_ROLE_AVAILABLE_DATES, userData.statuses[4]), getAvailableRoleDates(userData.statuses[4], true));
                }
            } else {
                showMenu(userData.telegramId, MEETING_ASSIGN_ROLE_SELECT_MEMBER, getAllMembers());
                return true;
            }
        }
    } else {
        if (text == MEETING_SIGN_UP_DATE) {
            showMenu(userData.telegramId, MEETING_ASSIGN_ROLE_SELECT_DATE,
                getNextMeetingDates(SIGN_UP_FOR_NEXT_MEETINGS_AMOUNT));
            return true;
        } else if (text == MEETING_SIGN_UP_ROLE) {
            showMenu(userData.telegramId, MEETING_ASSIGN_ROLE_SELECT_ROLE,
                getMeetingRoles());
            return true;
        }
    }
}

function processMeeting(userData, text) {
    if (userData.statuses[1]) {
        if (userData.statuses[1] == MEETING_SIGN_UP_FOR_ROLE) {
            return processSignUpForRole(userData, text);
        } else if (userData.statuses[1] == MEETING_SHOW_PROGRAM) {
            if (!userData.statuses[2]) {
                return showMeetingProgram(userData.telegramId, text);
            }
        }
    } else {
        if (text == MEETING_SIGN_UP_FOR_ROLE) {
            showMenu(userData.telegramId, MEETING_SIGN_UP_SELECT_ROLE_OR_DATE, [MEETING_SIGN_UP_DATE, MEETING_SIGN_UP_ROLE]);
            return true;
        } else if (text == MEETING_SHOW_MY_ROLES) {
            showSignedRoles(userData.telegramId, userData.fullName, true);
            return false;
        } else if (text == MEETING_SHOW_PROGRAM) {
            showMenu(userData.telegramId, MEETING_PROGRAM_CHOOSE_DATE, getNextMeetingDates(SIGN_UP_FOR_NEXT_MEETINGS_AMOUNT));
            return true;
        }
    }
}

function processCancelMeeting(userData, text) {
    if (userData.statuses[3]) {
        if (userData.statuses[4]) {
            if (!userData.statuses[5]) {
                var date = userData.statuses[3];
                var reasonShort = (userData.statuses[4] != EMPTY) ? userData.statuses[4] : '';
                var reasonDetailed = (text != EMPTY) ? text : '';
                if (!reasonDetailed) reasonDetailed = reasonShort;

                cancelMeeting(date, reasonShort);
                tryToUpdateMeetingInfo(date, MEETING_ABOUT, reasonDetailed);
                showMenu(userData.telegramId, MEETING_CANCEL_SUCCESS);

                return true;
            }
        } else {
            showMenu(userData.telegramId, MEETING_CANCEL_REASON_DETAILED, [EMPTY]);
            return true;
        }
    } else {
        showMenu(userData.telegramId, MEETING_CANCEL_REASON_SHORT, [EMPTY, MEETING_CANCEL_REASON_1, MEETING_CANCEL_REASON_2, MEETING_CANCEL_REASON_3]);
        return true;
    }
}

function processMeetingManagement(userData, text) {
    if (userData.statuses[2]) {
        if (userData.statuses[2] == MEETING_SHOW_ROLES) {
            var result = searchMemberInDatabase(text, userData.telegramId, null, null);
            if (result) {
                return showSignedRoles(userData.telegramId, text, false);
            } else {
                return false;
            }
        } else if (userData.statuses[2] == MEETING_ASSIGN_ROLE) {
            return processAssignRole(userData, text);
        } else if (userData.statuses[2] == MEETING_CANCEL) {
            return processCancelMeeting(userData, text);
        } else if (userData.statuses[2] == MEETING_SHOW_PROGRAM && !userData.statuses[3]) {
            showMeetingProgramAndCallbacks(userData.telegramId, text);
            return true;
        } else if (userData.statuses[2] == MEETING_EDIT) {
            return processEditMeeting(userData, text);
        }
    } else {
        if (text == MEETING_ASSIGN_ROLE) {
            showMenu(userData.telegramId, MEETING_ASSIGN_ROLE_SELECT_ROLE_OR_DATE, [MEETING_SIGN_UP_DATE, MEETING_SIGN_UP_ROLE]);
            return true;
        } else if (text == MEETING_SHOW_ROLES) {
            showMenu(userData.telegramId, MEETING_SHOW_ROLES_SELECT_MEMBER, getAllMembers());
            return true;
        } else if (text == MEETING_CANCEL) {
            showMenu(userData.telegramId, MEETING_CANCEL_CHOOSE_DATE, getNextMeetingDates(SIGN_UP_FOR_NEXT_MEETINGS_AMOUNT));
            return true;
        } else if (text == MEETING_EDIT) {
            showMenu(userData.telegramId, MEETING_EDIT_CHOOSE_DATE, getNextMeetingDates(SIGN_UP_FOR_NEXT_MEETINGS_AMOUNT));
            return true;
        } else if (text == MEETING_SHOW_PROGRAM) {
            showMenu(userData.telegramId, MEETING_PROGRAM_CHOOSE_DATE, getNextMeetingDates(SIGN_UP_FOR_NEXT_MEETINGS_AMOUNT));
            return true;
        }
    }
}

function processEditMeeting(userData, text) {
    const dateIndexInStatuses = 3;
    var statusesIndexToStart = (userData.statuses[2] == MEETING_SHOW_PROGRAM) ? dateIndexInStatuses + 1 : dateIndexInStatuses;
    var fieldIndexInStatuses = statusesIndexToStart + 1;

    if (userData.statuses[statusesIndexToStart]) {
        if (userData.statuses[statusesIndexToStart + 1]) {
            if (!userData.statuses[statusesIndexToStart + 2]) {
                var date = userData.statuses[dateIndexInStatuses];
                var field = userData.statuses[fieldIndexInStatuses];
                var value = removeTemplateTextBelow(text);
                if (updateMeetingInfo(date, field, value, false)) {
                    showMenu(userData.telegramId, MEETING_EDIT_SUCCESS);
                } else {
                    showMenu(userData.telegramId, MEETING_EDIT_FAILED);
                }
            }
        } else {
            if (text == MEETING_ABOUT) {
                var text = getMeetingInfo(userData.statuses[dateIndexInStatuses], MEETING_ABOUT);
                showMenu(userData.telegramId, MEETING_EDIT_ABOUT_1);
                sendText(userData.telegramId, MEETING_EDIT_ABOUT_2, '{"inline_keyboard":[[ {"text": "' + MEETING_ABOUT_CURRENT_TEXT + '", "switch_inline_query_current_chat" : "' + TEMPLATE_TEXT_BELOW + text + '"}]] }');
                return true;
            } else if (text == MEETING_THEME) {
                showMenu(userData.telegramId, MEETING_EDIT_THEME);
                return true;
            } else if (text == MEETING_WORD_OF_THE_DAY) {
                showMenu(userData.telegramId, MEETING_EDIT_WORD_OF_THE_DAY);
                return true;
            }
        }
    } else {
        showMenu(userData.telegramId, MEETING_EDIT_SELECT, [MEETING_ABOUT, MEETING_THEME, MEETING_WORD_OF_THE_DAY]);
        return true;
    }
}

/* ОПЕРАЦІЇ */

function askVPEducationToConfirmRole(userData, meetingDate, roleName) {

    var vpEducation = getMemberInfo(MEMBERS_HEADER_POSITION, OFFICER_POSITION_VP_EDUCATION);
    var roleMember = userData.fullName;
    var callbacksToInsert = [];

    var callbackData = MEETING_ROLE_REQUEST_CONFIRM_CALLBACK + '___' + meetingDate + '___' + roleName + '___' + roleMember;
    var callbackId = (new Date()).getTime();
    var time = callbackId;
    var keyBoard = [{
        text: MEETING_ROLE_REQUEST_CONFIRM,
        callback: callbackId
    }];

    callbacksToInsert.push([callbackId, time, callbackData]);

    callbackData = MEETING_ROLE_REQUEST_REJECT_CALLBACK + '___' + meetingDate + '___' + roleName + '___' + roleMember;
    callbackId = (new Date()).getTime() + 3;
    time = callbackId;

    callbacksToInsert.push([callbackId, time, callbackData]);

    keyBoard.push({
        text: MEETING_ROLE_REQUEST_REJECT,
        callback: callbackId
    });

    sendText(vpEducation.telegramId, format(MEETING_ROLE_REQUEST_CONFIRM_MESSAGE, vpEducation.callName, roleMember, roleName, meetingDate), getMenuInlineKeyBoardMultiline(keyBoard));
    insertCallbacks(callbacksToInsert);
}

/* ФУНКЦІЇ */

function getLastMeetingDate() {
    var date = new Date();
    var day = date.getDay();
    var prevMonday;
    if (date.getDay() == MEETING_ON_WEEK_DAY) {
        return date;
    }
    return new Date(new Date().setDate(date.getDate() - ((date.getDay() + (7 - MEETING_ON_WEEK_DAY)) % 7)));
}

// day: 0=Sunday, 1=Monday...4=Thursday...
function getNextMeetingDate() {
    var now = new Date;
    var result = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + (7 + MEETING_ON_WEEK_DAY - now.getDay()) % 7, MEETING_TIME, 0);

    result = new Date(result.getTime() + MEETING_DURATION_MINUTES * 60000);

    if (result <= now) {
        result.setDate(result.getDate() + 7)
    }
    return result;
}

/* СПОВІЩЕННЯ */

function checkProgramBeforeMeeting() {
    var date = new Date();
    var currentDate = parseDate(formatDate(date));
    var nextMeetingDate = getNextMeetingDate();

    const diffTime = Math.abs(nextMeetingDate - currentDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) - 1;

    if (!(diffDays == 0 && date.getHours() >= 9 && date.getHours() <= MEETING_TIME)) {
        //return;
    }

    var roles = getMeetingProgramRoles(nextMeetingDate);

    var meetingTheme = '';

    for (var i = 0; i < roles.length; i++) {
        var role = roles[i];
        var roleMember = role.member;
        var roleName = role.name;
        var shortRoleName = roleName;
        var isSpeach = false;

        if (role.name && role.name.indexOf(MEETING_ROLE_TOASTMASTER) > -1) {
            meetingTheme = role.theme;
        }

        if (roleMember) {
            if (roleName.indexOf(MEETING_ROLE_SPEACH) > -1) {
                shortRoleName = MEETING_ROLE_SPEACH;
                isSpeach = true;
            } else if (roleName.indexOf(MEETING_ROLE_EVALUATION) > -1) {
                shortRoleName = MEETING_ROLE_EVALUATION;
            }
            var memberInfo = getMemberInfo(MEMBERS_HEADER_FULLNAME, roleMember);
            if (!memberInfo || !memberInfo.telegramId) continue;
            var callName = memberInfo.callName || memberInfo.name;

            if (isSpeach) {
                if (!role.speachProject || !role.speachTitle) {
                    var titleProject = '';
                    if (!role.speachTitle) titleProject += MEETING_ROLE_SPEACH_TITLE + ', ';
                    if (!role.speachProject) titleProject += MEETING_ROLE_SPEACH_PROJECT;
                    if (titleProject[titleProject.length - 2] == ',') titleProject = titleProject(0, roles.length - 2);

                    sendText(memberInfo.telegramId, format(MEETING_ROLE_INFO_SPEACH_0_DAY, callName, titleProject));

                    if (!role.speachTitle) {
                        askForRoleDetails(memberInfo.telegramId, MEETING_SPEACH_CHANGE_TITLE_CALLBACK, MEETING_SPEACH_CHANGE_TITLE, MEETING_SPEACH_NO_TITLE,
                            date, roleName, roleMember);
                    }
                    if (!role.speachProject) {
                        askForRoleDetails(memberInfo.telegramId, MEETING_SPEACH_CHANGE_PROJECT_CALLBACK, MEETING_SPEACH_CHANGE_PROJECT, MEETING_SPEACH_NO_PROJECT,
                            date, roleName, roleMember);
                    }
                }
            } else if (roleName.indexOf(MEETING_ROLE_TOASTMASTER) > -1) {
                if (!role.theme) {
                    sendText(memberInfo.telegramId, format(MEETING_ROLE_INFO_THEME_0_DAY, callName));                
                    askForRoleDetails(memberInfo.telegramId, MEETING_CHANGE_THEME_CALLBACK, MEETING_CHANGE_THEME, MEETING_NO_THEME,
                        date, roleName, roleMember);
                }
            } else if (roleName.indexOf(MEETING_ROLE_GRAMMARIAN) > -1) {
                if (!role.wordOfTheDay) {
                    sendText(memberInfo.telegramId, format(MEETING_ROLE_INFO_WORD_OF_THE_DAY_0_DAY, callName));
                    askForRoleDetails(memberInfo.telegramId, MEETING_CHANGE_WORD_OF_THE_DAY_CALLBACK, MEETING_CHANGE_WORD_OF_THE_DAY, MEETING_NO_WORD_OF_THE_DAY,
                        date, roleName, roleMember);
                }
            }
        }
    }
}

function sendMeetingNotifications() {
    var currentDate = parseDate(formatDate(new Date()));
    var date = getNextMeetingDate();

    const diffTime = Math.abs(date - currentDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) - 1;

    if (diffDays != 1 && diffDays != 6) {
        return;
    }

    var roles = getMeetingProgramRoles(date);

    var meetingTheme = '';

    for (var i = 0; i < roles.length; i++) {
        var role = roles[i];
        var roleMember = role.member;
        var roleName = role.name;
        var shortRoleName = roleName;
        var isSpeach = false;

        if (role.name && role.name.indexOf(MEETING_ROLE_TOASTMASTER) > -1) {
            meetingTheme = role.theme;
        }

        if (roleMember) {
            if (roleName.indexOf(MEETING_ROLE_SPEACH) > -1) {
                shortRoleName = MEETING_ROLE_SPEACH;
                isSpeach = true;
            } else if (roleName.indexOf(MEETING_ROLE_EVALUATION) > -1) {
                shortRoleName = MEETING_ROLE_EVALUATION;
            }
            var memberInfo = getMemberInfo(MEMBERS_HEADER_FULLNAME, roleMember);
            if (!memberInfo || !memberInfo.telegramId) continue;
            var callName = memberInfo.callName || memberInfo.name;


            var notificationText = diffDays > 1 ? MEETING_ROLE_INFO_7_DAY[shortRoleName] : MEETING_ROLE_INFO_1_DAY[shortRoleName];
            sendText(memberInfo.telegramId, format(notificationText, callName, formatDate(date), shortRoleName));

            if (isSpeach) {
                if (!role.speachProject) {
                    askForRoleDetails(memberInfo.telegramId, MEETING_SPEACH_CHANGE_PROJECT_CALLBACK, MEETING_SPEACH_CHANGE_PROJECT, MEETING_SPEACH_NO_PROJECT,
                        date, roleName, roleMember);
                } else {
                    askForRoleDetails(memberInfo.telegramId, MEETING_SPEACH_CHANGE_PROJECT_CALLBACK, MEETING_SPEACH_CHANGE_PROJECT, format(MEETING_SPEACH_CONFIRM_PROJECT, role.speachProject),
                        date, roleName, roleMember);
                }

                if (!role.speachTitle) {
                    askForRoleDetails(memberInfo.telegramId, MEETING_SPEACH_CHANGE_TITLE_CALLBACK, MEETING_SPEACH_CHANGE_TITLE, MEETING_SPEACH_NO_TITLE,
                        date, roleName, roleMember);
                } else {
                    askForRoleDetails(memberInfo.telegramId, MEETING_SPEACH_CHANGE_TITLE_CALLBACK, MEETING_SPEACH_CHANGE_TITLE, format(MEETING_SPEACH_CONFIRM_TITLE, role.speachTitle),
                        date, roleName, roleMember);
                }
            } else if (roleName.indexOf(MEETING_ROLE_TOASTMASTER) > -1) {
                if (role.theme) {
                    sendText(memberInfo.telegramId, format('{0} <b>{1}</b>: {2}', MEETING_ROLE_ICONS[MEETING_THEME], MEETING_THEME, role.theme));
                } else {
                    askForRoleDetails(memberInfo.telegramId, MEETING_CHANGE_THEME_CALLBACK, MEETING_CHANGE_THEME, MEETING_NO_THEME,
                        date, roleName, roleMember);
                }
            } else if (roleName.indexOf(MEETING_ROLE_GRAMMARIAN) > -1) {
                if (role.wordOfTheDay) {
                    sendText(memberInfo.telegramId, format('{0} <b>{1}</b>: {2}', MEETING_ROLE_ICONS[MEETING_WORD_OF_THE_DAY], MEETING_WORD_OF_THE_DAY, role.wordOfTheDay));
                } else {
                    askForRoleDetails(memberInfo.telegramId, MEETING_CHANGE_WORD_OF_THE_DAY_CALLBACK, MEETING_CHANGE_WORD_OF_THE_DAY, MEETING_NO_WORD_OF_THE_DAY,
                        date, roleName, roleMember);
                }
            } else if (roleName.indexOf(MEETING_ROLE_TABLE_TOPIC_MASTER) > -1) {
                if (meetingTheme) {
                    sendText(memberInfo.telegramId, format('{0} <b>{1}</b>: {2}', MEETING_ROLE_ICONS[MEETING_THEME], MEETING_THEME, meetingTheme));
                }
            }
        }
    }
}

function askForRoleDetails(telegramId, callbackName, callbackText, callbackMessage, date, roleName, roleMember) {
    var callbackData = callbackName + '___' + formatDate(date) + '___' + roleName + '___' + roleMember;
    var callbackId = inseertCallback(callbackData);
    var keyBoard = [{
        text: callbackText,
        callback: callbackId
    }];

    sendText(telegramId, callbackMessage, getMenuInlineKeyBoardMultiline(keyBoard));
}

/* РОБОТА З БАЗОЮ */

function tryToUpdateMeetingInfo(date, setHeader, setValue) {
    if (setHeader == MEETING_ROLE_SPEACH || setHeader == MEETING_ROLE_EVALUATION) {
        for (var i = 1; i <= 4; i++) {
            if (updateMeetingInfo(date, setHeader + " №" + i, setValue, true)) {
                return true;
            }
        }
        return false;
    }

    return updateMeetingInfo(date, setHeader, setValue, true)
}


function cancelMeeting(date, reason) {
    var sheet = SpreadsheetApp.openById(databaseSpreadSheetId).getSheetByName(SHEET_MEETINGS);
    var headerValues = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

    var dateColumnIndex = headerValues.findIndex(MEETING_HEADER_DATE) + 1;
    var toastmasterColumnIndex = headerValues.findIndex(MEETING_ROLE_TOASTMASTER);

    var dateValues = sheet.getRange(2, dateColumnIndex, sheet.getLastRow(), 1).getValues();
    var dateRowIndex = -1;

    for (var i = 0; i < dateValues.length; i++) {
        var date2 = new Date(dateValues[i]);
        var date1 = typeof date.getMonth === 'function' ? date : parseDate(date);

        if (date1.getYear() == date2.getYear() &&
            date1.getMonth() == date2.getMonth() &&
            date1.getDate() == date2.getDate()) {
            dateRowIndex = i;
            break;
        }
    }

    if (dateRowIndex > -1) {
        var lastColumnIndex = sheet.getLastColumn();
        for (var i = toastmasterColumnIndex; i < headerValues.length; i++) {
            var columnIndex = i + 1;
            var memberFullName = sheet.getRange(dateRowIndex + 2, columnIndex).getValue();
            var role = headerValues[i];

            if (role.indexOf(MEETING_ROLE_SPEACH_TITLE) > -1 ||
                role.indexOf(MEETING_ROLE_SPEACH_PROJECT) > -1 ||
                role.indexOf(MEETING_WORD_OF_THE_DAY) > -1 ||
                role.indexOf(MEETING_THEME) > -1) {
                sheet.getRange(dateRowIndex + 2, columnIndex).setValue('');
            } else {
                if (memberFullName) {
                    var memberInfo = getMemberInfo(MEMBERS_HEADER_FULLNAME, memberFullName);
                    sendMemberCanceledRoleMessage(memberInfo, date, role);
                }
                sheet.getRange(dateRowIndex + 2, columnIndex).setValue(MEETING_CANCEL_SYMBOL + reason);
            }
        }
    }
}

function updateMeetingInfo(date, setHeader, setValue, updateOnlyIfFree) {
    var sheet = SpreadsheetApp.openById(databaseSpreadSheetId).getSheetByName(SHEET_MEETINGS);
    var headerValues = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

    var dateColumnIndex = headerValues.findIndex(MEETING_HEADER_DATE) + 1;
    var setColumnIndex = headerValues.findIndex(setHeader) + 1;

    if (setColumnIndex == 0) {
        return false;
    }

    var dateValues = sheet.getRange(2, dateColumnIndex, sheet.getLastRow(), 1).getValues();
    var dateRowIndex = -1;

    var oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    for (var i = 0; i < dateValues.length; i++) {
        var date2 = new Date(dateValues[i]);

        if (date2 < oneWeekAgo) {
            continue;
        }

        var date1 = typeof date.getMonth === 'function' ? date : parseDate(date);

        if (date1.getYear() == date2.getYear() &&
            date1.getMonth() == date2.getMonth() &&
            date1.getDate() == date2.getDate()) {
            dateRowIndex = i;
            break;
        }
    }

    if (dateRowIndex > -1) {
        var value = sheet.getRange(dateRowIndex + 2, setColumnIndex).getValue();
        if (!updateOnlyIfFree || !value || (value && value[0] == MEETING_CANCEL_SYMBOL)) {
            sheet.getRange(dateRowIndex + 2, setColumnIndex).setValue(setValue);
            return true;
        } else {
            return false;
        }
    }
}

function getMeetingProgramRoles(date) {
    var sheet = SpreadsheetApp.openById(databaseSpreadSheetId).getSheetByName(SHEET_MEETINGS);

    var headerValues = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var toastmasterColumnIndex = headerValues.findIndex(MEETING_ROLE_TOASTMASTER) + 1;
    var dateColumnIndex = headerValues.findIndex(MEETING_HEADER_DATE) + 1;
    var rolesValues = [];

    var values = sheet.getRange(1, dateColumnIndex, sheet.getLastRow(), sheet.getLastColumn()).getValues();
    var meetingDate = parseDate(date);
    var roles = [];

    var wordOfTheDay = '';
    var meetingTheme = '';
    var meetingAbout = '';

    var toastmasterRole = null;
    var grammarianRole = null;

    for (var i = 0; i < values.length; i++) {
        var row = values[i];

        var parsedDate = parseDate(row[0]);

        if (meetingDate.getYear() == parsedDate.getYear() &&
            meetingDate.getMonth() == parsedDate.getMonth() &&
            meetingDate.getDate() == parsedDate.getDate()) {

            for (var k = 1; k < row.length; k++) {
                var role = {};
                role.name = values[0][k];
                role.member = row[k] ? row[k] : '';

                if (role.name.indexOf(MEETING_ROLE_SPEACH_PROJECT) > -1 ||
                    role.name.indexOf(MEETING_ROLE_SPEACH_TITLE) > -1) {
                    //MEETING_ABOUT
                    //MEETING_WORD_OF_THE_DAY
                    //MEETING_THEME
                    continue;
                }

                if (role.name.indexOf(MEETING_ROLE_TOASTMASTER) > -1) {
                    toastmasterRole = role;
                }

                if (role.name.indexOf(MEETING_ROLE_GRAMMARIAN) > -1) {
                    grammarianRole = role;
                }

                if (role.name.indexOf(MEETING_THEME) > -1) {
                    toastmasterRole.theme = role.member;
                }

                if (role.name.indexOf(MEETING_WORD_OF_THE_DAY) > -1) {
                    grammarianRole.wordOfTheDay = role.member;
                }

                if (role.name.indexOf(MEETING_ROLE_SPEACH) > -1) {
                    role.speachProject = row[k + 1];
                    role.speachTitle = row[k + 2];
                }

                if (role.name) {
                    roles.push(role);
                }
            }

            break;
        }
    }

    return roles;
}

function getMeetingRoles(date, showCanceledRoles) {
    var sheet = SpreadsheetApp.openById(databaseSpreadSheetId).getSheetByName(SHEET_MEETINGS);

    var headerValues = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var toastmasterColumnIndex = headerValues.findIndex(MEETING_ROLE_TOASTMASTER) + 1;
    var dateColumnIndex = headerValues.findIndex(MEETING_HEADER_DATE) + 1;
    var rolesValues = [];

    headerValues = sheet.getRange(1, toastmasterColumnIndex, 1, sheet.getLastColumn()).getValues()[0];

    // If date is not valid - show all available roles
    if (date) {
        var dateValues = sheet.getRange(2, dateColumnIndex, sheet.getLastRow(), 1).getValues();
        var dateRowIndex = -1;

        for (var i = dateValues.length - 1; i >= 0; i--) {
            var date1 = typeof date.getMonth === 'function' ? date : parseDate(date);
            var date2 = new Date(dateValues[i]);
            if (date1.getYear() == date2.getYear() &&
                date1.getMonth() == date2.getMonth() &&
                date1.getDate() == date2.getDate()) {
                dateRowIndex = i;
                break;
            }
        }

        if (dateRowIndex == -1) {
            throw "Date row wasn't found!";
        }

        rolesValues = sheet.getRange(dateRowIndex + 2, toastmasterColumnIndex, 1, sheet.getLastColumn()).getValues()[0];
    }

    var roles = [];

    for (var i = 0; i < headerValues.length; i++) {
        var role = headerValues[i];

        if (role &&
            role.indexOf(MEETING_ROLE_SPEACH_PROJECT) == -1 &&
            role.indexOf(MEETING_ROLE_SPEACH_TITLE) == -1 &&
            role.indexOf(MEETING_ABOUT) == -1 &&
            role.indexOf(MEETING_THEME) == -1 &&
            role.indexOf(MEETING_WORD_OF_THE_DAY) == -1) {
            if (rolesValues.length == 0 || !rolesValues[i] || (showCanceledRoles && rolesValues[i][0] == MEETING_CANCEL_SYMBOL)) {
                var role = role.replace(" №1", "").replace(" №2", "").replace(" №3", "").replace(" №4", "");
                if (roles.indexOf(role) == -1) {
                    roles.push(role);
                }
            }
        }
    }

    return roles;
}

function getAvailableRoleDates(role, showCanceledRoles) {

    var sheet = SpreadsheetApp.openById(databaseSpreadSheetId).getSheetByName(SHEET_MEETINGS);

    var headerValues = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var dateColumnIndex = headerValues.findIndex(MEETING_HEADER_DATE) + 1;
    headerValues = sheet.getRange(1, dateColumnIndex, 1, sheet.getLastColumn()).getValues()[0];
    var nextMeetingDate = getNextMeetingDate();
    var values = sheet.getRange(2, dateColumnIndex, sheet.getLastRow(), sheet.getLastColumn()).getValues();

    if (sheet.getLastRow() > SIGN_UP_FOR_NEXT_MEETINGS_AMOUNT) {
        var dateToCheck = sheet.getRange((sheet.getLastRow() + 1) - SIGN_UP_FOR_NEXT_MEETINGS_AMOUNT, dateColumnIndex).getValue();
        dateToCheck = new Date(dateToCheck.getTime() + ((MEETING_TIME * 60 + MEETING_DURATION_MINUTES) * 60000));

        if (dateToCheck - nextMeetingDate != 0) {
            getNextMeetingDates(SIGN_UP_FOR_NEXT_MEETINGS_AMOUNT);
        }
    } else {
        getNextMeetingDates(SIGN_UP_FOR_NEXT_MEETINGS_AMOUNT);
    }

    var availableDates = [];

    var roleSpeachHeaderIndexes = [];

    for (var i = 0; i < headerValues.length; i++) {
        if (headerValues[i].indexOf(role) > -1) {
            roleSpeachHeaderIndexes.push(i);
        }
    }

    if (!roleSpeachHeaderIndexes.length) {
        return;
    }

    for (var i = values.length - 1; i >= 0; i--) {
        if (!values[i][0]) continue;

        var date = parseDate(values[i][0]);
        date = new Date(date.getTime() + ((MEETING_TIME * 60 + MEETING_DURATION_MINUTES) * 60000));

        if (date >= nextMeetingDate) {
            for (var j = 0; j < roleSpeachHeaderIndexes.length; j++) {
                var roleSpeachIndex = roleSpeachHeaderIndexes[j];

                if (!values[i][roleSpeachIndex] || values[i][roleSpeachIndex] && (showCanceledRoles && values[i][roleSpeachIndex][0] == MEETING_CANCEL_SYMBOL)) {
                    availableDates.unshift(formatDate(date));
                    break;
                }
            }
        } else {
            break;
        }
    }

    return availableDates;
}

function getMeetingInfo(date, header) {
    var roles = getMeetingProgramRoles(parseDate(date));
    var about = '';
    for (var i = 0; i < roles.length; i++) {
        var role = roles[i];
        if (role.name == header) {
            return role.member;
        }
    }
}

function getNextMeetingDates(amount) {

    var sheet = SpreadsheetApp.openById(databaseSpreadSheetId).getSheetByName(SHEET_MEETINGS);

    var headerValues = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var dateColumnIndex = headerValues.findIndex(MEETING_HEADER_DATE) + 1;

    var lastDate = parseDate(sheet.getRange(sheet.getLastRow(), dateColumnIndex).getValue());
    lastDate = new Date(lastDate.getTime() + ((MEETING_TIME * 60 + MEETING_DURATION_MINUTES) * 60000));
    var nextMeetingDate = getNextMeetingDate();

    var meetings = []
    var meetingsToInsert = [];

    meetings.push(formatDate(nextMeetingDate));

    for (var i = 0; i < amount - 1; i++) {
        var date = nextMeetingDate.addDays((i + 1) * 7);
        meetings.push(formatDate(date));

        if (date > lastDate) {
            meetingsToInsert.push([formatDate(date)]);
        }
    }

    if (meetingsToInsert.length) {
        sheet.insertRowsAfter(sheet.getLastRow(), meetingsToInsert.length);
        sheet.getRange(sheet.getLastRow() + 1, dateColumnIndex, meetingsToInsert.length, 1).setValues(meetingsToInsert);
    }

    return meetings;
}

function isRoleDuplicated(fullName, meetingDate, role) {
    var sheet = SpreadsheetApp.openById(databaseSpreadSheetId).getSheetByName(SHEET_MEETINGS);
    var headerValues = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var dateColumnIndex = headerValues.findIndex(MEETING_HEADER_DATE) + 1;
    var lastRow = sheet.getLastRow() - 1;
    var values = sheet.getRange(2, dateColumnIndex, lastRow, sheet.getLastColumn()).getValues();
    var roleColumnIndexes = [];
    var meetingRowIndex = 0;

    var meetingDateFormatted = formatDate(parseDate(meetingDate));
    for (var i = values.length - 1; i >= 0; i--) {
        if (formatDate(parseDate(values[i][0])) == meetingDateFormatted) {
            meetingRowIndex = lastRow - (values.length - i);
            break;
        }
    }

    for (var i = 0; i < headerValues.length; i++) {
        if (headerValues[i].indexOf(role) > -1) {
            roleColumnIndexes.push(i - dateColumnIndex + 1);
        }
    }

    if (!meetingRowIndex || !roleColumnIndexes.length) {
        return null;
    }

    for (var i = 0; i < roleColumnIndexes.length; i++) {
        for (var j = 1; j <= +MEETINGS_AMOUNT_WHERE_ROLE_NOT_DUPLICATES; j++) {
            if (meetingRowIndex - j >= 0 && values[meetingRowIndex - j][roleColumnIndexes[i]].indexOf(fullName) > -1) {
                var nextAvailableDate = formatDate(parseDate(meetingDate).addDays((MEETINGS_AMOUNT_WHERE_ROLE_NOT_DUPLICATES - j + 1) * 7));
                var duplicate = {
                    date: formatDate(parseDate(values[meetingRowIndex - j][0])),
                    availableDate: nextAvailableDate,
                    isFuture: false
                };
                return duplicate;
            } else if (meetingRowIndex + j < values.length && values[meetingRowIndex + j][roleColumnIndexes[i]].indexOf(fullName) > -1) {
                var nextAvailableDate = formatDate(parseDate(values[meetingRowIndex + j][0]).addDays((MEETINGS_AMOUNT_WHERE_ROLE_NOT_DUPLICATES + 1) * 7));
                var duplicate = {
                    date: formatDate(parseDate(values[meetingRowIndex + j][0])),
                    availableDate: nextAvailableDate,
                    isFuture: true
                };
                return duplicate;
            }
        }
    }

    return false;
}

function isEnoughAmountOfSpeeches(fullName, role, meetingDate) {
    var sheet = SpreadsheetApp.openById(databaseSpreadSheetId).getSheetByName(SHEET_MEETINGS);
    var headerValues = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var dateColumnIndex = headerValues.findIndex(MEETING_HEADER_DATE);
    var lastRow = sheet.getLastRow() - 1;
    var values = sheet.getRange(2, 1, lastRow, sheet.getLastColumn()).getValues();

    var sufficientAmount = (role == MEETING_ROLE_EVALUATION || role == MEETING_ROLE_TABLE_TOPIC_EVALUATOR) ? MINIMUM_SPEECHES_FOR_EVALUATION :
        (role == MEETING_ROLE_TOASTMASTER) ? MINIMUM_SPEECHES_FOR_TOASTMASTER :
        (role == MEETING_ROLE_TABLE_TOPIC_MASTER) ? MINIMUM_SPEECHES_FOR_TABLE_TOPIC : 0;
    if (!sufficientAmount) {
        return true;
    }

    var speechColumnIndexes = [];

    for (var i = 0; i < headerValues.length; i++) {
        if (headerValues[i].indexOf(MEETING_ROLE_SPEACH) > -1) {
            speechColumnIndexes.push(i + 1);
        }
    }

    var speechesMade = 0;

    for (var i = 0; i < speechColumnIndexes.length; i++) {
        for (var j = 0; j < values.length; j++) {
            if (!(parseDate(meetingDate) - parseDate(values[j][dateColumnIndex]))) {
                break;
            }
            if (values[j][speechColumnIndexes[i] - 1].indexOf(fullName) > -1) {
                speechesMade++;
            }
            if (speechesMade == sufficientAmount) {
                return true;
            }
        }
    }
    return false;
}