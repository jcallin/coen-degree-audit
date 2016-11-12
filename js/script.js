/**
 * file         script.js
 *
 * description  
 */

// returns whether or not the parameter is array of coursesCoenMajor
function isCoenClass(id){
    for(var i = 0; i < coursesCoenMajor.length; i++){
        if(id == coursesCoenMajor[i]){
            return true;
        }
    }
    return false;
}

function isAllowedInput(id){
    for(var i = 0; i < allCourses.length; i++){
        if(id == allCourses[i]){
            return true;
        }
    }
    return false;
}

function isThirdAdd(id){
    var count = 0;
    for(var i = 0; i < data.length; i++){
        if(count == 1){
                return true;
        }
        if(id == data[i]){
            count += 1;
        }
    }
    return false;
}

// Adds course id to array
function addData(id){
    data.push(id);
    console.log("Add to Data: " + id);
}

// Removes specified course id from the array
function removeData(id){
    var index = -1;
    for(var i = 0; i < data.length; i++){
        if(id == data[i]){
            index = i;
        }
    }
    if(index != -1) {
        data.splice(index, 1); 
    }
    console.log(index);
}


// Check box -----------------------------------------------------------------

// returns if the check box of the given course id is checked or not
function isChecked(id){
    if(document.getElementById(id).checked){
        return true;
    }
    return false;
}

function setToChecked(id){
    document.getElementById(id).checked = true;
}

function setToUnChecked(id){
    document.getElementById(id).checked = false;
}


// toggles the checkbox. 
function toggle(obj){
    var id = obj.id;
    if(isChecked(id)){
        addData(id);
    } else {
        removeData(id);
    }
    classLogic();
}

// Requirements List -------------------------------------------------------------


// Sets the required text to green and creates a click-able class (click to remove) 
function setGreen(req, id){
    document.getElementById(req).innerHTML += 
    " - " +  '<small class="requirement" id="' + id + '"onclick="removeListElement(this)">' + id + '</small> \n';
    document.getElementById(req).style.color = "green";
}

function isGreen(id){
    if(document.getElementById(id).style.color == "green"){
        return true;
    }
    return false;
}

function addFromTextbox(){
    var input = document.getElementById('input').value;
    if(!isAllowedInput(input) || isThirdAdd(input)){
        alert("This class is not in our system or you have added a class more than twice.\nAlso, please make sure the course is typed in the correct format.\nEx) COEN_010");
        classLogic();
        return;
    }
    addData(input);
    classLogic();
}


// Main Logic -------------------------------------------------------------

function classLogic(){
    reset();
    for(var i = 0; i < data.length; i++){

        input = data[i];

        // Check if is coen class();
        if(isCoenClass(input)){
            setToChecked(input);
        }
        else if(input == "COEN_161" || input == "COEN_162" || input == "COEN_163" || 
                input == "COEN_120" || input == "COEN_160" || input == "COEN_178" ){
            addToList("techElectives", input);
        }
        else if(input == "ENGL_01A"){
            if(!isGreen("CTW1")){
                setGreen("CTW1", input);
            } else {
                addToList("EEE", input);
            }
        }
        else if(input == "ENGL_01B"){
            if(!isGreen("CTW2")){
                setGreen("CTW2", input);
            } else {
                addToList("EEE", input);
            }
        }
        else if(input == "ENGL_11A" || input == "HIST_11A" || input == "PHIL_11A"){
            if(!isGreen("CNI1")){
                setGreen("CNI1", input);
            } else {
                addToList("EEE", input);
            }
        }
        else if(input == "ENGL_11B" || input == "HIST_11B" || input == "PHIL_11B"){
            if(!isGreen("CNI2")){
                setGreen("CNI2", input);
            } else {
                addToList("EEE", input);
            }
        }
        else if(input == "HIST_091"){
            if(!isGreen("CNI3")){
                setGreen("CNI3", input);
            } else {
                addToList("EEE", input);
            }
        }
        else if(input == "TESP_002" || input == "TESP_004" || input == "RSOC_009"){
            if(!isGreen("RTC1")){
                setGreen("RTC1", input);
            } else {
                addToList("EEE", input);
            }
        }
        else if(input == "SCTR_065" || input == "RSOC_027" || input == "RSOC_038"){
            if(!isGreen("RTC2")){
                setGreen("RTC2", input);
            } else {
                addToList("EEE", input);
            }
        }
        else if(input == "TESP_121" || input == "TESP_124"){
            if(!isGreen("RTC3")){
                setGreen("RTC3", input);
            } else {
                addToList("EEE", input);
            }
        }
        else if(input == "SOCI_033" || input == "ETHN_005"){
            if(!isGreen("DVSY")){
                setGreen("DVSY", input);
            } else {
                addToList("EEE", input);
            }
        }
        else if(input == "ECON_001" || input == "ECON_002" || input == "PSYC_001"){
            if(!isGreen("SOSC")){
                setGreen("SOSC", input);
            } else {
                addToList("EEE", input);
            }
        }
        else if(input == "ENGR_111"){
            if(!isGreen("ELSJ")){
                setGreen("ELSJ", input);
            } else {
                addToList("EEE", input);
            }
        }
        else if(input == "ENGR_019"){
            if(!isGreen("ETHC")){
                setGreen("ETHC", input);
            } else {
                addToList("EEE", input);
            }
        }

        // Double Dips
        else if(input == "POLI_002"){
            if(!isGreen("CNI3") && !isGreen("SOSC")){
                setGreen("CNI3", input);
                setGreen("SOSC", input);
            }
            else if(isGreen("CNI3") && !isGreen("SOSC")){
                setGreen("SOSC", input);
            }
            else if(!isGreen("CNI3") && isGreen("SOSC")){
                setGreen("CNI3", input);
            }
            else if(isGreen("CNI3") && isGreen("SOSC")){
                addToList("EEE", input);
            }
        }
        else if(input == "TESP_046"){
            if(!isGreen("RTC2") && !isGreen("ELSJ")){
                setGreen("RTC2", input);
                setGreen("ELSJ", input);
            }
            else if(isGreen("RTC2") && !isGreen("ELSJ")){
                setGreen("ELSJ", input);
            }
            else if(!isGreen("RTC2") && isGreen("ELSJ")){
                setGreen("RTC2", input);
            }
            else{
                addToList("EEE", input);
            }
        }
        else if(input == "TESP_119"){
            if(!isGreen("RTC3") && !isGreen("ETHC")){
                setGreen("RTC3", input);
                setGreen("ETHC", input);
            }
            else if(isGreen("RTC3") && !isGreen("ETHC")){
                setGreen("ETHC", input);
            }
            else if(!isGreen("RTC3") && isGreen("ETHC")){
                setGreen("RTC3", input);
            }
            else{
                addToList("EEE", input);
            }
        }
        else{
            addToList("EEE", input);
        }
    } 

    if( isChecked("ENGL_181") && isChecked("COEN_194") && 
        isChecked("COEN_195") && isChecked("COEN_196") ){
        if(!isGreen("ARTS")){
            setGreen("ARTS", "ENGL 181 + SD");
        }
        if(!isGreen("STSS")){
            setGreen("STSS", "ENGL 181 + SD");
        }    
    }

    if( isChecked("ENGR_001") && isChecked("COEN_194") && 
        isChecked("COEN_195") && isChecked("COEN_196") ){
        if(!isGreen("CVEG")){
            setGreen("CVEG", "ENGR 1 + SD");
        }  
    }

    if(isChecked("CHEM_011")){
        if(!isGreen("NTSC")){
            setGreen("NTSC", "CHEM 11");
        }      
    }

    if(isChecked("ENGL_181")){
        if(!isGreen("ADVW")){
            setGreen("ADVW", "ENGL 181");
        }      
    }
}


