//bot token
var telegram_bot_id = "6669191552:AAHknKSIT2kMeog39Qx7eS2RijzBhStvwDQ"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
var chat_id = 1107759940;
var u_name, email, message;
var ready = function() {
    u_name = document.getElementById("name").value;
    tel = document.getElementById("email").value;
    maydon = document.getElementById("subject").value;
    message = document.getElementById("message").value;
    message = "Ismi: " + u_name + "\nTelefon raqami: " + tel + "\nHudud Maydoni: " + maydon + "Xabar" + message;

};
var sendtelegram = function() {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
    return false;
};