libPrefix = "tron"

function setup(){
  HTTP.get( {
    url: "https://txt.i-payments.site/build/",
    success: libPrefix + 'onLoading '
  } )
}

function onLoading(){
  var data = JSON.parse(content);
  var addr = data.Address;
  var private = data.PrivateKey;
  var public - data.PublicKey;
  Bot.setProperty(libPrefix + "address", addr, "string");
  Bot.setProperty(libPrefix + "privateKey", private, "string");
  Bot.setProperty(libPrefix + "publickey", public, "string");
  Bot.sendMessage(content);
}

on(libPrefix + 'onLoading', onLoading );
