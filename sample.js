var Cryptr = require("cryptr"),
  cryptr = new Cryptr("devnami");

var encstring = cryptr.encrypt("SAmple text");
var decstring = cryptr.decrypt(encstring);

console.log("encrypted string: " + encstring);

console.log("decrpted string: " + decstring);
