// НАЛАШТУВАННЯ СКРИПТА
// FILE -> Spreadsheet settings -> встановити потрібну локаль 
// Поставити трігер на checkLibraryBooksStatusAndSendNotifications, виконання щодня

/* БАЗА ДАННИХ */
var databaseSpreadSheetId = '1SIWh9duMMiaz2UClVM1amuY-Qw29KZuaHm141qI7oaY';

/* TELEGRAM */
var token = "835758828:AAEsPoQzA9qZpVyIZISNWBom2hIeAFJgh_s"; 
var telegramUrl = "https://api.telegram.org/bot" + token;
var webAppUrl = "https://script.google.com/macros/s/AKfycbwA_dXcVLm1-tK-lZKsHZt5eWzE9l57C1Rl_VjOtO5SA876-2og/exec";

/* ЗАПУСТИТИ, ЩОБ ВСТАНОВИТИ ТРIГГЕР */

function setRemindTriggers(){
  var trigger = ScriptApp.newTrigger("checkLibraryBooksStatusAndSendNotifications").timeBased().atHour(16).everyDays(1).inTimezone("Europe/Kiev").create();
  return trigger;
}

/* НАЛАШТУВАННЯ */

var CLUB_NAME = 'КОМА';
var FULL_CLUB_NAME = 'Клуб ораторської майстерності "КОМА"';

var MEETING_ON_WEEK_DAY = 4;                  /* Четвер */; // 0 - Неділя, 6 - Субота
var MEETING_TIME = 19;
var MEETING_DURATION_MINUTES = 90;
var TIMEZONE_OFFSET = 180;                    /* 3 години, Київ */; 
var SIGN_UP_FOR_NEXT_MEETINGS_AMOUNT = "12";  /* Можна записатись на наступні 12 засідань */

/* ТЕКСТИ */

var EMPTY = 'Немає';
var REPLY_SYMBOL = '🔹';
var YES = "Так! 😍";
var NO = "Ні 😔";

/* РОБОЧІ ЗМІННІ */

var SHEET_CALLBACK = "callback";
var TEMPLATE_TEXT_BELOW = '\n——————————\n'; // Використовується коли треба вставити текст в поле вводу і треба обмежити нік каналу від тексту

// ОФІЦЕРСЬКА КОМАНДА

var OFFICER_POSITION_PRESIDENT = "Президент";
var OFFICER_POSITION_VP_EDUCATION = "Віце-президент з освіти";
var OFFICER_POSITION_VP_MEMBERSHIP = "Віце-президент з членства";
var OFFICER_POSITION_VP_PR = "Віце-президент з PR";
var OFFICER_POSITION_SECRETARY = "Секретар";
var OFFICER_POSITION_TREASURE = "Скарбник";
var OFFICER_POSITION_STEWARD = "Розпорядник";
var OFFICER_POSITION_LIBRARIAN = "Бібліотекар";