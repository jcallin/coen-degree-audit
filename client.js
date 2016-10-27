// make quarter array
var quarterArray = [
    '#1_FALL',
    '#1_WNTR',
    '#1_SPNG',
    '#1_SUMM',
    '#2_FALL',
    '#2_WNTR',
    '#2_SPNG',
    '#2_SUMM',
    '#3_FALL',
    '#3_WNTR',
    '#3_SPNG',
    '#3_SUMM',
    '#4_FALL',
    '#4_WNTR',
    '#4_SPNG',
    '#4_SUMM'
];

// check classes in one quarter
function checkQuarter (quarter) {
    var courseArray = [];
    $(quarter+' :selected').each(function(i, selected){
        courseArray[i] = $(selected).text();
    });
    for(i=0;i<courseArray.length;i++){
        console.log(courseArray[i]);
        checkRequirements(courseArray[i]);
    }
}

// check requirements for one course
function checkRequirements (course) {
    $.each(requirements[course], function(index,value) {
        document.getElementById(value).style.background='green';
    })
}

// update course list status on click
$(document).ready(function() {
    $("#submit").click(function(){
        // update degree tracker
        $.each(quarterArray, function(index, value) {
            checkQuarter(value);
        })
    });
});