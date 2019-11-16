// НАЛАШТУВАННЯ СКРИПТА
// FILE -> Spreadsheet settings -> встановити потрібну локаль 
// Поставити трігер на checkLibraryBooksStatusAndSendNotifications, виконання щодня

/* ЗАПУСТИТИ, ЩОБ ВСТАНОВИТИ ТРIГГЕР */

function setRemindTriggers(){
  ScriptApp.newTrigger("checkLibraryBooksStatusAndSendNotifications").timeBased().atHour(16).everyDays(1).inTimezone("Europe/Kiev").create();  
  ScriptApp.newTrigger("sendMeetingNotifications").timeBased().atHour(16).everyDays(1).inTimezone("Europe/Kiev").create();   
  ScriptApp.newTrigger("deleteExpiredCallbacks").timeBased().atHour(05).everyDays(7).inTimezone("Europe/Kiev").create();  
  ScriptApp.newTrigger("checkProgramBeforeMeeting").timeBased().everyHours(2).inTimezone("Europe/Kiev").create();  
  ScriptApp.newTrigger("checkMembershipAndSendNotifications").timeBased().everyWeeks(2).onWeekDay(ScriptApp.WeekDay.TUESDAY).atHour(18).inTimezone("Europe/Kiev").create();
  ScriptApp.newTrigger("searchUnfinishedRegistrationsAndNotifyUsers").timeBased().atHour(14).everyDays(1).inTimezone("Europe/Kiev").create();
}

/* НАЛАШТУВАННЯ */

var CLUB_NAME = 'КОМА';
var FULL_CLUB_NAME = 'Клуб ораторської майстерності "КОМА"';
var CLUB_EMAIL_ADDRESS = 'komaukraine@gmail.com';

var MEETING_ON_WEEK_DAY = 4;                          /* Четвер */; // 0 - Неділя, 6 - Субота
var MEETING_TIME = 19;
var MEETING_DURATION_MINUTES = 90;
var TIMEZONE_OFFSET = 180;                            /* 3 години, Київ */; 
var SIGN_UP_FOR_NEXT_MEETINGS_AMOUNT = 12;            /* Можна записатись на наступні 12 засідань */

var MESSAGES_EMAIL_SUBJECT = 'Клуб ораторської майстерності "КОМА"';

/* ОБМЕЖЕННЯ ДЛЯ РОЛЕЙ */
var MEETINGS_AMOUNT_WHERE_ROLE_NOT_DUPLICATES = 1;    /* Скільки засідань не можна записувати на одну й ту ж саму роль, якщо 1, то на попередньому засіданні користувач не повинен був виконувати таку ж роль */

var MINIMUM_SPEECHES_FOR_TOASTMASTER = 3; /* Потрібно виконати мінімум 3 промови для того, щоб бути головою */
var MINIMUM_SPEECHES_FOR_TABLE_TOPIC = 2;
var MINIMUM_SPEECHES_FOR_EVALUATION = 4;

/* ТЕКСТИ */

var EMPTY = 'Немає';
var REPLY_SYMBOL = '🔹';
var YES = "Так! 😍";
var NO = "Ні 😔";

var CALLNAME_GENERAL = 'вас';

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

/* БІБЛІОТЕКА */
var LIBRARY_BOOK_FEE = 10; // 10грн
var LIBRARY_RESERVATION_DAYS = 7; // 7днів
var LIBRARY_DAYS_BEFORE_RETURN = 3; // 3 дні
var LIBRARY_REMIND_RETURN_FREQUENCY = 7; // 7 днів

/* ЧЛЕНСТВО */

var MONTHLY_MEMBERSHIP_FEE = '150'; // 150 UAH
var MONTHLY_MEMBERSHIP_FEE_TM = '225'; // 225 UAH
var DAYS_BEFORE_REMOVED_MEMBERSHIP = '60';
var TRIAL_PERIOD_TO_PAY_MONTHS = 2; // якщо користувач заплатить протягом 2х місяців, то йому членство продовжиться з останньої дати оплати
var DAY_IN_MONTH_FROM_WHICH_DISCOUNT_APLIED = 15; // з якого дня в місця коли членство зараховується вже з наступного місяця
  
// РЕЄСТРАЦІЯ

var REGISTRATION_DAYS_BEFORE_ASK = '2'; // 2 днi

// ВІЦЕ-ПРЕЗИДЕНТ З ОСВІТИ

var VPO_TELEGRAM = "@teb01";