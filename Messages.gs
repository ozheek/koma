/* ТЕКСТИ */
var MESSAGES_NO_ALLIASE_FOUND = 'В <a href="https://mail.google.com/mail/u/0/#settings/accounts">налаштуваннях пошти</a> <b>не прописаний ваш електронний адрес</b>, ми не можемо відправити лист від вашого імені, тому відправимо від адреси за замовченням <b>{0} ({1})</b>.';

function sendEmail(telegramId, emailAddress, subject, message)
{
  var fromEmailAddress = CLUB_EMAIL_ADDRESS;
  var fromName = FULL_CLUB_NAME;
  var aliase = null;
  
  if (telegramId)
  {
    var memberInfo = getMemberInfo(MEMBERS_HEADER_TELEGRAM_ID, telegramId);
    
    if (!memberInfo) {
      var memberEmailAddress = memberInfo.fields[MEMBERS_HEADER_EMAIL_ADDRESS];
      fromName = memberInfo.fullName;
      
      var aliases = GmailApp.getAliases();
      
      aliases.forEach(function(item)
                      {
                        if (item == memberEmailAddress)
                        {
                          aliase = item;
                        }
                      });
      
      if (aliase)
      {
        fromEmailAddress = memberEmailAddress;
      }
      else {
        sendText(telegramId, format(MESSAGES_NO_ALLIASE_FOUND, fromName, fromEmailAddress));
      }
    }
  }

  var options = { name : fromName, from : fromEmailAddress.toString()};
  log(JSON.stringify(options));
  
  options = { htmlBody : message.replaceAll('\n', '<br/>'), name : 'КОМА' };
  GmailApp.sendEmail(emailAddress, subject, stripHTMLTags(message), options);   
}

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
