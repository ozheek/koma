var SHEET_INVENTORY = 'Інвентаризація';

/* МЕНЮ */
var INVENTORY = '📦 Інвентаризація';
var INVENTORY_OUT = 'Витратити';
var INVENTORY_IN = 'Додати';
var INVENTORY_TRANSFER = 'Передати';
var INVENTORY_BALANCE = "Показати баланс";

/* СПИСКИ */
var INVENTORY_LISTS_TYPE = 'Майно';

/* ЗАГОЛОВКИ БАЗИ ДАННИХ */
var INVENTORY_HEADER_DATE = "Дата";
var INVENTORY_HEADER_TYPE = "Майно";
var INVENTORY_HEADER_DESCRIPTION = "Опис";
var INVENTORY_HEADER_MEMBER = "Член клубу";
var INVENTORY_HEADER_AMOUNT = "Кількість";

/* ТЕКСТИ */
var INVENTORY_NO_DESCRIPTION = "Опису немає";

var INVENTORY_TRANSFER_DESCRIPTION = 'Передача майна від члена клубу {0} члену клуба {1}';
var INVENTORY_TRANSFER_SUCCESS = 'Дякую, записав, що ви передали {0}шт {1} {2}! 😍';
var INVENTORY_TRANSFER_AMOUNT = 'Яку кількість {0} ви передаєте?';
var INVENTORY_TRANSFER_TYPE = 'Виберіть або введіть назву того, що ви передаєте?';
var INVENTORY_TRANSFER_START = 'Оберіть члена клубу, якому ви передаєте майно?';

var INVENTORY_WRONG_AMOUNT = 'Не правильно вказано кількість. Спробуйте ще раз.'; 

var INVENTORY_OUT_SUCCESS = 'Дякую, записав, що витрачено {0}шт {1}! 😉';
var INVENTORY_OUT_AMOUNT = 'Яку кількість ви витрачаєте?';
var INVENTORY_OUT_DESCRIPTION = 'Вкажіть опис майна, що витрачаєте (якщо потрібен):';
var INVENTORY_OUT_START = 'Що ви хочете витратити?';

var INVENTORY_IN_AMOUNT = 'Яку кількість ви додаєте?';
var INVENTORY_IN_SUCCESS = 'Дякую, записав, що додано {0}шт {1}! 😉';
var INVENTORY_IN_DESCRIPTION = 'Вкажіть опис майна, що додаєте (якщо потрібен):';
var INVENTORY_IN_START = 'Що ви отримали?';

var INVENTORY_BALANCE_TITLE = "<b>В кого яке майно клубу:</b>\r\n\r\n";
var INVENTORY_BALANCE_MEMBER = '<b>{0}</b>\n';
var INVENTORY_BALANCE_RECORD = '{0}: {1}\n';

function showInventoryBalance(userTelegramId) {
    var balanceByMembers = getInventoryBalances();
    var html = INVENTORY_BALANCE_TITLE;
  
    for (var memberName in balanceByMembers) {
        var member = balanceByMembers[memberName];
        //var total = 0;
      
        html += format(INVENTORY_BALANCE_MEMBER, (memberName ? memberName : CLUB_NAME));
        for (var type in member) {
            var balance = member[type];
            //total += 1 * balance;
            html += format(INVENTORY_BALANCE_RECORD, type, balance);
        }
        html += '\n';
    }

    showMenu(userTelegramId, html);
}

