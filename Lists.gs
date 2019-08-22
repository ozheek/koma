var SHEET_LISTS = 'Списки';

function getListItemsByName(name) {  
  var sheet = SpreadsheetApp.openById(databaseSpreadSheetId).getSheetByName(SHEET_LISTS);
  var headerValues = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  
  var headerIndex = headerValues.findIndex(name);  
  var lastRowIndex = sheet.getLastRow();
  
  var array = sheet.getRange(2, headerIndex + 1, lastRowIndex, 1).getValues();
  var items = [];
  
  for (var i = 0; i < array.length; i++)
  {
    var value = array[i][0];
    if (value && items.indexOf(value) == -1)
    {
      items.push(value);
    }
  }
  //var filtered = array.filter(function (el) {
  //  return el != null && el != '';
  //});
  return items;
}
