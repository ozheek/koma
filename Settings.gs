// НАЛАШТУВАННЯ СКРИПТА
// FILE -> Spreadsheet settings -> встановити потрібну локаль 
// Поставити трігер на checkLibraryBooksStatusAndSendNotifications, виконання щодня

/* ЗАПУСТИТИ, ЩОБ ВСТАНОВИТИ ТРIГГЕР */

function setRemindTriggers(){
  ScriptApp.newTrigger("checkLibraryBooksStatusAndSendNotifications").timeBased().atHour(16).everyDays(1).inTimezone("Europe/Kiev").create();  
  ScriptApp.newTrigger("sendMeetingNotifications").timeBased().atHour(16).everyDays(1).inTimezone("Europe/Kiev").create();  
}

/* НАЛАШТУВАННЯ */

var CLUB_NAME = 'КОМА';
var FULL_CLUB_NAME = 'Клуб ораторської майстерності "КОМА"';

var MEETING_ON_WEEK_DAY = 4;                          /* Четвер */; // 0 - Неділя, 6 - Субота
var MEETING_TIME = 19;
var MEETING_DURATION_MINUTES = 90;
var TIMEZONE_OFFSET = 180;                            /* 3 години, Київ */; 
var SIGN_UP_FOR_NEXT_MEETINGS_AMOUNT = 12;            /* Можна записатись на наступні 12 засідань */
var MEETINGS_AMOUNT_WHERE_ROLE_NOT_DUPLICATES = 1;    /* Скільки засідань не можна записувати на одну й ту ж саму роль, якщо 1, то на попередньому засіданні користувач не повинен був виконувати таку ж роль */

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

// ВІЦЕ-ПРЕЗИДЕНТ З ОСВІТИ

var VPO_TELEGRAM = "@teb01";