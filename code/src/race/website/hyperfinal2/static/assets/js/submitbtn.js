function senddata() {
var phone = document.getElementById('phone').value

var url = "main.html?phone=" + encodeURIComponent(phone);
window.location.href = url;
};

function qremailsend() {


var url = "emailsent.html";
window.location.href = url;
};

function nearmemap() {
var queryString = decodeURIComponent(window.location.search); 
    queryString = queryString.substring(1);
var queries = queryString.split("=");
var url = "nearme.html?phone=" + encodeURIComponent(queries[1]);
window.location.href = url;
};

function getname() {
  var queryString = decodeURIComponent(window.location.search); 
    queryString = queryString.substring(1);
var queries = queryString.split("=");
document.getElementById('namelabel').innerHTML = queries[1]
    
};

function generateqr() {

var typeNumber = 14;
var errorCorrectionLevel = 'L';
var qr = qrcode(typeNumber, errorCorrectionLevel);
qr.addData('BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO');
qr.make();
document.getElementById('placeHolder').innerHTML = qr.createImgTag();
};

function senddata() {
var phone = document.getElementById('phone').value

var url = "main.html?phone=" + encodeURIComponent(phone);
window.location.href = url;
};

function gobackhome() {

var url = "main.html";
window.location.href = url;

};

function backoffer() {


var url = "offerpage.html" ;
window.location.href = url;
};

