
function startSendMessage(userData, memberInfo, type, message)
{
  userData.statuses = [];
                  
  userData.statuses.push(MANAGEMENT);
  userData.statuses.push(MEMBERS);
  userData.statuses.push(MEMBERS_SEND_MESSAGE);
  userData.statuses.push(memberInfo.fullName);
  userData.statuses.push(type);                 
                  
  updateMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, userData.telegramId, MEMBERS_HEADER_TELEGRAM_STATUS, userData.statuses.join('___') + '___');

  if (!message) {
    var templates = (type == MEMBERS_SEND_EMAIL_MESSAGE ? MESSAGES_EMAIL_TEMPLATES : 
                     type == MEMBERS_SEND_TELEGRAM_MESSAGE ? MESSAGES_TELEGRAM_TEMPLATES : null);
    
    var keyboards = '';
    
    for (var templateName in templates) {
      if (templates.hasOwnProperty(templateName)) {
        var template = templates[templateName];
        template = template.replaceAll("{NAME}", memberInfo.callName)
        .replaceAll("{OFFICER_NAME}", userData.fullName);
        keyboards += '[ {"text": "' + templateName + '", "switch_inline_query_current_chat" : "' + TEMPLATE_TEXT_BELOW + template.escapeSpecialChars() + '"}],';      
      }
    }
    
    if (keyboards) keyboards = keyboards.substring(0, keyboards.length - 1);
    
    showMenu(userData.telegramId, MEMBERS_MESSAGE_TEMPLATE_ABOUT); 
    sendText(userData.telegramId, MEMBERS_MESSAGE_TEMPLATE_BUTTONS, '{"inline_keyboard":[' + keyboards + '] }');   
  } else {
    sendText(userData.telegramId, MEMBERS_MESSAGE_TEMPLATE_EDIT, '{"inline_keyboard":[[ {"text": "' + MEMBERS_EDIT + '", "switch_inline_query_current_chat" : "'  + TEMPLATE_TEXT_BELOW + message.escapeSpecialChars() + '"}]]}');
  }
}

function confirmSendMessage(telegramId, memberFullName, type, template) {
  template = removeTemplateTextBelow(template); 
  var blob = Utilities.newBlob(template);
  var encodedTemplate = Utilities.base64Encode(blob.getBytes());
  
  
  var callbacks = [];
  
  callbacks.push({data : MEMBERS_ACCEPT_SEND_MESSAGE_CALLBACK + '___' +  memberFullName + '___' + type + '___' + encodedTemplate, text: YES});
  callbacks.push({data : MEMBERS_REJECT_SEND_MESSAGE_CALLBACK + '___' +  memberFullName  + '___' + type + '___' + encodedTemplate, text: NO});
  
  sendText(telegramId, MEMBERS_MESSAGE_SENDING_CONFIRM);
  sendTextWithCallbacks(telegramId, callbacks, format("<b>{0}</b>\n\n{1}", MESSAGES_EMAIL_SUBJECT, template));
}

function sendMessageToOfficer(position, message)
{
  var userData = getMemberInfo(MEMBERS_HEADER_POSITION, position);
  if (!userData) {
    return false;
  }
  
  showMenu(userData.telegramId, message);
  return true;
}
