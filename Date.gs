Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
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

function monthsBetweenTwoDates(d1, d2) {
        var d1Y = d1.getFullYear();
        var d2Y = d2.getFullYear();
        var d1M = d1.getMonth();
        var d2M = d2.getMonth();

        return (d1M+12*d1Y)-(d2M+12*d2Y);
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