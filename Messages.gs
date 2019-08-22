
function sendMessageToOfficer(position, message)
{
  var userData = getMemberInfo(MEMBERS_HEADER_POSITION, position);
  if (!userData) {
    return false;
  }
  
  showMenu(userData.telegramId, message);
  return true;
}
