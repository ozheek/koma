var SHEET_LIBRARY = 'Бібліотека';
var SHEET_LIBRARY_HISTORY = 'Бібліотека (Історія)';

/* МЕНЮ */
var LIBRARY = '📚 Бібліотека';
var LIBRARY_GIVE_BOOK = 'Видати книгу';
var LIBRARY_RETURN_BOOK = 'Повернути книгу';
var LIBRARY_TAKE_BOOK = 'Взяти книгу';
var LIBRARY_ADD_BOOK = 'Додати книгу';
var LIBRARY_SHOW_LIST = 'Показати список книг';
var LIBRARY_SHOW_RULES = 'Правила користування бібліотекою';

/* ТЕКСТИ */
var LIBRARY_LIST = '<b>Список книг в бібліотеці:</b>\n\n';
var LIBRARY_LIST_BEST_RATING = ', {0} 🤩'; // Супер рейтинг
var LIBRARY_LIST_RATING = ', {0} ⭐'; // Рейтинг
var LIBRARY_LIST_GENRE = '\n{0}'; // Жанр
var LIBRARY_LIST_CODE = 'Код: {0}';
var LIBRARY_LIST_MORTGAGE = ', застава: {0}грн';
var LIBRARY_LIST_FREE_FROM = '\n<b>Вільна з {0}</b>';
var LIBRARY_LIST_READER = ', читає <b>{0}</b>';
var LIBRARY_LIST_PAID_MORTGAGE = ', внесено заставу <b>{0}грн</b>';
var LIBRARY_LIST_FILTER_TYPE = 'Які книги хочете подивитись:';
var LIBRARY_LIST_FILTER_ALL = 'Всі';
var LIBRARY_LIST_FILTER_BY_GENRE = 'За жанром';
var LIBRARY_LIST_FILTER_BY_RATING = 'За рейтингом';
var LIBRARY_SHOW_LIST_GENRE = 'Виберіть жанр книг, який хочете відобразити:'; 
var LIBRARY_SHOW_LIST_RATING = 'Виберіть мінімальний рейтинг книг, які хочете відобразити:';

var LIBRARY_ADD_TITLE = 'Введіть назву книги:';
var LIBRARY_ADD_AUTHOR = 'Введіть автора книги:';
var LIBRARY_ADD_URL = 'Введіть посилання на книгу:';
var LIBRARY_ADD_RATING = 'Введіть рейтинг книги:';
var LIBRARY_ADD_MORTGAGE = 'Яка сума застави за книгу (грн):';
var LIBRARY_ADD_GENRE = 'Який жанр:';
var LIBRARY_ADD_ABOUT = 'Про що книга:';
var LIBRARY_ADD_OWNER = 'Книга належить:';
var LIBRARY_ADD_PLACE = 'Де знаходиться:';
var LIBRARY_ADD_COMMENTS = 'Додатковий коментар:';
var LIBRARY_ADDED_SUCCESS = 'Книгу <b>{0}</b> (<i>{1}</i>) успішно додано 😍';

var LIBRARY_FINANCE_MORTGAGE = 'Застава за книгу';
var LIBRARY_FINANCE_BOOK_FEE = 'Внесок за книгу';

var LIBRARY_RETURN_LIBRARIAN_NOTIFICATION = '📚 <b>Сповіщення по бібліотеці</b>\n\nКористувач <b>{0}</b> (<i>{1}, {2}</i>) {3} <b>{4}</b> (<i>{5}</i>).\
                                \n\n<b>Операцiю провiв:</b> {6}\
                                \n\n<b>Книга знаходиться:</b> {7}\n<b>Книга належить:</b> {8}\
                                \n\n<b>Код книги:</b> {9}.';
var LIBRARY_TOOK_BOOK = 'взяв книгу';
var LIBRARY_RETURNED_BOOK = 'повернув книгу';

var LIBRARY_READ_INFO = 'Ви збираєтесь видати книгу <b>{0}</b> (<i>{1}</i>). Застава за цю книгу {2}.';
var LIBRARY_READ_SUCCESSES = 'Від сьогоднішнього дня книгу <b>{0}</b> (<i>{1}</i>) читає <b>{2}</b>, книгу зарезервовано на <b>{3} днів</b>, внесено заставу <b>{4}грн</b>. Сплачено за користування книгою {5}грн 😍';
var LIBRARY_READ_CANCEL = 'Операцію скасовано 😯 Книга досі вільна, її може взяти інший читач.';
var LIBRARY_READ_CONFIRM = 'Ви даєте книгу <b>{0}</b> (<i>{1}</i>) читачу <b>{2}</b> на <b>{3} днів</b>, застава <b>{4}грн</b>, плата за користування книгою {5}грн.';
var LIBRARY_READ_BUSY = 'На жаль, книга <b>{0}</b> (<i>{1}</i>) зараз зайнята. Зараз її читає <b>{2}</b>. Книгу спочатку потрібно повернути 🙁';
var LIBRARY_READ_DAYS = 'На скільки днів?';
var LIBRARY_READ_MORTGAGE = 'Яка сума застави?';
var LIBRARY_READ_MORTGAGE_ZERO = '0грн (для членів клубу)';
var LIBRARY_READ_MORTGAGE_CURRENCY = 'грн';
var LIBRARY_READ_MORTGAGE_NO = 'відсутня'
var LIBRARY_READ_READER = 'Виберіть або введіть ім\'я читата:';
var LIBRARY_READ_START = 'Введіть код книги, яку хочете видати:'; 
var LIBRARY_READ_DAYS_WORD = ' днів'; 
var LIBRARY_READ_BOOK_IS_RESERVED_WARNING = 'Книга <b>{0}</b> (<i>{1}</i>) наразі зарезервована іншою людиною (<b>{2}</b>).\
                            \nБажаєте продовжити, і видати цю книгу користувачу <b>{3}</b>?';
var LIBRARY_READ_KEEP_RESERVED = 'Операцію скасовано 😯 \nКнига <b>{0}</b> (<i>{1}</i>) залишається зарезервованою за читачем <b>{2}</b>';
 
