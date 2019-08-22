/* МЕНЮ */
var MAIN_MENU = "📑 Меню";
var GO_BACK = "⬅️ Назад";

/* ОСНОВНЕ МЕНЮ */
var MANAGEMENT_ICON = '📂';
var MANAGEMENT = MANAGEMENT_ICON + ' Управління';


function getMainMenuOptions(userTelegramId) {  
    //var options = [MEETING_SIGN_UP_FOR_ROLE, MEETING_SHOW_MY_ROLES, MEETING_SHOW_PROGRAM, LIBRARY]; //LIBRARY, FINANCE, MEETING
  var options = [MEETING, LIBRARY, CONTACTS]; //LIBRARY, FINANCE, MEETING
              
    var memberInfo = getMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userTelegramId);
    if (memberInfo.fields[MEMBERS_HEADER_POSITION]) {
       options.push(MANAGEMENT);
    }    
  
    return options;
}

function showMainMenu(userTelegramId) {
    showMenu(userTelegramId, "Виберіть операцію:", MAIN_MENU);
}

function getMenuKeyBoard(options, userTelegramId) {
    var keyBoard = '';

    var HOME_MANY_ITEMS_IN_A_LINE = 2;

    if (options) {
        var keyBoard = '[';
        for (var i = 0; i < options.length; i++) {
            var element = options[i];

            keyBoard += '{"text": "' + String(element).replaceAll('"', '\\"') + '"},';

            if ((i + 1) % HOME_MANY_ITEMS_IN_A_LINE == 0) {
                keyBoard = keyBoard.substring(0, keyBoard.length - 1) + '],[';
            }
        }
        if (keyBoard[keyBoard.length - 1] == '[') {
            keyBoard = keyBoard.substring(0, keyBoard.length - 1);
        }
        if (keyBoard[keyBoard.length - 1] == ',' || keyBoard[keyBoard.length - 1] == '[') {
            keyBoard = keyBoard.substring(0, keyBoard.length - 1);
        }
        if (keyBoard[keyBoard.length - 1] != ']') {
            keyBoard += ']';
        }
    }

    var mainMenuOptions = getMainMenuOptions(userTelegramId);
    var returnOptions = '';

    if (!mainMenuOptions.equals(options)) {
        var userData = getMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userTelegramId);

        if (userData) {
            var statuses = userData.statuses;

            if (statuses) {
                if (statuses.length > 0) {
                    if (statuses[0] != REGISTRATION) {

                        returnOptions = '[{"text":"' + GO_BACK + '"}, {"text":"' + MAIN_MENU + '"}';

                        if (statuses.length > 2) {
                            if (statuses[0] == MANAGEMENT) {
                                returnOptions += ',{"text":"' + MANAGEMENT_ICON + ' ' + statuses[1] + '"}';
                            }
                        }


                        returnOptions += ']';

                    }
                }
            }


        }

    }

    if (returnOptions && keyBoard) {
        returnOptions += ',';
    }

    return '{"keyboard":[' + returnOptions + keyBoard + '], "resize_keyboard": true, "one_time_keyboard": false}';

}

function getMenuInlineKeyBoard(options) {
    var keyBoard = '';

    for (var i = 0; i < options.length; i++) {
        var option = options[i];
        var text = option.text;
        var callback = option.callback;

        keyBoard += '[{\
      "text": "' + text + '",\
      "callback_data": "' + callback + '"\
   }],';
    }

    return '{"inline_keyboard":[' + keyBoard.substring(0, keyBoard.length - 1) + ']}';
}

function getMenuInlineKeyBoardMultiline(options) {
    var keyBoard = '';

    for (var i = 0; i < options.length; i++) {
        var option = options[i];
        var text = option.text;
        var callback = option.callback;

        keyBoard += '{\
      "text": "' + text + '",\
      "callback_data": "' + callback + '"\
   },';
    }

    return '{"inline_keyboard":[[' + keyBoard.substring(0, keyBoard.length - 1) + ']]}';
}


function showMenu(userTelegramId, message, options) {
    if (options == MAIN_MENU) {
        updateMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userTelegramId, MEMBERS_HEADER_TELEGRAM_STATUS, "");
        options = getMainMenuOptions(userTelegramId);
    }
    var keyboard = null;

    keyboard = getMenuKeyBoard(options, userTelegramId);
    sendText(userTelegramId, message, keyboard);
}

function hideMenu(userTelegramId, message) {
    sendText(userTelegramId, message, '{"hide_keyboard": true}');
}