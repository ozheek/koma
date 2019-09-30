var HEADER_DATE = "Дата";

/* ТЕКСТИ */

var ROLES_CONFIRM_MEETING_ASKED_NEXT_OFFICER = 'Дякую за відповідь! Запитав наступного офіцера 😊';
var ROLES_CONFIRM_MEETING_NO_CONFIRMATION = 'Привіт! На жаль, ролі на засіданні <b>{0}</b> ніхто не зміг підтвердити.';
var ROLES_CONFIRM_MEETING_ASK_OFFICER = 'Необхідно підтвердити виконання ролей. Ви були на засіданні {0}?';

function showSignedRoles(userTelegramId, fullName, me) {
    var signedRoles = getSignedRoles(fullName);

    if (!signedRoles) {
        if (me) {
            showMenu(userTelegramId, MEETING_ROLES_NOT_ASSIGNED);
        } else {
            showMenu(userTelegramId, format(MEETING_ROLES_MEMBER_NOT_ASSIGNESD, fullName));
        }
        return true;
    } else {
        if (me) {
            showMenu(userTelegramId, MEETING_ROLES_ASSIGNED_TITLE);
        } else {
            showMenu(userTelegramId, format(MEETING_ROLES_ASSIGNED_MEMBER_TITLE, fullName));
        }
    }

    for (var date in signedRoles) {
        var dateSignedRoles = signedRoles[date];
        var formattedDate = formatDate(new Date(date));
        showMenu(userTelegramId, format(MEETING_ROLES_ASSIGNED_DATE_TITLE, formattedDate));

        for (var i = 0; i < dateSignedRoles.length; i++) {
            var role = dateSignedRoles[i];
            var callbackData = MEETING_ROLE_REJECT_CALLBACK + '___' + formattedDate + '___' + role + '___' + fullName;

            var callbackId = inseertCallback(callbackData);

            var keyBoard = [{
                text: MEETING_ROLE_REJECT,
                callback: callbackId
            }];
            sendText(userTelegramId, role + ', <i>' + formattedDate + '</i>', getMenuInlineKeyBoard(keyBoard));
        }
    }
}

function showMeetingProgramAndCallbacks(userTelegramId, date) {

    showMenu(userTelegramId, MEETING_PROGRAM_TITLE_1);
    showMenu(userTelegramId, format(MEETING_PROGRAM_TITLE_2, date));

    var sheet = SpreadsheetApp.openById(databaseSpreadSheetId).getSheetByName(SHEET_MEETINGS);
    var headerValues = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var dateColumnIndex = headerValues.findIndex(HEADER_DATE) + 1;
    var values = sheet.getRange(1, dateColumnIndex, sheet.getLastRow(), sheet.getLastColumn()).getValues();
    var meetingDate = parseDate(date).getTime();
    var meetingRow;

    for (var i = 1; i < values.length; i++) {
        var row = values[i];
        var currentRowMeetingDate = row[0].getTime();

        if (meetingDate == currentRowMeetingDate) {
            meetingRow = row;
            break;
        }
    }

    if (!meetingRow) {
        sendText(userTelegramId, format(MEETING_NOT_FOUND, date));
        return;
    }

    var callbacksToInsert = [];

    for (var k = 1; k < meetingRow.length; k++) {
        var role = values[0][k];

        if ( /*~role.indexOf(MEETING_ROLE_SPEACH_PROJECT) || ~role.indexOf(MEETING_ROLE_SPEACH_TITLE) || */ ~role.indexOf(MEETING_ABOUT)) {
            continue;
        }

        var member = meetingRow[k];

        if (role) {
            var callbackData = MEETING_ROLE_CHANGE_CALLBACK + '___' + date + '___' + role + '___';
            var callbackId = (new Date()).getTime();
            var time = callbackId;
            callbacksToInsert.push([callbackId, time, callbackData]);
            var keyBoard = [{
                text: MEETING_ROLE_CHANGE,
                callback: callbackId
            }];

            if (member) {
                callbackData = MEETING_ROLE_CLEAN_CALLBACK + '___' + date + '___' + role;
                callbackId = (new Date()).getTime() + 3;
                time = callbackId;
                callbacksToInsert.push([callbackId, time, callbackData]);
                keyBoard.push({
                    text: MEETING_ROLE_EMPTY,
                    callback: callbackId
                });
            }

            var icon = MEETING_ROLE_ICONS[role];
            if (role.indexOf(MEETING_ROLE_SPEACH) > -1) icon = MEETING_ROLE_ICONS[MEETING_ROLE_SPEACH];
            if (role.indexOf(MEETING_ROLE_EVALUATION) > -1) icon = MEETING_ROLE_ICONS[MEETING_ROLE_EVALUATION];
            if (role.indexOf(MEETING_ROLE_SPEACH_PROJECT) > -1) icon = MEETING_ROLE_ICONS[MEETING_ROLE_SPEACH_PROJECT];
            if (role.indexOf(MEETING_ROLE_SPEACH_TITLE) > -1) icon = MEETING_ROLE_ICONS[MEETING_ROLE_SPEACH_TITLE];
            message = icon + " " + format(MEETING_PROGRAM_ROLE_INFO, role, (member ? member : MEETING_PROGRAM_ROLE_EMPTY));

            sendText(userTelegramId, message, getMenuInlineKeyBoardMultiline(keyBoard));
        }
    }
    insertCallbacks(callbacksToInsert);
}

function confirmRolesOfLastMeeting() {
    var lastMeetingDate = getLastMeetingDate();
    findOfficerToConfirmMeetingRoles(formatDate(lastMeetingDate));
}

function findOfficerToConfirmMeetingRoles(date, currentOfficerFullName, userTelegramId) {
    var isNextOfficerFound = false;
    var officers = getAllMembers(MEMBERS_HEADER_POSITION);

    for (var i = 0; i < officers.length; i++) {
        var officer = officers[i];
        if (!currentOfficerFullName || officer == currentOfficerFullName) {
            if (i + 1 < officers.length) {
                // Пропускаємо першого офіцера - це повинен бути президент
                var nextOfficerData = getMemberInfo(MEMBERS_HEADER_FULLNAME, officers[i + 1]);
                askToConfirmMeetingRoles(nextOfficerData.telegramId, date);
                isNextOfficerFound = true;
                break;
            }
        }
    }

    if (!isNextOfficerFound) {
        sendMessageToOfficer(OFFICER_POSITION_PRESIDENT, format(ROLES_CONFIRM_MEETING_NO_CONFIRMATION, date));
    } else {
        if (userTelegramId) {
            sendText(userTelegramId, ROLES_CONFIRM_MEETING_ASKED_NEXT_OFFICER);
        }
    }
}

function askToConfirmMeetingRoles(userTelegramId, date) {
    showMenu(userTelegramId, format(ROLES_CONFIRM_MEETING_ASK_OFFICER, date), [NO, YES]);
    updateMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userTelegramId, MEMBERS_HEADER_TELEGRAM_STATUS, MEETING_ROLES_CONFIRM + '___' + date);
}

/* РОБОТА З БАЗОЮ */

function getSignedRoles(fullName) {
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

    for (var i = 0; i < values.length; i++) {
        if (values[i][0] >= now) {
            var dateRoles = [];
            for (var k = 1; k < values[i].length; k++) {
                if (values[i][k] == fullName) {
                    dateRoles.push(headerValues[k]);
                }
            }
            if (dateRoles.length > 0) {
                roles[values[i][0]] = dateRoles;
                isFoundRole = true;
            }
        }
    }

    if (!isFoundRole) {
        return null;
    }

    return roles;
}