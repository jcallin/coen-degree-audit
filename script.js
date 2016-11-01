// Always running
$(document).ready(function() { 
    $("#courseEntry").select2({data:course})
});

// Add a new class to the data array and change the color of the cell 
function add(){
    var courseEntry = $("#courseEntry").select2().val();
    data.push(courseEntry);
    addNewListElement(courseEntry);
    checkRequirements();
}

// Adds courseEntry to list of taken classes
function addNewListElement(courseEntry){
    document.getElementById("list").innerHTML += 
    '<li id="data_' + courseEntry + '" onclick="removeCourse(this)">' + courseEntry + '</li>' + "\n";
}

// When a course (by id) is removed, it is removed from the data 
// array and the color of the req-cell is then turned to red. 
function removeCourse(obj){
    var temp = obj.id;
    var id = temp.substring(5,temp.length);

    // get the index of the course in the array
    var index = -1;
    for(var i = 0; i < data.length; i++){
        if(id == data[i]){
            index = i;
        }
    }
    if(index != -1) {
        data.splice(index, 1); // removes the data from the array 
    }

    // sets the reqCell to red
    removeRequirement(id); 

    // removes the course from the list of taken courses
    $(obj).remove(); 

    // checks incase the removed class fulfilled two requirements 
    checkRequirements(); 
}


// check requirements for one course
function checkRequirements(){
    for(var i = 0; i < data.length; i++){
        $.each(requirements[data[i]], function(index,value) {
            setGreen(value);
        })
    }
}

// sets the required cell to red
function removeRequirement(obj){
    $.each(requirements[obj], function(index,value) {
        setRed(value);
    })
}

// sets a required cell to green
function setGreen(value) {
    document.getElementById(value).classList.remove('btn-danger');
    document.getElementById(value).classList.add('btn-success');
}

// sets a required cell to red
function setRed(value) {
    document.getElementById(value).classList.remove('btn-success');
    document.getElementById(value).classList.add('btn-danger');
}


// Click the required cell to toggle the color between red and green
function toggleColor(a){
    var id = a.id;
    if(document.getElementById(id).classList.contains('btn-success')){
        setRed(id);
    }else{
        setGreen(id);
    }
}


// Creates Cookie
var createCookie = function(name, value, days){
    var expires;
    if(days){
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else{
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}
// Gets Cookie
function getCookie(c_name){
    if(document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if(c_start != -1){
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if(c_end == -1){
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}

// Writes the contents of the data array to a cookie
function storeData(){
    var json_str = JSON.stringify(data);
    var str = "'" + json_str + "'"
    createCookie('degree_cookie', str);
}

// Loads the array of taken classes from the cookie and 
// stores the taken-classes into the data array
function loadData(){
    var cookieString =  getCookie('degree_cookie');
    for(var i = 3; i < cookieString.length - 1;){
        var courseEntry = cookieString.substring(i, i + 8);
        data.push(courseEntry);
        i += 11;
        addNewListElement(courseEntry);
    }
    checkRequirements();
}