var LIBRARY_RETURN_START = 'Введіть код книги, яку хочете повернути:';
var LIBRARY_RETURN_NOT_READ = 'Книгу <b>{0}</b> (<i>{1}</i>) ніхто не брав читати, її неможливо повернути.';
var LIBRARY_RETURN_CONFIRM = 'Вам повернули книгу <b>{0}</b> (<i>{1}</i>), а ви віддали заставу <b>{2}грн</b>?';
var LIBRARY_RETURN_CANCEL = 'Книгу <b>{0}</b> (<i>{1}</i>) не було повернуто. Її досі читає <b>{2}</b>.';
var LIBRARY_RETURN_SUCCESS = 'Від сьогоднішнього дня книга <b>{0}</b> (<i>{1}</i>) доступна для наступного читача 😍';
var LIBRARY_RETURN_REMINDER = '{0}, привiт! \n\nВи взяли книгу <b>{1}</b> (<i>{2}</i>) на <b>{3}</b> днiв до <b>{4}</b>.\
                               \n\nВ нас багато книг в бібліотеці, тож швиденько дочитуйте - і гайда брати нову! 😉';
var LIBRARY_RESERVE_OVER = '{0}, привіт! \n\nЦе маленьке нагадування, що ви взяли книгу <b>{1}</b> (<i>{2}</i>) в бібліотеці на <b>{3}</b> днiв до <b>{4}</b>.\
                               \n\nЧас вже повернути її, можливо її хтось вже чекає 😊\
                               \n\nЯкщо вам потрібно більше часу ⁠— зверніться до нашого бібліотекаря, щоб продовжити час 😉';

var LIBRARY_TAKE_START = 'Введіть код книги:';
var LIBRARY_TAKE_REQUESTED = 'Ваш запит, щоб взяти книгу <b>{0}</b> (<i>{1}</i>) відправлено бібліотекарю. \n\nПрийдіть на наступне засідання клубу за книгою, інакше резерв буде скасовано.';
var LIBRARY_TAKE_CONFIRM = 'Ви хочете взяти книгу <b>{0}</b> (<i>{1}</i>)?';
var LIBRARY_TAKE_BUSY = 'На жаль, книга <b>{0}</b> (<i>{1}</i>) зараз зайнята. Вона може бути вільна з {2}. Оберіть інші книгу, у нас багато цікавих 😍.';
var LIBRARY_TAKE_CANCELED = '{0}, привіт!\
\n\nНа жаль, ви не забрали книгу <b>{1}</b> (<i>{2}</i>) і її резерв було скасовано.\
\n\nЯкщо ви плануєте ще взяти цю книгу, зарезервуйте її, будь ласка, ще раз 😊';
var LIBRARY_TAKE_REQUEST = '📚 <b>Сповіщення по бібліотеці</b>\n\nКористувач <b>{0}</b> (<i>{1}, {2}</i>) хоче взяти книгу <b>{3}</b> (<i>{4}</i>).\
                                \n\n<b>Книга знаходиться:</b> {5}\n<b>Книга належить:</b> {6}\
                                \n\n<b>Код книги:</b> {7}.';

/* ПРАВИЛА КОРИСТУВАННЯ БIБЛIОТЕКОЮ */
var LIBRARY_RULES = 'Любий читачу!\
                    \n\nКнижок у нас багато, а правил лише 5:\
                    \n\n1. Забронюйте книгу за допомогою меню кома-бота.\
                    \n2. Прийдіть за нею в четвер о 19:00 на наше щотижневе засідання.\
                    \n3. Залиште заставу за книгу (якщо ви не член клубу) та зробіть внесок на розвиток бібліотеки – <b>{0}грн</b>.\
                    \n4. Читайте та залишайте відгук на книгу у себе в соціальних мережах з тегом #комачитає. І не забудьте підписатися на нас в <a href="https://www.instagram.com/koma.club">instagram</a> та <a href="https://www.facebook.com/ToastmastersUkrainian/">facebook</a>.\
                    \n5. Повертайте книгу на поличку та переходьте до п.1.\
                    \n\nПриємного читання! 📖';

/* ЗАГОЛОВКИ БАЗИ ДАННИХ */
var LIBRARY_HEADER_CODE = "Код";
var LIBRARY_HEADER_AUTHOR = "Автор";
var LIBRARY_HEADER_TITLE = 'Назва';
var LIBRARY_HEADER_URL = 'Посилання';
var LIBRARY_HEADER_RATING = 'Рейтинг';
var LIBRARY_HEADER_ABOUT = 'Про що';
var LIBRARY_HEADER_GENRE = "Жанр";
var LIBRARY_HEADER_STATUS = 'Статус';
var LIBRARY_HEADER_MORTGAGE = 'Застава';
var LIBRARY_HEADER_PLACE = 'Де знаходиться';
var LIBRARY_HEADER_OWNER = 'Книга належить';
var LIBRARY_HEADER_READER = 'Хто читає';
var LIBRARY_HEADER_PAID_MORTGAGE = 'Внесли заставу';
var LIBRARY_HEADER_READ_FROM = 'Почали читати';
var LIBRARY_HEADER_DAYS_TO_READ = 'Взяли на скільки днів';
var LIBRARY_HEADER_GIVEN_BY = 'Хто видав';
var LIBRARY_HEADER_FREE_FROM = 'Вільна з';

var LIBRARY_HISTORY_HEADER_DATE = "Дата";
var LIBRARY_HISTORY_HEADER_CODE = "Код";
var LIBRARY_HISTORY_HEADER_AUTHOR = "Автор";
var LIBRARY_HISTORY_HEADER_TITLE = 'Назва';
var LIBRARY_HISTORY_HEADER_TYPE = 'Операція';
var LIBRARY_HISTORY_HEADER_MANAGED_BY = 'Хто провів операцію';
var LIBRARY_HISTORY_HEADER_READER = 'Читач';

/* СТАТУСИ */
var LIBRARY_BOOK_STATUS_FREE = 'Вільна';
var LIBRARY_BOOK_STATUS_TAKEN = 'Зайнята';
var LIBRARY_BOOK_STATUS_RESERVED = 'Зарезервована';
var LIBRARY_HOME = 'Вдома';
var LIBRARY_CLUB = 'Поличка';

