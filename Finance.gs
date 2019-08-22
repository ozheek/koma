var SHEET_FINANCE = "Скарбниця";

/* МЕНЮ */
var FINANCE = "💵 Фінанси";
var FINANCE_IN = "Отримали кошти";
var FINANCE_OUT = "Витратили кошти";
var FINANCE_TRANSFER = "Передати кошти";
var FINANCE_BALANCE = "Показати баланс";

/* СПИСКИ */
var FINANCE_LISTS_TYPE = 'Типи фінансових операцій'
var FINANCE_LISTS_TYPE_TRANSFER = "Передача коштів";
var FINANCE_LISTS_TYPE_MEMBERSHIP = "Членство";
var FINANCE_LISTS_TYPE_MEMBERSHIP_TM = "Членство в ТМ";
var FINANCE_LISTS_TYPE_LIBRARY = "Бібліотека";

/* ЗАГОЛОВКИ БАЗИ ДАННИХ */
var FINANCE_HEADER_DATE = "Дата";
var FINANCE_HEADER_TYPE = "Тип операції";
var FINANCE_HEADER_DESCRIPTION = "Опис операції";
var FINANCE_HEADER_MEMBER = "Член клубу";
var FINANCE_HEADER_PROCESSED_BY = "Хто провів операцію";
var FINANCE_HEADER_AMOUNT = "Сума (грн)";

/* ТЕКСТИ */
var FINANCE_NO_DESCRIPTION = "Опису немає";

var FINANCE_WRONG_AMOUNT = "Введена вами сума '{0}' не є числом, введіть суму ще раз:";

var FINANCE_TRANSFER_DESCRIPTION = 'Передача кошти від члена клубу {0} члену клуба {1}';
var FINANCE_TRANSFER_SUCCESS = 'Дякую, записав, що ви передали {0}грн {1}! 😍';
var FINANCE_TRANSFER_AMOUNT = 'Яку суму (грн) ви передаєте {0}?';
var FINANCE_TRANSFER_START = 'Оберіть члена клубу, якому ви передаєте кошти?';

var FINANCE_OUT_TM_SUCCESS = 'Дякую, записав, що витрачено на сплату в ТМ {0}грн за {1}! 😉';
var FINANCE_OUT_TM_AMOUNT = 'Яка сума (грн) сплачена в ТМ за {0}?';

var FINANCE_OUT_SUCCESS = 'Дякую, записав, що витрачено {0}грн на {1}! 😉';
var FINANCE_OUT_AMOUNT = 'Яка сума (грн)?';
var FINANCE_OUT_MEMBERSHIP = 'Оберіть члена клубу, за якого сплачено членський внесок?';
var FINANCE_OUT_DESCRIPTION = 'Вкажіть опис операції, якщо потрібен:';
var FINANCE_OUT_START= 'На що було потрачено гроші (виберіть з меню або введіть текст)?';

var FINANCE_IN_TM_SUCCESS = 'Дякую, записав, що отримано членський внесок {0}грн від {1}! 😉';
var FINANCE_IN_SUCCESS = 'Дякую, записав, що отримано {0}грн за {1}! 😉';
var FINANCE_IN_AMOUNT = 'Яка сума (грн)?';
var FINANCE_IN_MEMBERSHIP = 'Оберіть члена клубу, що сплатив членський внесок?';
var FINANCE_IN_DESCRIPTION = 'Вкажіть опис операції, якщо потрібен:';
var FINANCE_IN_START = 'За що було отримано гроші (виберіть з меню або введіть текст)?';

var FINANCE_BALANCE_TITLE = "В кого гроші клубу:\r\n\r\n";
var FINANCE_BALANCE_TOTAL = '\r\n<b>Загальний баланс:</b> {0}грн';
var FINANCE_BALANCE_RECORD = '<b>{0}:</b> {1}грн\n';

function showBalancesByMembers(userTelegramId) {
    var balances = getBalancesByMembers();
    var html = FINANCE_BALANCE_TITLE;
    var total = 0;
    for (var key in balances) {
        var balance = balances[key];
        total += 1 * balance;
        if (balance != 0) {
          html += format(FINANCE_BALANCE_RECORD, key, balance);
        }
    }

    html += format(FINANCE_BALANCE_TOTAL, total);

    showMenu(userTelegramId, html);
}

