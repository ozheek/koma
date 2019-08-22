
/* МЕНЮ */

/* ТЕКСТИ */

var MANAGEMENT_NO_ACCESS = 'На жаль, у вас немає доступу до цього розділу 🙃 Функції управління доступні тільки офіцерській команді.\
\n\nНа наступних виборах можете долучитись до офіцерської команди 😉';

function showParentManagementMenu(userData)
{
  var text = userData.statuses.slice(1, 2);
  userData.statuses = userData.statuses.slice(0, 1);
  userData.status = userData.statuses.join('___') + '___';   
  processRequest(userData, text);
}

function processManagement(userData, text) {  
  if (userData.statuses[1])
  {
    if (userData.statuses[1] == FINANCE)
    {
      return processFinance(userData, text);
    }
    else if (userData.statuses[1] == MEETING)
    {
      return processMeetingManagement(userData, text);
    }    
    else if (userData.statuses[1] == LIBRARY)
    {
      return processLibraryManagement(userData, text);
    }     
    else if (userData.statuses[1] == MEMBERS)
    {
      return processMembers(userData, text);
    } 
    else if (userData.statuses[1] == INVENTORY)
    {
      return processInventory(userData, text);
    }
  }
  else 
  {
    if (text == FINANCE)
    {
      showMenu(userData.telegramId, 'Яку фінансову операцію ви бажаєте здійснити?', 
               [FINANCE_OUT, FINANCE_IN, FINANCE_TRANSFER, FINANCE_BALANCE]);
      return true;
    }        
    else if (text == MEETING)
    {
      showMenu(userData.telegramId, 'Яку операцію бажаєте виконати?', 
               [MEETING_ASSIGN_ROLE, MEETING_SHOW_ROLES]);
      return true;
    }      
    else if (text == LIBRARY)
    {
      showMenu(userData.telegramId, 'Яку операцію бажаєте виконати?', 
               [LIBRARY_SHOW_LIST, LIBRARY_GIVE_BOOK, LIBRARY_RETURN_BOOK, LIBRARY_ADD_BOOK]);
      return true;
    }
    else if (text == MEMBERS)
    {
      showMenu(userData.telegramId, 'Яку операцію бажаєте виконати?', 
               [MEMBERS_SHOW_LIST, MEMBERS_ADD, MEMBERS_EDIT]);
      return true;
    }
    else if (text == INVENTORY) {          
      showMenu(userData.telegramId, 'Яку операцію бажаєте виконати?', [INVENTORY_OUT, INVENTORY_IN, INVENTORY_TRANSFER, INVENTORY_BALANCE]);      
      return true;
    }
  }
}
