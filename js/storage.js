/**
 * file         storage.js
 *
 * description  Uses local storage to save the contents of the data array. 
 *              On window close the data is saved, and on window load the 
 *              data is loaded. 
 */

function storeData() {
    localStorage.setItem('CoenDegreeAduit', JSON.stringify(data));
}

function loadData() {
    var temp = localStorage.getItem('CoenDegreeAduit');
    if(temp == "null"){
        return;
    }
    data = JSON.parse(temp);
    classLogic();
}

window.onbeforeunload = function(){
    storeData();  
}