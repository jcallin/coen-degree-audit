// Array of all classes that the user has "added"
var data = [];

// Array of all possible courses
var course = [
    "COEN_010", "COEN_011", "COEN_012", "COEN_020", "COEN_021", "COEN_070", "COEN_122", "COEN_146", 
    "COEN_171", "COEN_174", "COEN_175", "COEN_177", "COEN_179", "COEN_194", "COEN_195", "COEN_196", 
    "ENGR_001", "MATH_011", "MATH_012", "MATH_013", "MATH_014", "MATH_053", "PHYS_031", "PHYS_032", 
    "PHYS_033", "CHEM_011", "ELEN_050", "ELEN_153", "COEN_019", "MATH_051", "AMTH_106", "MATH_022", 
    "AMTH_108", "MATH_122", "MATH_053", "MATH_166", "HIST_091", "TESP_004", "SCTR_065", "TESP_121", 
    "EBGR_019", "SOCI_033", "ECON_001", "ENGR_110", "POLY_002", "MATH_118", "ENGL_181", "COEN_161", 
    "COEN_162", "COEN_163", "ENGL_001A", "ENGL_001B", "ENGL_011A", "ENGL_011B", "COEN_120", "COEN_123", "COEN_121" 
];

// Add courses that fulfill requirement to respective array
// key: course
// value: requirement fulfilled
var requirements = {

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
    "ENGL_001B":["CTW2"],
    
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