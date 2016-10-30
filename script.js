var data = {
    "1_fall":[],
    "1_winter":[],
    "1_spring":[],
    "1_summer":[],
    "2_fall":[],
    "2_winter":[],
    "2_spring":[],
    "2_summer":[],
    "3_fall":[],
    "3_winter":[],
    "3_spring":[],
    "3_summer":[],
    "4_fall":[],
    "4_winter":[],
    "4_spring":[],
    "4_summer":[]
}

var quarterArray = [
    '#1_fall', '#1_winter', '#1_spring', '#1_summer',
    '#2_fall', '#2_winter', '#2_spring', '#2_summer',
    '#3_fall', '#3_winter', '#3_spring', '#3_summer',
    '#4_fall', '#4_winter', '#4_spring', '#4_summer'
];

var course = [
    "COEN_010", "COEN_011", "COEN_012", "COEN_020", "COEN_021", "COEN_070", 
    "COEN_122", "COEN_146", "COEN_171", "COEN_174", "COEN_175", "COEN_177",  
    "COEN_179", "COEN_194", "COEN_195", "COEN_196", "ENGR_001", "MATH_011", 
    "MATH_012", "MATH_013", "MATH_014", "MATH_053", "PHYS_031", "PHYS_032", 
    "PHYS_033", "CHEM_011", "ELEN_050", "ELEN_153", "COEN_019", "MATH_051",
    "AMTH_106", "MATH_022", "AMTH_108", "MATH_122", "MATH_053", "MATH_166", 
    "HIST_091", "TESP_004", "SCTR_065", "TESP_121", "EBGR_019", "SOCI_033", 
    "ECON_001", "ENGR_110", "POLY_002", "MATH_118", "ENGL_181", 
    "ENGL_001A", "ENGL_001B", 
    "ENGL_011A", "ENGL_011B" 
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
    "COEN_194":["COEN_194"],
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
    "POLY_002":["CNI3","SOSC"]
};


$(document).ready(function() {
    $("#year").select2()  
    $("#quarter").select2()     
    $("#courseEntry").select2({data:course})
});

function add(){
    var y = $("#year").select2().val();
    var q = $("#quarter").select2().val();
    var c = $("#courseEntry").select2().val();
    var code = y + "_" + q;
    var obj = { year:y,     quarter:q,  courseClass:c}
    alert(JSON.stringify(obj, null, 4));
    data[code].push(c);
    document.getElementById(code).innerHTML += 
    // '<div title="' + code + '" ' +  'onClick="removeCourse(this)">' + c + '</div>' + "\n";
    '<div data-quarter="' + code + '" data-courseid="' + c + '" onClick="removeCourse(this)">' + c + '</div>' + "\n";

    checkRequirements(c);
}
  
function removeCourse(obj){
    var quarter = obj.getAttribute("data-quarter");
    var courseToBeDeleted = obj.getAttribute("data-courseid");
    var index = -1;

    for(var i = 0; i < data[quarter].length; i++){
        // alert(data[id][i]);
        if(courseToBeDeleted == data[quarter][i]){
            index = i;
        }
    }
    if(index != -1) {
        data[quarter].splice(index, 1);
    }
    $(obj).remove();

    $.each(requirements[courseToBeDeleted], function(index,value) {
        setToRed(value);
    })
}


// $(document).ready(function() {
//     for(var i = 0; i < course.length; i++) {
//         document.getElementById(course[i]).onclick = setToGreen();   
//     }
// });

// check classes in one quarter
function checkQuarter(quarter) {
    var courseArray = [];
    $(quarter + ' :selected').each(function(i, selected){
        courseArray[i] = $(selected).text();
    });
    for(i = 0; i < courseArray.length; i++){
        console.log(courseArray[i]);
        checkRequirements(courseArray[i]);
    }
}

// check requirements for one course
function checkRequirements(course) {
    $.each(requirements[course], function(index,value) {
        setToGreen(value);
    })
}

// update course list status on click
$(document).ready(function() {
    $("#submit").click(function(){
        checkAllReqs();
    });
});


function checkAllReqs(){
    $.each(quarterArray, function(index, value) {
        checkQuarter(value);
    })
}


function setToGreen(value) {
    document.getElementById(value).classList.remove('btn-danger');
    document.getElementById(value).classList.add('btn-success');
}

function setToRed(value) {
    document.getElementById(value).classList.remove('btn-success');
    document.getElementById(value).classList.add('btn-danger');
} 