var LIBRARY_HISTORY_TOOK = 'Видана';
var LIBRARY_HISTORY_RETURNED = 'Повернута';

/* СПИСКИ */
var LIBRARY_PLACE = 'Де знаходиться книга';


function processLibrary(userData, text) {
    if (userData.statuses[1] && text != LIBRARY_SHOW_LIST && text != LIBRARY_TAKE_BOOK && text != LIBRARY_SHOW_RULES) {
        if (userData.statuses[1] == LIBRARY_TAKE_BOOK) {
            if (userData.statuses[2]) {
                if (!userData.statuses[3]) {
                    if (text == YES) {
                        var bookInfo = getLibraryBookInformation(userData.statuses[2]);

                        if (bookInfo[LIBRARY_HEADER_STATUS] == LIBRARY_BOOK_STATUS_FREE) {
                            showMenu(userData.telegramId, format(LIBRARY_TAKE_REQUESTED, bookInfo[LIBRARY_HEADER_TITLE], bookInfo[LIBRARY_HEADER_AUTHOR]));
                            //sendMessageToOfficer(OFFICER_POSITION_PRESIDENT, format(LIBRARY_TAKE_REQUEST, userData.fullName, userData.fields[MEMBERS_HEADER_EMAIL_ADDRESS], userData.fields[MEMBERS_HEADER_MOBILE_PHONE_NUMBER], bookInfo[LIBRARY_HEADER_TITLE], bookInfo[LIBRARY_HEADER_AUTHOR]));
                            var message = format(LIBRARY_TAKE_REQUEST, userData.fullName, userData.fields[MEMBERS_HEADER_EMAIL_ADDRESS],
                                '+' + userData.fields[MEMBERS_HEADER_MOBILE_PHONE_NUMBER], bookInfo[LIBRARY_HEADER_TITLE],
                                bookInfo[LIBRARY_HEADER_AUTHOR], bookInfo[LIBRARY_HEADER_PLACE], bookInfo[LIBRARY_HEADER_OWNER],
                                bookInfo[LIBRARY_HISTORY_HEADER_CODE]);
                            if (!sendMessageToOfficer(OFFICER_POSITION_LIBRARIAN, message)) {
                                sendMessageToOfficer(OFFICER_POSITION_SECRETARY, message);
                            }

                            updateLibraryBook(bookInfo[LIBRARY_HISTORY_HEADER_CODE], LIBRARY_BOOK_STATUS_RESERVED, userData.fullName,
                                userData.fullName, formatDate(new Date()), 0, LIBRARY_RESERVATION_DAYS);
                            return true;
                        } else {
                            showMenu(userData.telegramId, format(LIBRARY_TAKE_BUSY, bookInfo[LIBRARY_HEADER_TITLE], bookInfo[LIBRARY_HEADER_AUTHOR],
                                formatDate(parseDate(bookInfo[LIBRARY_HEADER_FREE_FROM]))));

                            goBack(userData);
                          
                            return false;
                        }
                    } else {
                        goBack(userData);
                    }
                }
            } else {
                var bookInfo = getLibraryBookInformation(text);
                showMenu(userData.telegramId, format(LIBRARY_TAKE_CONFIRM, bookInfo[LIBRARY_HEADER_TITLE], bookInfo[LIBRARY_HEADER_AUTHOR]), [NO, YES]);
                return true;
            }
        } else if (userData.statuses[1] == LIBRARY_SHOW_LIST) {
            if (userData.statuses[2]) {
                if (!userData.statuses[3]) {
                    if (userData.statuses[2] == LIBRARY_LIST_FILTER_BY_GENRE) {
                        showLibraryBooks(userData.telegramId, text, null);
                        return true;
                    } else if (userData.statuses[2] == LIBRARY_LIST_FILTER_BY_RATING) {
                        showLibraryBooks(userData.telegramId, null, text);
                        return true;
                    }
                }
            } else {
                if (text == LIBRARY_LIST_FILTER_ALL) {
                    showLibraryBooks(userData.telegramId, null, null);
                    return true;
                } else if (text == LIBRARY_LIST_FILTER_BY_GENRE) {
                    showMenu(userData.telegramId, LIBRARY_SHOW_LIST_GENRE, getLibraryBookGenres());
                    return true;
                } else if (text == LIBRARY_LIST_FILTER_BY_RATING) {
                    showMenu(userData.telegramId, LIBRARY_SHOW_LIST_RATING, ['5*', '4.5*', '4*', '3*', '2*', '1*']);
                    return true;
                }
            }
        }
    } else {
        if (text == LIBRARY_SHOW_LIST) {
            var newStatus = LIBRARY + "___" + LIBRARY_SHOW_LIST + "___";
            updateMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userData.telegramId, MEMBERS_HEADER_TELEGRAM_STATUS, newStatus);

            showMenu(userData.telegramId, LIBRARY_LIST_FILTER_TYPE, [LIBRARY_LIST_FILTER_ALL, LIBRARY_LIST_FILTER_BY_GENRE, LIBRARY_LIST_FILTER_BY_RATING]);
            return false;
        } else if (text == LIBRARY_TAKE_BOOK) {
            var newStatus = LIBRARY + "___" + LIBRARY_TAKE_BOOK + "___";
            updateMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userData.telegramId, MEMBERS_HEADER_TELEGRAM_STATUS, newStatus);

            showMenu(userData.telegramId, LIBRARY_TAKE_START, [LIBRARY_SHOW_LIST]);
            return false;
        }
        else if (text == LIBRARY_SHOW_RULES) {
            var message = format(LIBRARY_RULES, LIBRARY_BOOK_FEE);
            showMenu(userData.telegramId, message);
            return true;
        }
        
    }
}