function processFinance(userData, text) {
    if (userData.statuses[2]) {
        if (userData.statuses[2] == FINANCE_TRANSFER) {
            if (userData.statuses[3]) {
                if (!userData.statuses[4]) {
                  if(!isNaN(text)) {
                    var description = format(FINANCE_TRANSFER_DESCRIPTION, userData.fullName ,userData.statuses[3]);
                    insertFinanceData(FINANCE_LISTS_TYPE_TRANSFER, userData.statuses[3], -1 * text, userData.fullName, description);
                    insertFinanceData(FINANCE_LISTS_TYPE_TRANSFER, userData.fullName, text, userData.statuses[3], description);
                    showMenu(userData.telegramId, format(FINANCE_TRANSFER_SUCCESS,text , userData.statuses[3]));
                    return true;
                  }
                  else {
                    showMenu(userData.telegramId, format(FINANCE_WRONG_AMOUNT, text));
                    return false;
                  }
                }
            } else {
                showMenu(userData.telegramId, format(FINANCE_TRANSFER_AMOUNT, text));
                return true;
            }
        } else if (userData.statuses[2] == FINANCE_OUT) {
            if (userData.statuses[3]) {
                if (userData.statuses[3] == FINANCE_LISTS_TYPE_MEMBERSHIP_TM) {
                    if (userData.statuses[4]) {
                      if (!userData.statuses[5]) {
                        if(!isNaN(text)) {
                          // ADD DEBIT BALANCE RECORD
                          var description = '';
                          insertFinanceData(FINANCE_LISTS_TYPE_MEMBERSHIP_TM, userData.statuses[4], -1 * text, userData.fullName, description);
                          showMenu(userData.telegramId, format(FINANCE_OUT_TM_SUCCESS, text, userData.statuses[4]));
                          //showParentManagementMenu(userData);
                          return true;
                        }
                        else {
                          showMenu(userData.telegramId, format(FINANCE_WRONG_AMOUNT, text));
                          return false;
                        }
                      }
                    } else {
                        showMenu(userData.telegramId, format(FINANCE_OUT_TM_AMOUNT, text));
                        return true;
                    }
                } else {
                    if (userData.statuses[4]) {
                      if (!userData.statuses[5]) {
                        if(!isNaN(text)) {
                          // ADD DEBIT BALANCE RECORD
                          var description = userData.statuses[4] == FINANCE_NO_DESCRIPTION ? '' : userData.statuses[4];
                          insertFinanceData(userData.statuses[3], null, -1 * text, userData.fullName, description);
                          showMenu(userData.telegramId, format(FINANCE_OUT_SUCCESS, text, userData.statuses[3]));
                          //showParentManagementMenu(userData);
                          return true;
                        }
                        else {
                          showMenu(userData.telegramId, format(FINANCE_WRONG_AMOUNT, text));
                          return false;
                        }
                      }
                    } else {
                        showMenu(userData.telegramId, FINANCE_OUT_AMOUNT);
                        return true;
                    }

                }
            } else {
                if (text == FINANCE_LISTS_TYPE_MEMBERSHIP || text == FINANCE_LISTS_TYPE_MEMBERSHIP_TM) {
                    showMenu(userData.telegramId, FINANCE_OUT_MEMBERSHIP, getAllMembers());
                    return true;
                } else {
                    showMenu(userData.telegramId, FINANCE_OUT_DESCRIPTION, [FINANCE_NO_DESCRIPTION]);
                    return true;
                }
            }
        } else if (userData.statuses[2] == FINANCE_IN) {
            if (userData.statuses[3]) {
                if (userData.statuses[3] == FINANCE_LISTS_TYPE_MEMBERSHIP_TM || userData.statuses[3] == FINANCE_LISTS_TYPE_MEMBERSHIP) {
                    if (userData.statuses[4]) {
                      if (!userData.statuses[5]) {
                        if(!isNaN(text)) {
                          var description = '';
                          insertFinanceData(userData.statuses[3], userData.statuses[4], text, userData.fullName, description);
                          showMenu(userData.telegramId, format(FINANCE_IN_SUCCESS, text, userData.statuses[3]));
                          return true;
                        }
                        else {
                          showMenu(userData.telegramId, format(FINANCE_WRONG_AMOUNT, text));
                          return false;
                        }
                      }
                    } else {
                      showMenu(userData.telegramId, format(FINANCE_IN_AMOUNT, text));
                        return true;
                    }
                } else {
                    if (userData.statuses[4]) {
                      if (!userData.statuses[5]) {
                        if(!isNaN(text)) {
                          // ADD CREDIT BALANCE RECORD      
                          var description = userData.statuses[4] == FINANCE_NO_DESCRIPTION ? '' : userData.statuses[4];
                          insertFinanceData(userData.statuses[3], null, text, userData.fullName, description);
                          showMenu(userData.telegramId, format(FINANCE_IN_SUCCESS, text, userData.statuses[3]));
                          return true;
                        }
                        else {
                          showMenu(userData.telegramId, format(FINANCE_WRONG_AMOUNT, text));
                          return false;
                        }
                      }
                    } else {
                        showMenu(userData.telegramId, FINANCE_IN_AMOUNT);
                        return true;
                    }

                }
            } else {
                if (text == FINANCE_LISTS_TYPE_MEMBERSHIP || text == FINANCE_LISTS_TYPE_MEMBERSHIP_TM) {
                    showMenu(userData.telegramId, FINANCE_IN_MEMBERSHIP, getAllMembers());
                    return true;
                } else {
                    showMenu(userData.telegramId, FINANCE_IN_DESCRIPTION, [FINANCE_NO_DESCRIPTION]);
                    return true;
                }
            }
        }
    } else {
        if (text == FINANCE_BALANCE) {
            showBalancesByMembers(userData.telegramId);
            return true;
        } else if (text == FINANCE_OUT) {            
            showMenu(userData.telegramId, FINANCE_OUT_START, getFinanceTypes());
            return true;
        } else if (text == FINANCE_IN) {
            showMenu(userData.telegramId, FINANCE_IN_START, getFinanceTypes());
            return true;
        } else if (text == FINANCE_TRANSFER) {
            showMenu(userData.telegramId, FINANCE_TRANSFER_START,
                getAllMembers());
            return true;
        }
    }
}

