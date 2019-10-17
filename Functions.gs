function format() {
    var theString = arguments[0];

    for (var i = 1; i < arguments.length; i++) {
        var regEx = new RegExp("\\{" + (i - 1) + "\\}", "gm");
        theString = theString.replace(regEx, arguments[i]);
    }

    return theString;
}

function getCallName(name)
{
  var data = {
    method: "post",
    payload: {
      words: name,
      language: 'ua'
    }
  };
  
  var url = 'http://namecaselib.com/ua/case-ua/' + encodeURIComponent(name) + '/';
  var html = UrlFetchApp.fetch(url, data).getContentText();
  var startIndex = html.lastIndexOf(">К. ") + 4;
  var endIndex = html.indexOf("<", startIndex);
  var callName = html.substring(startIndex, endIndex);
            
  return callName;
}

function capitalizeFirstLetter(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

String.prototype.escapeSpecialChars = function() {
    return this.replace(/'/g, "\\'")
               .replace(/"/g, '\\"');
};

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}


function isCyrillic(str) 
{
  for (var i = 0; i < str.length; i++) 
  {
    var symbolCode = str.charCodeAt(i);
    
    if (!(symbolCode >= 1025 && symbolCode <= 1170 || symbolCode == 39 || symbolCode == 45 || symbolCode == 32)) 
    {
      return false;
    }
  }
  return true;
}


function addNewRowAndKeepFormulas(sheet, values) 
{
  var lastRow = sheet.getLastRow(); 
  var lastColumn = sheet.getLastColumn();
  var lastRange = sheet.getRange(lastRow,1,1,lastColumn);
  
  sheet.insertRowsAfter(lastRow, 1);
  
  var insertedRange = sheet.getRange(lastRow + 1, 1, 1, lastColumn);
  
  lastRange.copyTo(insertedRange, {contentsOnly:false});
  
  var formulas = insertedRange.getFormulas();
  
  insertedRange.clearContent();
  insertedRange.setValues(values);
  
  for(var i = 0; i < formulas[0].length; i++){
    var formula = formulas[0][i];
    
    if(formula){
      var cell = sheet.getRange(lastRow + 1, i + 1);
      
      cell.setFormula(formula);
    }
  } 
}

function removeTemplateTextBelow(text)
{
  if (text[0] == '@') {
    var templateIndex = text.indexOf(TEMPLATE_TEXT_BELOW)
    if (templateIndex > -1) {
      text = text.substring(templateIndex + TEMPLATE_TEXT_BELOW.length).trim();
    }
  }
  return text;
}