var dataEEE = [];
var techElectives = [];
function addToList(list, item){
    if(list == "EEE"){
        if(dataEEE.indexOf(item) == -1){
            dataEEE.push(item);
            document.getElementById(list).innerHTML += 
            '<li id="' + item + '"onclick="removeListElement(this)"> <i class="glyphicon glyphicon glyphicon-remove"></i> '+ item + '</li> \n';
        }
    } else {
        // There can only be three Technical Electives
        if(techElectives.length == 3){
            addToList("EEE", item);
            return;
        }
        if(techElectives.indexOf(item) == -1){
            techElectives.push(item);
            document.getElementById(list).innerHTML += 
            '<li id="' + item + '"onclick="removeListElement(this)"><i class="glyphicon glyphicon glyphicon-remove"></i> ' + item + '</li> \n';
        }
    }
}

function removeListElement(obj){
    var id = obj.id;
    removeData(id);
    $(obj).remove();
    classLogic();
}

// reset 
function reset(){

    for(var i = 0; i < coursesCoenMajor.length; i++){
        setToUnChecked(coursesCoenMajor[i]);
    }

    document.getElementById("EEE").innerHTML = "<lh> Educational Enrichment Electives </lh> ";
    dataEEE = [];

    document.getElementById("techElectives").innerHTML = "<lh> Tech Electives </lh> ";
    techElectives = [];

    document.getElementById("ADVW").innerHTML = "Advance Writing";
    document.getElementById("ADVW").style.color = "black";

    document.getElementById("ARTS").innerHTML = "Arts";
    document.getElementById("ARTS").style.color = "black";

    document.getElementById("STSS").innerHTML = "Science Technology and Society";
    document.getElementById("STSS").style.color = "black";

    document.getElementById("CVEG").innerHTML = "Civic Engagement";
    document.getElementById("CVEG").style.color = "black";

    document.getElementById("NTSC").innerHTML = "Natural Science";
    document.getElementById("NTSC").style.color = "black";

    document.getElementById("CTW1").innerHTML = "Critical Thinking and Writing 1";
    document.getElementById("CTW1").style.color = "black";
    document.getElementById("CTW2").innerHTML = "Critical Thinking and Writing 2";
    document.getElementById("CTW2").style.color = "black";

    document.getElementById("CNI1").innerHTML = "Cultures and Ideas 1";
    document.getElementById("CNI1").style.color = "black";
    document.getElementById("CNI2").innerHTML = "Cultures and Ideas 2";
    document.getElementById("CNI2").style.color = "black";
    document.getElementById("CNI3").innerHTML = "Cultures and Ideas 3";
    document.getElementById("CNI3").style.color = "black";


    document.getElementById("RTC1").innerHTML = "Religion Theology and Culture 1";
    document.getElementById("RTC1").style.color = "black";
    document.getElementById("RTC2").innerHTML = "Religion Theology and Culture 2";
    document.getElementById("RTC2").style.color = "black";
    document.getElementById("RTC3").innerHTML = "Religion Theology and Culture 3";
    document.getElementById("RTC3").style.color = "black";

    document.getElementById("DVSY").innerHTML = "Diversity";
    document.getElementById("DVSY").style.color = "black";

    document.getElementById("SOSC").innerHTML = "Social Science";
    document.getElementById("SOSC").style.color = "black";

    document.getElementById("ELSJ").innerHTML = "Experiential Learning for Social Justice";
    document.getElementById("ELSJ").style.color = "black";

    document.getElementById("ETHC").innerHTML = "Ethics";
    document.getElementById("ETHC").style.color = "black";

    document.getElementById("LANG").innerHTML = "Language";
    document.getElementById("LANG").style.color = "black";
}
