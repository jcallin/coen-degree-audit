var data = [];

var course = [
    "COEN_010", "COEN_011", "COEN_012", "COEN_020", "COEN_021", "COEN_070", "COEN_122", "COEN_146", 
    "COEN_171", "COEN_174", "COEN_175", "COEN_177", "COEN_179", "COEN_194", "COEN_195", "COEN_196", 
    "ENGR_001", "MATH_011", "MATH_012", "MATH_013", "MATH_014", "MATH_053", "PHYS_031", "PHYS_032", 
    "PHYS_033", "CHEM_011", "ELEN_050", "ELEN_153", "COEN_019", "MATH_051", "AMTH_106", "MATH_022", 
    "AMTH_108", "MATH_122", "MATH_053", "MATH_166", "HIST_091", "TESP_004", "SCTR_065", "TESP_121", 
    "EBGR_019", "SOCI_033", "ECON_001", "ENGR_110", "POLY_002", "MATH_118", "ENGL_181", "COEN_161", 
    "COEN_162", "COEN_163", "ENGL_001A", "ENGL_001B", "ENGL_011A", "ENGL_011B" 
];

var requirements = {
    // Add courses that fulfill requirement to respective array
    // key: course
    // value: requirement fulfilled
    
    // COEN Major Requirements
    "ENGR_001":["ENGR_001"],
    "COEN_010":["COEN_010"],
    "COEN_011":["COEN_011"],
    "COEN_012":["COEN_012"],
    
    "COEN_020":["COEN_020"],
    "COEN_021":["COEN_021"],
    "COEN_070":["COEN_070"],
    "COEN_122":["COEN_122"],
    "COEN_146":["COEN_146"],
    "COEN_171":["COEN_171"],
    "COEN_174":["COEN_174"],
    "COEN_175":["COEN_175"],
    "COEN_177":["COEN_177"],
    "COEN_179":["COEN_179"],
    "COEN_194":["COEN_194", 
                "STSS", 
                "ARTS",
                "CVEG",
                "LANG",
                "MATH"],
    "COEN_195":["COEN_195"],
    "COEN_196":["COEN_196"],
    
    "MATH_011":["MATH_011"],
    "MATH_012":["MATH_012"],
    "MATH_013":["MATH_013"],
    "MATH_014":["MATH_014"],
    "MATH_053":["MATH_053"],
    
    "PHYS_031":["PHYS_031"],
    "PHYS_032":["PHYS_032"],
    "PHYS_033":["PHYS_033"],
    "CHEM_011":["CHEM_011"],
    
    "ELEN_050":["ELEN_050"],
    "ELEN_153":["ELEN_153"],
    
    // cross listings
    "COEN_019":["COEN_019"],
    "MATH_051":["COEN_019"],
    
    "AMTH_106":["AMTH_106"],
    "MATH_022":["AMTH_106"],
    
    "AMTH_108":["AMTH_108"],
    "MATH_122":["AMTH_108"],
    
    // advanced math
    "MATH_053":["MATH_053"],
    "MATH_166":["MATH_053"],
    "MATH_118":["MATH_053"],
    
    // ctw
    "ENGL_001A":["CTW1"],
    "ENGL_001A":["CTW2"],
    
    // advanced writing
    "ENGL_181":["ADVW"],
    
    // c and i
    "ENGL_011A":["CNI1"],
    "ENGL_011B":["CNI2"],
    "HIST_091":["CNI3"],
    
    // rtc
    "TESP_004":["RTC1"],
    "SCTR_065":["RTC2"],
    "TESP_121":["RTC3"],
    
    // ethics
    "ENGR_019":["ETHC"],
    
    // diversity
    "SOCI_033":["DVSY"],
    
    // social science
    "ECON_001":["SOSC"],
    
    // elsj
    "ENGR_110":["ELSJ"],
    
    // double dip classes
    // CNI 3 and Social Science
    "POLY_002":["CNI3","SOSC"],

    "COEN_161":["TCH_ELE1"],
    "COEN_162":["TCH_ELE2"],
    "COEN_163":["TCH_ELE3"]
};

// Always running
$(document).ready(function() { 
    $("#courseEntry").select2({data:course})
});

// Add a new class to the data array and change the color of the cell 
function add(){
    var c = $("#courseEntry").select2().val();
    data.push(c);
    document.getElementById("list").innerHTML += '<li id="data_' + c + '" onclick="removeCourse(this)">' + c + '</li>' + "\n";
    checkRequirements();
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

function toggleColor(a){
    var id = a.id;
    if(document.getElementById(id).classList.contains('btn-success')){
        setRed(id);
    }else{
        setGreen(id);
    }
}

var createCookie = function(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}


function storeData(){
    var json_str = JSON.stringify(data);
    var json = "'" + json_str + "'"
    createCookie('degree_cookie', json);
}

function loadData(){
    var cookieString =  getCookie('degree_cookie');
    // cookieString = cookieString.substring(1, cookieString.length -1);
    for(var i = 3; i < cookieString.length - 1;){
        var c = cookieString.substring(i, i + 8);
        data.push(c);
        i += 11;
        document.getElementById("list").innerHTML += '<li id="data_' + c + '" onclick="removeCourse(this)">' + c + '</li>' + "\n";
    }
    checkRequirements();
}

