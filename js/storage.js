/**
 * file         storage.js
 *
 * description  asdfasdf
 */

function storeCookie() {
    localStorage.setItem('CoenDegreeAduit', JSON.stringify(data));
}

function loadCookie() {
    var temp = localStorage.getItem('CoenDegreeAduit');
    data = JSON.parse(temp);
    classLogic();
}


window.onbeforeunload = function(){
    storeCookie();  
}