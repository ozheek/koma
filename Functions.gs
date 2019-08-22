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