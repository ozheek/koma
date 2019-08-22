Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

function currentDate()
{
  var oldDateTime = new Date();
  var newDateTime = new Date(oldDateTime.getTime() + (60000 * (oldDateTime.getTimezoneOffset() - (-1 * TIMEZONE_OFFSET))));
  
  return newDateTime;
}

function shortDate(date)
{
  return date.toISOString().slice(0, 10);
}

function formatDate(date) {
  var month = '' + (date.getMonth() + 1);
  var day = '' + date.getDate();
  var year = date.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [day, month, year].join('-');
}

function parseDate(date)
{
  if (typeof date.getMonth === 'function')
  {
    return date;
  }
    
  var values = date.split('-');
  return new Date(values[2], values[1] - 1, values[0]);
}