function processLibraryManagement(userData, text) {
    if (userData.statuses[2]) {
        if (userData.statuses[2] == LIBRARY_SHOW_LIST) {
            if (userData.statuses[3]) {
                if (text == LIBRARY_GIVE_BOOK) {
                  userData.statuses = userData.statuses.slice(0, 2);
                  userData.status = userData.statuses.join('___') + '___';
                  showMenu(userData.telegramId, LIBRARY_READ_START);
                  return true;
                }
                else if (!userData.statuses[4]) {
                      if (userData.statuses[3] == LIBRARY_LIST_FILTER_BY_GENRE) {
                          showLibraryBooks(userData.telegramId, text, null, true);
                          return true;
                      } else if (userData.statuses[3] == LIBRARY_LIST_FILTER_BY_RATING) {
                          showLibraryBooks(userData.telegramId, null, text, true);
                          return true;
                      }
                  }
            } else {
                if (text == LIBRARY_LIST_FILTER_ALL) {
                    showLibraryBooks(userData.telegramId, null, null, true);
                    return true;
                } else if (text == LIBRARY_LIST_FILTER_BY_GENRE) {
                    showMenu(userData.telegramId, LIBRARY_SHOW_LIST_GENRE, getLibraryBookGenres());
                    return true;
                } else if (text == LIBRARY_LIST_FILTER_BY_RATING) {
                    showMenu(userData.telegramId, LIBRARY_SHOW_LIST_RATING, ['5*', '4.5*', '4*', '3*', '2*', '1*']);
                    return true;
                }
            }
        } else if (userData.statuses[2] == LIBRARY_GIVE_BOOK) {
            if (userData.statuses[3]) {
                if (userData.statuses[4]) {
                    if (text == YES && !userData.statuses[5]) { 
                      var bookInfo = getLibraryBookInformation(userData.statuses[3]);
                      var mortgages = [];
  
                      if (bookInfo[LIBRARY_HEADER_MORTGAGE] && bookInfo[LIBRARY_HEADER_MORTGAGE] > 0) 
                      {
                        mortgages.push(bookInfo[LIBRARY_HEADER_MORTGAGE] + LIBRARY_READ_MORTGAGE_CURRENCY);
                      }
                      
                      mortgages.push(LIBRARY_READ_MORTGAGE_ZERO);
                      showMenu(userData.telegramId, LIBRARY_READ_MORTGAGE, mortgages);
                      return false;
                    } 
                    else if(text == NO && !userData.statuses[5])
                    {
                      var bookInfo = getLibraryBookInformation(userData.statuses[3]);
                      showMenu(userData.telegramId, format(LIBRARY_READ_KEEP_RESERVED, bookInfo[LIBRARY_HEADER_TITLE], bookInfo[LIBRARY_HEADER_AUTHOR], bookInfo[LIBRARY_HEADER_READER]));
                    }  
                    else
                    {
                      var mortgage = text.replace(LIBRARY_READ_MORTGAGE_ZERO, '0');
                      mortgage = mortgage.replace(LIBRARY_READ_MORTGAGE_CURRENCY, '');
                      mortgage = mortgage.trim();
                      if (!isNaN(mortgage) || userData.statuses[5]) {
                        if (userData.statuses[5]) {
                          var code = userData.statuses[3];
                          var reader = userData.statuses[4];
                          var mortgage = userData.statuses[5].replace(LIBRARY_READ_MORTGAGE_ZERO, '0');
                          mortgage = mortgage.replace(LIBRARY_READ_MORTGAGE_CURRENCY, '');
                          mortgage = mortgage.trim();
                          var days = (userData.statuses[6] || text).replace(LIBRARY_READ_DAYS_WORD, '');
                          var bookInfo = getLibraryBookInformation(code);
                          var title = bookInfo[LIBRARY_HEADER_TITLE];
                          var author = bookInfo[LIBRARY_HEADER_AUTHOR];
                          
                          if (userData.statuses[6]) {
                            if (text == YES) {
                              if (true || !bookInfo[LIBRARY_HEADER_READER]) {
                                updateLibraryBook(code, LIBRARY_BOOK_STATUS_TAKEN, userData.fullName, reader, formatDate(new Date()), mortgage, days);
                                insertFinanceData(FINANCE_LISTS_TYPE_LIBRARY, reader, mortgage, userData.fullName, LIBRARY_FINANCE_MORTGAGE);
                                insertFinanceData(FINANCE_LISTS_TYPE_LIBRARY, reader, LIBRARY_BOOK_FEE, userData.fullName, LIBRARY_FINANCE_BOOK_FEE);
                                insertLibraryHistory(code, title, author, LIBRARY_HISTORY_TOOK, userData.fullName, reader);
                                showMenu(userData.telegramId, format(LIBRARY_READ_SUCCESSES, title, author, reader, days, mortgage, LIBRARY_BOOK_FEE));
                                showParentManagementMenu(userData);
                                
                                if (userData.fields[MEMBERS_HEADER_POSITION] != OFFICER_POSITION_LIBRARIAN) {
                                  var memberInfo = getMemberInfo(MEMBERS_HEADER_FULLNAME, reader);
                                   var message = format(LIBRARY_RETURN_LIBRARIAN_NOTIFICATION, memberInfo.fullName, memberInfo.fields[MEMBERS_HEADER_EMAIL_ADDRESS],
                                     '+' + memberInfo.fields[MEMBERS_HEADER_MOBILE_PHONE_NUMBER], LIBRARY_TOOK_BOOK, bookInfo[LIBRARY_HEADER_TITLE],
                                     bookInfo[LIBRARY_HEADER_AUTHOR], userData.fullName, bookInfo[LIBRARY_HEADER_PLACE], bookInfo[LIBRARY_HEADER_OWNER],
                                     bookInfo[LIBRARY_HISTORY_HEADER_CODE]);
                                
                                   sendMessageToOfficer(OFFICER_POSITION_LIBRARIAN, message);
                                }
                              } else {
                                showMenu(userData.telegramId, format(LIBRARY_READ_BUSY, title, author, bookInfo[LIBRARY_HEADER_READER]));
                              }
                            } else if (text == NO) {
                              showMenu(userData.telegramId, LIBRARY_READ_CANCEL);
                            }
                          } else {
                            showMenu(userData.telegramId, format(LIBRARY_READ_CONFIRM, title, author, reader, days, mortgage, LIBRARY_BOOK_FEE), [NO, YES]);
                            return true;
                          }
                        } else {
                          showMenu(userData.telegramId, LIBRARY_READ_DAYS, getListItemsByName(LIBRARY_HEADER_DAYS_TO_READ));
                          return true;
                        }
                      } else {
                        showMenu(userData.telegramId, format(FINANCE_WRONG_AMOUNT, text));
                        return false;
                      }
                   }  
                } else {
                    if (searchMemberInDatabase(text, userData.telegramId, null, null)) {
                    
                      var bookInfo = getLibraryBookInformation(userData.statuses[3]);
                      
                      if(bookInfo[LIBRARY_HEADER_STATUS] == LIBRARY_BOOK_STATUS_RESERVED) {
                        if(bookInfo[LIBRARY_HEADER_READER] != text) {
                          showMenu(userData.telegramId, format(LIBRARY_READ_BOOK_IS_RESERVED_WARNING, bookInfo[LIBRARY_HEADER_TITLE], bookInfo[LIBRARY_HEADER_AUTHOR], bookInfo[LIBRARY_HEADER_READER], text), [NO, YES]);
                          return true;
                        }
                      }
                      
                      var mortgages = [];
                      
                      if (bookInfo[LIBRARY_HEADER_MORTGAGE] && bookInfo[LIBRARY_HEADER_MORTGAGE] > 0) 
                      {
                        mortgages.push(bookInfo[LIBRARY_HEADER_MORTGAGE] + LIBRARY_READ_MORTGAGE_CURRENCY);
                      }
                      mortgages.push(LIBRARY_READ_MORTGAGE_ZERO);
                      showMenu(userData.telegramId, LIBRARY_READ_MORTGAGE, mortgages);
                      return true;
                   } 
                   return false;
                }
            } else {
               if(text == LIBRARY_SHOW_LIST) {
                  userData.statuses = userData.statuses.slice(0, 2);
                  userData.statuses.push(LIBRARY_SHOW_LIST);
                  userData.status = userData.statuses.join('___') + '___';
                  
                  updateMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userData.telegramId, MEMBERS_HEADER_TELEGRAM_STATUS, userData.status);
                  showMenu(userData.telegramId, LIBRARY_LIST_FILTER_TYPE, [LIBRARY_LIST_FILTER_ALL, LIBRARY_LIST_FILTER_BY_GENRE, LIBRARY_LIST_FILTER_BY_RATING]);
                  
                  return false;
               } else {
                    var bookInfo = getLibraryBookInformation(text);
    
                    if (bookInfo[LIBRARY_HEADER_STATUS] == LIBRARY_BOOK_STATUS_FREE
                       || bookInfo[LIBRARY_HEADER_STATUS] == LIBRARY_BOOK_STATUS_RESERVED) {
                        sendText(userData.telegramId, format(LIBRARY_READ_INFO,
                            bookInfo[LIBRARY_HEADER_TITLE],
                            bookInfo[LIBRARY_HEADER_AUTHOR],
                            (bookInfo[LIBRARY_HEADER_MORTGAGE] ? bookInfo[LIBRARY_HEADER_MORTGAGE] + LIBRARY_READ_MORTGAGE_CURRENCY : LIBRARY_READ_MORTGAGE_NO)));
                        showMenu(userData.telegramId, LIBRARY_READ_READER, getAllMembers());
                        return true;
                    } else {
                        showMenu(userData.telegramId, format(LIBRARY_READ_BUSY, bookInfo[LIBRARY_HEADER_TITLE], bookInfo[LIBRARY_HEADER_AUTHOR], bookInfo[LIBRARY_HEADER_READER]));
                        return false;
                    }
                }
            }
        } else if (userData.statuses[2] == LIBRARY_RETURN_BOOK) {
            if (userData.statuses[3]) {
                var bookInfo = getLibraryBookInformation(userData.statuses[3]);
                if (text == YES) { 
                    updateLibraryBook(userData.statuses[3], LIBRARY_BOOK_STATUS_FREE, '', '', '', '', '');
                    insertFinanceData(FINANCE_LISTS_TYPE_LIBRARY, bookInfo[LIBRARY_HEADER_READER], -1 * bookInfo[LIBRARY_HEADER_PAID_MORTGAGE], userData.fullName, LIBRARY_FINANCE_MORTGAGE);
                    insertLibraryHistory(userData.statuses[3], bookInfo[LIBRARY_HEADER_TITLE], bookInfo[LIBRARY_HEADER_AUTHOR], LIBRARY_HISTORY_RETURNED,
                        userData.fullName, bookInfo[LIBRARY_HEADER_READER]);

                    showMenu(userData.telegramId, format(LIBRARY_RETURN_SUCCESS, bookInfo[LIBRARY_HEADER_TITLE], bookInfo[LIBRARY_HEADER_AUTHOR]));
                    showParentManagementMenu(userData);
                    
                    if (userData.fields[MEMBERS_HEADER_POSITION] != OFFICER_POSITION_LIBRARIAN) {
                      var memberInfo = getMemberInfo(MEMBERS_HEADER_FULLNAME, bookInfo[LIBRARY_HEADER_READER]);
                      var message = format(LIBRARY_RETURN_LIBRARIAN_NOTIFICATION, memberInfo.fullName, memberInfo.fields[MEMBERS_HEADER_EMAIL_ADDRESS],
                                           '+' + memberInfo.fields[MEMBERS_HEADER_MOBILE_PHONE_NUMBER], LIBRARY_RETURNED_BOOK, bookInfo[LIBRARY_HEADER_TITLE],
                                           bookInfo[LIBRARY_HEADER_AUTHOR], userData.fullName, bookInfo[LIBRARY_HEADER_PLACE], bookInfo[LIBRARY_HEADER_OWNER],
                                           bookInfo[LIBRARY_HISTORY_HEADER_CODE]);
                      
                      sendMessageToOfficer(OFFICER_POSITION_LIBRARIAN, message);
                    }
                    return false;
                } else if (text == NO) {
                    showMenu(userData.telegramId, format(LIBRARY_RETURN_CANCEL, bookInfo[LIBRARY_HEADER_TITLE], bookInfo[LIBRARY_HEADER_AUTHOR], bookInfo[LIBRARY_HEADER_READER]));
                }
            } else {
                var bookInfo = getLibraryBookInformation(text);
                if (bookInfo[LIBRARY_HEADER_STATUS] == LIBRARY_BOOK_STATUS_TAKEN) {
                    showMenu(userData.telegramId, format(LIBRARY_RETURN_CONFIRM,
                            bookInfo[LIBRARY_HEADER_TITLE],
                            bookInfo[LIBRARY_HEADER_AUTHOR],
                            (bookInfo[LIBRARY_HEADER_PAID_MORTGAGE] ? bookInfo[LIBRARY_HEADER_PAID_MORTGAGE] : 0)),
                        [NO, YES]);
                    return true;
                } else {
                    showMenu(userData.telegramId, format(LIBRARY_RETURN_NOT_READ, bookInfo[LIBRARY_HEADER_TITLE], bookInfo[LIBRARY_HEADER_AUTHOR]));
                    return true;
                }
            }
        } else if (userData.statuses[2] == LIBRARY_ADD_BOOK) {
            if (userData.statuses[3]) {
                if (userData.statuses[4]) {
                    if (userData.statuses[5]) {
                        if (userData.statuses[6]) {
                            if (userData.statuses[7]) {
                                if (userData.statuses[8]) {
                                    if (userData.statuses[9]) {
                                        if (userData.statuses[10]) {
                                            if (userData.statuses[11]) {
                                                var comments = EMPTY ? '' : text;
                                                var title = userData.statuses[3];
                                                var author = userData.statuses[4] == EMPTY ? '' : userData.statuses[4];
                                                var url = userData.statuses[5] == EMPTY ? '' : userData.statuses[5];
                                                var rating = userData.statuses[6] == EMPTY ?
                                                    '' :
                                                    (userData.statuses[6].indexOf('*') == -1 ? userData.statuses[6] + '*' : userData.statuses[6]);
                                                var mortgage = userData.statuses[7];
                                                var genre = userData.statuses[8] == EMPTY ? '' : userData.statuses[8];
                                                var about = userData.statuses[9] == EMPTY ? '' : userData.statuses[9];
                                                var owner = userData.statuses[10];
                                                var place = userData.statuses[11];

                                                insertLibraryNewBook(title, author, url, rating, mortgage, genre, about, owner, place, comments);
                                                showMenu(userData.telegramId, format(LIBRARY_ADDED_SUCCESS, title, author));
                                                showParentManagementMenu(userData);

                                                return false;
                                            } else {
                                                showMenu(userData.telegramId, LIBRARY_ADD_COMMENTS, [EMPTY]);
                                                return true;
                                            }
                                        } else {
                                            showMenu(userData.telegramId, LIBRARY_ADD_PLACE, getListItemsByName(LIBRARY_PLACE));
                                            return true;
                                        }
                                    } else {
                                        var list = getAllMembers();
                                        list.unshift(CLUB_NAME);
                                        showMenu(userData.telegramId, LIBRARY_ADD_OWNER, list);
                                        return true;
                                    }


                                } else {
                                    showMenu(userData.telegramId, LIBRARY_ADD_ABOUT, [EMPTY]);
                                    return true;
                                }
                            } else {
                                var items = getLibraryBookGenres();
                                items.unshift(EMPTY);
                                showMenu(userData.telegramId, LIBRARY_ADD_GENRE, items);
                                return true;
                            }
                        } else {
                            showMenu(userData.telegramId, LIBRARY_ADD_MORTGAGE, [0, 30, 50, 80, 100, 120]);
                            return true;
                        }
                    } else {
                        showMenu(userData.telegramId, LIBRARY_ADD_RATING, [EMPTY, '1*', '2*', '3*', '3.5*', '4*', '4.5*', '5*']);
                        return true;
                    }
                } else {
                    showMenu(userData.telegramId, LIBRARY_ADD_URL, [EMPTY]);
                    return true;
                }
            } else {
                showMenu(userData.telegramId, LIBRARY_ADD_AUTHOR, [EMPTY]);
                return true;
            }
        }
    } else {
        if (text == LIBRARY_GIVE_BOOK) {
            showMenu(userData.telegramId, LIBRARY_READ_START, [LIBRARY_SHOW_LIST]);
            return true;
        } else if (text == LIBRARY_RETURN_BOOK) {
            showMenu(userData.telegramId, LIBRARY_RETURN_START);
            return true;
        } else if (text == LIBRARY_ADD_BOOK) {
            showMenu(userData.telegramId, LIBRARY_ADD_TITLE);
            return true;
        } else if (text == LIBRARY_SHOW_LIST) {
            showMenu(userData.telegramId, LIBRARY_LIST_FILTER_TYPE, [LIBRARY_LIST_FILTER_ALL, LIBRARY_LIST_FILTER_BY_GENRE, LIBRARY_LIST_FILTER_BY_RATING]);
            //showLibraryBooks(userData.telegramId, true);
            return true;
        }
    }
}

