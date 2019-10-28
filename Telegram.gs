
function setWebhook() {
  var url = telegramUrl + "/setWebhook?url=" + webAppUrl;
  var response = UrlFetchApp.fetch(url);
  
}

function sendText(chatId, text, replyMarkup) {
  try {
    var data = {
      method: "post",
      payload: {
        method: "sendMessage",
        chat_id: String(chatId),
        text: text,
        parse_mode: "HTML",
        reply_markup: replyMarkup,
        disable_web_page_preview: true
      }
    };
    //Browser.msgBox(JSON.stringify(data));
    UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/', data);
  }
  catch(ex) 
  {
    log(JSON.stringify(ex));
  }
}