/* РОБОТА З БАЗОЮ */

function getFinanceTypes()
{
  var items = getListItemsByName(FINANCE_LISTS_TYPE);
  items.remove(FINANCE_LISTS_TYPE_TRANSFER);
  items.remove(FINANCE_LISTS_TYPE_MEMBERSHIP);
  items.remove(FINANCE_LISTS_TYPE_MEMBERSHIP_TM);
  items.unshift(FINANCE_LISTS_TYPE_MEMBERSHIP_TM);
  items.unshift(FINANCE_LISTS_TYPE_MEMBERSHIP);
  return items;
}

function insertFinanceData(type, member, value, processedByMember, description) {
    var sheet = SpreadsheetApp.openById(databaseSpreadSheetId).getSheetByName(SHEET_FINANCE);
    var headerValues = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

    var dateColumnIndex = headerValues.findIndex(FINANCE_HEADER_DATE);
    var typeColumnIndex = headerValues.findIndex(FINANCE_HEADER_TYPE);
    var descriptionColumnIndex = headerValues.findIndex(FINANCE_HEADER_DESCRIPTION);
    var memberColumnIndex = headerValues.findIndex(FINANCE_HEADER_MEMBER);
    var processedByMemberColumnIndex = headerValues.findIndex(FINANCE_HEADER_PROCESSED_BY);
    var valueColumnIndex = headerValues.findIndex(FINANCE_HEADER_AMOUNT);

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
    values[0][processedByMemberColumnIndex] = processedByMember;
    values[0][descriptionColumnIndex] = description;
    values[0][valueColumnIndex] = value;

    insertedRange.setValues(values);
}

function getBalancesByMembers() {
    var sheet = SpreadsheetApp.openById(databaseSpreadSheetId).getSheetByName(SHEET_FINANCE);
    var headerValues = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

    var processedByMemberColumnIndex = headerValues.findIndex(FINANCE_HEADER_PROCESSED_BY);
    var valueColumnIndex = headerValues.findIndex(FINANCE_HEADER_AMOUNT);

    var range = sheet.getRange(2, 1, sheet.getLastRow(), sheet.getLastColumn());
    var values = range.getValues();

    var balances = {};

    for (var i = 0; i < values.length; i++) {
        var rowValues = values[i];

        var processedByMember = rowValues[processedByMemberColumnIndex];
        var value = rowValues[valueColumnIndex];

        if (!balances[processedByMember]) {
            balances[processedByMember] = 0;
        }
        balances[processedByMember] += value;
    }
    return balances;
}