// ОПЕРАЦИИ

function showLibraryBooks(userTelegramId, checkGenre, checkRating, showWhoReads) {
    var sheet = SpreadsheetApp.openById(databaseSpreadSheetId).getSheetByName(SHEET_LIBRARY);

    var headerValues = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

    var codeHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_CODE);
    var authorHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_AUTHOR);
    var titleHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_TITLE);
    var urlHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_URL);
    var aboutHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_ABOUT);
    var genreHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_GENRE);
    var statusHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_STATUS);
    var freeFromHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_FREE_FROM);
    var readerHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_READER);
    var ratingHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_RATING);
    var paidMortgageHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_PAID_MORTGAGE);
    var readFromHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_READ_FROM);
    var daysToReadHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_DAYS_TO_READ);
    var mortgageHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_MORTGAGE);
    var placeHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_PLACE);
    var ownerByHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_OWNER);

    var userData = getMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userTelegramId);

    var values = sheet.getRange(2, 1, sheet.getLastRow(), sheet.getLastColumn()).getValues();

    var message = LIBRARY_LIST;
    var number = 1;
    
    for (var i = 0; i < values.length; i++) {
        var row = values[i];

        if (row && row[titleHeaderIndex]) {
            if (!!checkGenre && row[genreHeaderIndex] != checkGenre)
                continue;
            if (!!checkRating && row[ratingHeaderIndex] < checkRating.replace('*', ''))
                continue;

            message += row[codeHeaderIndex] + '. ' + '<a href="' + row[urlHeaderIndex] + '">' + row[titleHeaderIndex] + '</a> / <i>' + row[authorHeaderIndex] + '</i>';
			
            if (row[genreHeaderIndex]) {
                message += format(LIBRARY_LIST_GENRE, row[genreHeaderIndex]);
            }

            if (row[ratingHeaderIndex]) {
                var rating = row[ratingHeaderIndex].replace('*', '');
                if (rating == 5) {
                    message += format(LIBRARY_LIST_BEST_RATING, rating);
                } else {
                    message += format(LIBRARY_LIST_RATING, rating);
                }
            }

            message += ' (';

            message += format(LIBRARY_LIST_CODE, row[codeHeaderIndex]);

            if (row[mortgageHeaderIndex]) {
                message += format(LIBRARY_LIST_MORTGAGE, row[mortgageHeaderIndex]);
            }

            message += ')';

            if (!showWhoReads && row[aboutHeaderIndex]) {
                message += '\n<pre>' + row[aboutHeaderIndex] + '</pre>';
            }

            if (row[statusHeaderIndex] != LIBRARY_BOOK_STATUS_FREE) {
                message += format(LIBRARY_LIST_FREE_FROM, formatDate(parseDate(row[freeFromHeaderIndex])));

                if (showWhoReads) {
                    message += format(LIBRARY_LIST_READER, row[readerHeaderIndex]);
                    if (row[paidMortgageHeaderIndex]) {
                        message += format(LIBRARY_LIST_PAID_MORTGAGE, row[paidMortgageHeaderIndex]);
                    }
                }
            }

            message += '\n\n';
            number++;
        }

        if (message.length >= 4048) {
            if (message) {
               if (userData.statuses[0] == MANAGEMENT)
               {
                  showMenu(userTelegramId, message, [LIBRARY_GIVE_BOOK]);
                  message = '';
               } 
               else {
                  showMenu(userTelegramId, message, [LIBRARY_TAKE_BOOK]);
                  message = '';
               }
            }
        }
    }

    if (message) {
      if (userData.statuses[0] == MANAGEMENT)
      {
        showMenu(userTelegramId, message, [LIBRARY_GIVE_BOOK]);
        message = '';
      } 
      else {
        showMenu(userTelegramId, message, [LIBRARY_TAKE_BOOK]);
        message = '';
      }
   }
}