function processInventory(userData, text) {
    if (userData.statuses[2]) {
        if (userData.statuses[2] == INVENTORY_TRANSFER) {
            if (userData.statuses[3]) {
                if (userData.statuses[4]) {
                    if (!userData.statuses[5]) {
                      if(!isNaN(text)) {
                        var description = format(INVENTORY_TRANSFER_DESCRIPTION, userData.fullName, userData.statuses[3]);
                        insertInventoryData(userData.statuses[4], userData.fullName, -1 * text, description);
                        insertInventoryData(userData.statuses[4], userData.statuses[3], text, description);
                        showMenu(userData.telegramId, format(INVENTORY_TRANSFER_SUCCESS, text, userData.statuses[4], userData.statuses[3]));
                        return true;
                      }
                      else {
                        showMenu(userData.telegramId, format(INVENTORY_WRONG_AMOUNT, text));
                        return false;
                      }
                    }
                } else {
                    showMenu(userData.telegramId, format(INVENTORY_TRANSFER_AMOUNT, text));
                    return true;
                }
            } else {
                showMenu(userData.telegramId, INVENTORY_TRANSFER_TYPE, getListOfInventoryTypes());
                return true;
            }
        } else if (userData.statuses[2] == INVENTORY_OUT) {
            if (userData.statuses[3]) {
                if (userData.statuses[4]) {
                    if (!userData.statuses[5]) {
                      if(!isNaN(text)) {
                        var description = userData.statuses[4] == INVENTORY_NO_DESCRIPTION ? '' : userData.statuses[4];
                        insertInventoryData(userData.statuses[3], userData.fullName, -1 * text, description);
                        showMenu(userData.telegramId, format(INVENTORY_OUT_SUCCESS, text, userData.statuses[3]));
                        //showParentManagementMenu(userData);
                        return true;
                      }
                      else {
                        showMenu(userData.telegramId, format(INVENTORY_WRONG_AMOUNT, text));
                        return false;
                      }
                    }
                } else {
                    showMenu(userData.telegramId, INVENTORY_OUT_AMOUNT);
                    return true;
                }

            } else {
                showMenu(userData.telegramId, INVENTORY_OUT_DESCRIPTION, [INVENTORY_NO_DESCRIPTION]);
                return true;
            }
        } else if (userData.statuses[2] == INVENTORY_IN) {
            if (userData.statuses[3]) {
                if (userData.statuses[4]) {
                    if (!userData.statuses[5]) {
                      if(!isNaN(text)) {
                        var description = userData.statuses[4] == INVENTORY_NO_DESCRIPTION ? '' : userData.statuses[4];
                        insertInventoryData(userData.statuses[3], userData.fullName, text, description);
                        showMenu(userData.telegramId, format(INVENTORY_IN_SUCCESS, text, userData.statuses[3]));
                        return true;
                      }
                      else {
                        showMenu(userData.telegramId, format(INVENTORY_WRONG_AMOUNT, text));
                        return false;
                      }
                    }
                } else {
                    showMenu(userData.telegramId, INVENTORY_IN_AMOUNT);
                    return true;
                }
            } else {
                showMenu(userData.telegramId, INVENTORY_IN_DESCRIPTION, [INVENTORY_NO_DESCRIPTION]);
                return true;
            }
        }
    } else {
        if (text == INVENTORY_BALANCE) {
            showInventoryBalance(userData.telegramId);
            return true;
        } else if (text == INVENTORY_OUT) {
            showMenu(userData.telegramId, INVENTORY_OUT_START, getListOfInventoryTypes());
            return true;
        } else if (text == INVENTORY_IN) {
            showMenu(userData.telegramId, INVENTORY_IN_START, getListOfInventoryTypes());
            return true;
        } else if (text == INVENTORY_TRANSFER) {
            showMenu(userData.telegramId, INVENTORY_TRANSFER_START,
                getAllMembers());
            return true;
        }
    }
}

/* РОБОТА З БАЗОЮ */

function getListOfInventoryTypes()
{
    var sheet = SpreadsheetApp.openById(databaseSpreadSheetId).getSheetByName(SHEET_INVENTORY);
    var headerValues = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

    var typeColumnIndex = headerValues.findIndex(INVENTORY_HEADER_TYPE);
  
    var range = sheet.getRange(2, typeColumnIndex + 1, sheet.getLastRow(), 1);
    var values = range.getValues();
  
    var items = getListItemsByName(INVENTORY_LISTS_TYPE);

    for(var i = 0; i < values.length; i++)
    {
      if (items.indexOf(values[i][0]) == -1)
      {        
        items.push(values[i][0]);
      }
    }
 
    return items;
}

function insertInventoryData(type, member, value, description) {

    var sheet = SpreadsheetApp.openById(databaseSpreadSheetId).getSheetByName(SHEET_INVENTORY);
    var headerValues = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

    var dateColumnIndex = headerValues.findIndex(INVENTORY_HEADER_DATE);
    var typeColumnIndex = headerValues.findIndex(INVENTORY_HEADER_TYPE);
    var descriptionColumnIndex = headerValues.findIndex(INVENTORY_HEADER_DESCRIPTION);
    var memberColumnIndex = headerValues.findIndex(INVENTORY_HEADER_MEMBER);
    var valueColumnIndex = headerValues.findIndex(INVENTORY_HEADER_AMOUNT);

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

    values[0][dateColumnIndex] = shortDate(new Date());
    values[0][typeColumnIndex] = type;
    values[0][memberColumnIndex] = member;
    values[0][descriptionColumnIndex] = description;
    values[0][valueColumnIndex] = value;

    insertedRange.setValues(values);
}

function getInventoryBalances() {
    var sheet = SpreadsheetApp.openById(databaseSpreadSheetId).getSheetByName(SHEET_INVENTORY);
    var headerValues = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

    var memberColumnIndex = headerValues.findIndex(INVENTORY_HEADER_MEMBER);
    var typeColumnIndex = headerValues.findIndex(INVENTORY_HEADER_TYPE);
    var valueColumnIndex = headerValues.findIndex(INVENTORY_HEADER_AMOUNT);

    var range = sheet.getRange(2, 1, sheet.getLastRow(), sheet.getLastColumn());
    var values = range.getValues();

    var balances = {};

    for (var i = 0; i < values.length; i++) {
        var rowValues = values[i];

        var member = rowValues[memberColumnIndex];
        var type = rowValues[typeColumnIndex];
        var value = rowValues[valueColumnIndex];

        if (type) {
            if (!balances[member]) {
              balances[member] = {};
            }
          
            if (!balances[member][type]) {
              balances[member][type] = 0;
            }
            
            balances[member][type] += value;         
        }
    }
    return balances;
}