/* РОБОТА З БАЗОЮ */

function getLibraryBookInformation(code) {
    var sheet = SpreadsheetApp.openById(databaseSpreadSheetId).getSheetByName(SHEET_LIBRARY);

    var headerValues = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

    var codeHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_CODE);

    var values = sheet.getRange(2, 1, sheet.getLastRow(), sheet.getLastColumn()).getValues();

    for (var i = 0; i < values.length; i++) {
        var row = values[i];

        if (row[codeHeaderIndex] == code) {
            var bookInfo = {};
            for (var k = 0; k < headerValues.length; k++) {
                bookInfo[headerValues[k]] = row[k];
            }
            return bookInfo;
        }
    }

}

function insertLibraryNewBook(title, author, url, rating, mortgage, genre, about, owner, place, comments) {
    var sheet = SpreadsheetApp.openById(databaseSpreadSheetId).getSheetByName(SHEET_LIBRARY);
    var headerValues = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

    var codeHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_CODE);
    var authorHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_AUTHOR);
    var titleHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_TITLE);
    var urlHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_URL);
    var ratingHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_RATING);
    var aboutHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_ABOUT);
    var genreHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_GENRE);
    var statusHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_STATUS);
    var mortgageHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_MORTGAGE);
    var placeHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_PLACE);
    var ownerHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_OWNER);

    var lastRowIndex = sheet.getLastRow();
    var lastColumnIndex = sheet.getLastColumn();
    
    var lastCode = sheet.getRange(lastRowIndex, codeHeaderIndex + 1).getValue();
    var code = lastCode + 1;
    
    var values = [
        []
    ];
    for (var i = 0; i < lastColumnIndex; i++) {
        values[0].push('');
    }

    values[0][codeHeaderIndex] = code;
    values[0][authorHeaderIndex] = author;
    values[0][titleHeaderIndex] = title;
    values[0][urlHeaderIndex] = url;
    values[0][aboutHeaderIndex] = about;
    values[0][genreHeaderIndex] = genre;
    values[0][rating] = rating + '*';
    values[0][statusHeaderIndex] = LIBRARY_BOOK_STATUS_FREE;
    values[0][mortgageHeaderIndex] = mortgage;
    values[0][placeHeaderIndex] = place;
    values[0][ownerHeaderIndex] = owner;
    
    addNewRowAndKeepFormulas(sheet, values);
}

function insertLibraryHistory(code, title, author, type, managedBy, reader) {
    var sheet = SpreadsheetApp.openById(databaseSpreadSheetId).getSheetByName(SHEET_LIBRARY_HISTORY);
    var headerValues = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

    var dateHeaderIndex = headerValues.findIndex(LIBRARY_HISTORY_HEADER_DATE);
    var codeHeaderIndex = headerValues.findIndex(LIBRARY_HISTORY_HEADER_CODE);
    var authorHeaderIndex = headerValues.findIndex(LIBRARY_HISTORY_HEADER_AUTHOR);
    var titleHeaderIndex = headerValues.findIndex(LIBRARY_HISTORY_HEADER_TITLE);
    var typeHeaderIndex = headerValues.findIndex(LIBRARY_HISTORY_HEADER_TYPE);
    var managedByHeaderIndex = headerValues.findIndex(LIBRARY_HISTORY_HEADER_MANAGED_BY);
    var readerHeaderIndex = headerValues.findIndex(LIBRARY_HISTORY_HEADER_READER);

    var lastRowIndex = sheet.getLastRow();
    var lastColumnIndex = sheet.getLastColumn();

    var lastCode = sheet.getRange(lastRowIndex, codeHeaderIndex + 1).getValue();

    sheet.insertRowsAfter(lastRowIndex, 1);
    var insertedRange = sheet.getRange(lastRowIndex + 1, 1, 1, lastColumnIndex);

    var values = [
        []
    ];
    for (var i = 0; i < lastColumnIndex; i++) {
        values[0].push('');
    }

    values[0][codeHeaderIndex] = code;
    values[0][authorHeaderIndex] = author;
    values[0][titleHeaderIndex] = title;
    values[0][typeHeaderIndex] = type;
    values[0][managedByHeaderIndex] = managedBy;
    values[0][readerHeaderIndex] = reader;
    values[0][dateHeaderIndex] = formatDate(new Date());
  
    insertedRange.setValues(values);
}

function getLibraryBookGenres() {
    var sheet = SpreadsheetApp.openById(databaseSpreadSheetId).getSheetByName(SHEET_LIBRARY);

    var headerValues = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

    var genreHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_GENRE) + 1;

    var values = sheet.getRange(2, genreHeaderIndex, sheet.getLastRow(), 1).getValues();
    var genres = [];

    for (var i = 0; i < values.length; i++) {
        var value = values[i][0];
        if (value && genres.indexOf(value) == -1) {
            genres.push(value);
        }
    }

    return genres;
}

function updateLibraryBook(code, status, givenBy, reader, readFrom, paidMortgage, daysToRead) {
    var sheet = SpreadsheetApp.openById(databaseSpreadSheetId).getSheetByName(SHEET_LIBRARY);

    var headerValues = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

    var codeHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_CODE) + 1;
    var statusHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_STATUS) + 1;
    var takenByHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_READER) + 1;
    var paidMortgageHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_PAID_MORTGAGE) + 1;
    var takenFromHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_READ_FROM) + 1;
    var daysToReadHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_DAYS_TO_READ) + 1;
    var givenByHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_GIVEN_BY) + 1;

    var values = sheet.getRange(2, codeHeaderIndex, sheet.getLastRow(), 1).getValues();

    for (var i = 0; i < values.length; i++) {
        if (values[i][0] == code) {
            sheet.getRange(i + 2, statusHeaderIndex, 1, 1).setValue(status);
            sheet.getRange(i + 2, takenByHeaderIndex, 1, 1).setValue(reader);
            sheet.getRange(i + 2, paidMortgageHeaderIndex, 1, 1).setValue(paidMortgage);
            sheet.getRange(i + 2, takenFromHeaderIndex, 1, 1).setValue(readFrom);
            sheet.getRange(i + 2, daysToReadHeaderIndex, 1, 1).setValue(daysToRead);
            sheet.getRange(i + 2, givenByHeaderIndex, 1, 1).setValue(givenBy);
            break;
        }
    }
}

function checkLibraryBooksStatusAndSendNotifications() {
  var sheet = SpreadsheetApp.openById(databaseSpreadSheetId).getSheetByName(SHEET_LIBRARY);

  var headerValues = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];  
  var authorHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_AUTHOR); 
  var codeHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_CODE); 
  var titleHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_TITLE); 
  var statusHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_STATUS); 
  var freeFromHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_FREE_FROM); 
  var readerHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_READER);
  var daysToReadHeaderIndex = headerValues.findIndex(LIBRARY_HEADER_DAYS_TO_READ);
  
  var values = sheet.getRange(2, 1, sheet.getLastRow(), sheet.getLastColumn()).getValues();
  var now = new Date();  
  
  for (var i = 0; i < values.length; i++) {
    var row = values[i];
    var status = row[statusHeaderIndex];
    
    if (status == LIBRARY_BOOK_STATUS_TAKEN) { 
      var date = row[freeFromHeaderIndex];
      if (date) {
        var freeFrom = parseDate(date);
        var daysLeft = Math.ceil((freeFrom - now)/86400000);
        
        if (daysLeft == LIBRARY_DAYS_BEFORE_RETURN) {
          var memberInfo = getMemberInfo(MEMBERS_HEADER_FULLNAME, row[readerHeaderIndex]);
          if (memberInfo) {
            var callName = memberInfo.callName || memberInfo.name;
            sendText(memberInfo.telegramId, format(LIBRARY_RETURN_REMINDER, callName, row[titleHeaderIndex], row[authorHeaderIndex], row[daysToReadHeaderIndex], formatDate(row[freeFromHeaderIndex])));                                                                                                                                                               
          }
        } 
        else if (daysLeft < 0 && daysLeft % LIBRARY_REMIND_RETURN_FREQUENCY == 0) {
          var memberInfo = getMemberInfo(MEMBERS_HEADER_FULLNAME, row[readerHeaderIndex]);
          if (memberInfo) {
            var callName = memberInfo.callName || memberInfo.name;
            sendText(memberInfo.telegramId, format(LIBRARY_RESERVE_OVER, callName, row[titleHeaderIndex], row[authorHeaderIndex], row[daysToReadHeaderIndex], formatDate(row[freeFromHeaderIndex])));                                                                                                                                                               
          }
        }        
      }
    }
    else if (status == LIBRARY_BOOK_STATUS_RESERVED)
    {
      var date = row[freeFromHeaderIndex];
      if (!date || parseDate(date) < new Date()) {
        updateLibraryBook(row[codeHeaderIndex], LIBRARY_BOOK_STATUS_FREE, '', '', '', '', '');
        var memberInfo = getMemberInfo(MEMBERS_HEADER_FULLNAME, row[readerHeaderIndex]);
        if (memberInfo) {
          var callName = memberInfo.callName || memberInfo.name;
          sendText(memberInfo.telegramId, format(LIBRARY_TAKE_CANCELED, callName, row[titleHeaderIndex], row[authorHeaderIndex]));
        }
      }
    }
  }
}

