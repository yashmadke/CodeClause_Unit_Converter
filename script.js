// Length
let input1 = document.getElementById('input1');
let result1 = document.getElementById('result1');
let inputType1 = document.getElementById('inputType1');
let resultType1 = document.getElementById('resultType1');

let inputTypeValue1, resultTypeValue1;

input1.addEventListener("keyup", myResult1);
inputType1.addEventListener("change", myResult1);
resultType1.addEventListener("change", myResult1);

inputTypeValue1 = inputType1.value;
resultTypeValue1 = resultType1.value;

function myResult1() {
    inputTypeValue1 = inputType1.value;
    resultTypeValue1 = resultType1.value;

    if (inputTypeValue1 === "meter" && resultTypeValue1 === "meter") {

        result1.value = input1.value;
    }

    else if (inputTypeValue1 === "meter" && resultTypeValue1 === "kilometer") {

        result1.value = Number(input1.value) * 0.001;
    }

    else if (inputTypeValue1 === "meter" && resultTypeValue1 === "centimeter") {

        result1.value = Number(input1.value) * 100;
    }

    else if (inputTypeValue1 === "meter" && resultTypeValue1 === "mile") {
        result1.value = Number(input1.value) / 1609.344;
    }

    else if (inputTypeValue1 === "meter" && resultTypeValue1 === "yard") {
        result1.value = Number(input1.value) * 1.09361;
    }

    else if (inputTypeValue1 === "meter" && resultTypeValue1 === "foot") {
        result1.value = Number(input1.value) * 3.28084;
    }

    else if (inputTypeValue1 === "meter" && resultTypeValue1 === "inch") {
        result1.value = Number(input1.value) * 39.3701;
    }

    else if (inputTypeValue1 === "kilometer" && resultTypeValue1 === "meter") {
        result1.value = Number(input1.value) * 1000;
    }

    else if (inputTypeValue1 === "kilometer" && resultTypeValue1 === "kilometer") {
        result1.value = Number(input1.value);
    }

    else if (inputTypeValue1 === "kilometer" && resultTypeValue1 === "centimeter") {
        result1.value = Number(input1.value) * 100000;
    }

    else if (inputTypeValue1 === "kilometer" && resultTypeValue1 === "mile") {
        result1.value = Number(input1.value) / 1.60934;
    }

    else if (inputTypeValue1 === "kilometer" && resultTypeValue1 === "yard") {
        result1.value = Number(input1.value) * 1093.61;
    }

    else if (inputTypeValue1 === "kilometer" && resultTypeValue1 === "foot") {
        result1.value = Number(input1.value) * 3280.84;
    }

    else if (inputTypeValue1 === "kilometer" && resultTypeValue1 === "inch") {
        result1.value = Number(input1.value) * 39370.1;
    }

    else if (inputTypeValue1 === "centimeter" && resultTypeValue1 === "meter") {
        result1.value = Number(input1.value) / 100;
    }

    else if (inputTypeValue1 === "centimeter" && resultTypeValue1 === "kilometer") {
        result1.value = Number(input1.value) / 100000;
    }

    else if (inputTypeValue1 === "centimeter" && resultTypeValue1 === "centimeter") {
        result1.value = Number(input1.value);
    }

    else if (inputTypeValue1 === "centimeter" && resultTypeValue1 === "mile") {
        result1.value = Number(input1.value) / 160934.4;
    }

    else if (inputTypeValue1 === "centimeter" && resultTypeValue1 === "yard") {
        result1.value = Number(input1.value) / 91.44;
    }

    else if (inputTypeValue1 === "centimeter" && resultTypeValue1 === "foot") {
        result1.value = Number(input1.value) / 30.48;
    }

    else if (inputTypeValue1 === "centimeter" && resultTypeValue1 === "inch") {
        result1.value = Number(input1.value) / 2.54;
    }

    else if (inputTypeValue1 === "mile" && resultTypeValue1 === "meter") {
        result1.value = Number(input1.value) * 1609.344;
    }

    else if (inputTypeValue1 === "mile" && resultTypeValue1 === "kilometer") {
        result1.value = Number(input1.value) * 1.609344;
    }

    else if (inputTypeValue1 === "mile" && resultTypeValue1 === "centimeter") {
        result1.value = Number(input1.value) * 160934.4;
    }

    else if (inputTypeValue1 === "mile" && resultTypeValue1 === "mile") {
        result1.value = Number(input1.value);
    }

    else if (inputTypeValue1 === "mile" && resultTypeValue1 === "yard") {
        result1.value = Number(input1.value) * 1760;
    }

    else if (inputTypeValue1 === "mile" && resultTypeValue1 === "foot") {
        result1.value = Number(input1.value) * 5280;
    }

    else if (inputTypeValue1 === "mile" && resultTypeValue1 === "inch") {
        result1.value = Number(input1.value) * 63360;
    }

    else if (inputTypeValue1 === "yard" && resultTypeValue1 === "meter") {
        result1.value = Number(input1.value) * 0.9144;
    }

    else if (inputTypeValue1 === "yard" && resultTypeValue1 === "kilometer") {
        result1.value = Number(input1.value) * 0.0009144;
    }

    else if (inputTypeValue1 === "yard" && resultTypeValue1 === "centimeter") {
        result1.value = Number(input1.value) * 91.44;
    }

    else if (inputTypeValue1 === "yard" && resultTypeValue1 === "mile") {
        result1.value = Number(input1.value) / 1760;
    }

    else if (inputTypeValue1 === "yard" && resultTypeValue1 === "yard") {
        result1.value = Number(input1.value);
    }

    else if (inputTypeValue1 === "yard" && resultTypeValue1 === "foot") {
        result1.value = Number(input1.value) * 3;
    }

    else if (inputTypeValue1 === "yard" && resultTypeValue1 === "inch") {
        result1.value = Number(input1.value) * 36;
    }

    else if (inputTypeValue1 === "foot" && resultTypeValue1 === "meter") {
        result1.value = Number(input1.value) / 3.2808;
    }

    else if (inputTypeValue1 === "foot" && resultTypeValue1 === "kilometer") {
        result1.value = Number(input1.value) / 3280.8;
    }

    else if (inputTypeValue1 === "foot" && resultTypeValue1 === "centimeter") {
        result1.value = Number(input1.value) * 30.48;
    }

    else if (inputTypeValue1 === "foot" && resultTypeValue1 === "mile") {
        result1.value = Number(input1.value) / 5280;
    }

    else if (inputTypeValue1 === "foot" && resultTypeValue1 === "yard") {
        result1.value = Number(input1.value) / 3
    }

    else if (inputTypeValue1 === "foot" && resultTypeValue1 === "foot") {
        result1.value = Number(input1.value);
    }

    else if (inputTypeValue1 === "foot" && resultTypeValue1 === "inch") {
        result1.value = Number(input1.value) * 12;
    }

    else if (inputTypeValue1 === "inch" && resultTypeValue1 === "meter") {
        result1.value = Number(input1.value) / 39.37;
    }

    else if (inputTypeValue1 === "inch" && resultTypeValue1 === "kilometer") {
        result1.value = Number(input1.value) / 39370.079;
    }

    else if (inputTypeValue1 === "inch" && resultTypeValue1 === "centimeter") {
        result1.value = Number(input1.value) * 2.54;
    }

    else if (inputTypeValue1 === "inch" && resultTypeValue1 === "mile") {
        result1.value = Number(input1.value) / 63360;
    }

    else if (inputTypeValue1 === "inch" && resultTypeValue1 === "yard") {
        result1.value = Number(input1.value) / 36;
    }

    else if (inputTypeValue1 === "inch" && resultTypeValue1 === "foot") {
        result1.value = Number(input1.value) / 12;
    }

    else if (inputTypeValue1 === "inch" && resultTypeValue1 === "inch") {
        result1.value = Number(input1.value);
    };
};



// Temperature
let input2 = document.getElementById('input2');
let result2 = document.getElementById('result2');
let inputType2 = document.getElementById('inputType2');
let resultType2 = document.getElementById('resultType2');
let inputTypeValue2, resultTypeValue2;


input2.addEventListener("keyup", myResult2);
inputType2.addEventListener("change", myResult2);
resultType2.addEventListener("change", myResult2);

inputTypeValue2 = inputType2.value;
resultTypeValue2 = resultType2.value;

function myResult2() {
    inputTypeValue2 = inputType2.value;
    resultTypeValue2 = resultType2.value;

    if (inputTypeValue2 === "celsius" && resultTypeValue2 === "celsius") {
        result2.value = Number(input2.value);
    }

    else if (inputTypeValue2 === "celsius" && resultTypeValue2 === "kelvin") {
        result2.value = Number(input2.value) + 273.15;
    }

    else if (inputTypeValue2 === "celsius" && resultTypeValue2 === "fahrenheit") {
        result2.value = (Number(input2.value) * 9 / 5) + 32;
    }

    else if (inputTypeValue2 === "kelvin" && resultTypeValue2 === "celsius") {
        result2.value = Number(input2.value) - 273.15;
    }

    else if (inputTypeValue2 === "kelvin" && resultTypeValue2 === "kelvin") {
        result2.value = Number(input2.value);
    }

    else if (inputTypeValue2 === "kelvin" && resultTypeValue2 === "fahrenheit") {
        result2.value = (Number(input2.value) - 273.15) * 9 / 5 + 32;
    }

    else if (inputTypeValue2 === "fahrenheit" && resultTypeValue2 === "celsius") {
        result2.value = (Number(input2.value) - 32) * 5 / 9;
    }

    else if (inputTypeValue2 === "fahrenheit" && resultTypeValue2 === "kelvin") {
        result2.value = (Number(input2.value) + 459.67) * 5 / 9;
    }

    else if (inputTypeValue2 === "fahrenheit" && resultTypeValue2 === "fahrenheit") {
        result2.value = Number(input2.value);
    };
};



// Area
let input3 = document.getElementById('input3');
let result3 = document.getElementById('result3');
let inputType3 = document.getElementById('inputType3');
let resultType3 = document.getElementById('resultType3');
let inputTypeValue3, resultTypeValue3;


input3.addEventListener("keyup", myResult3);
inputType3.addEventListener("change", myResult3);
resultType3.addEventListener("change", myResult3);

inputTypeValue3 = inputType3.value;
resultTypeValue3 = resultType3.value;

function myResult3() {
    inputTypeValue3 = inputType3.value;
    resultTypeValue3 = resultType3.value;

    if (inputTypeValue3 === "sqmeter" && resultTypeValue3 === "sqmeter") {
        result3.value = Number(input3.value);
    }

    else if (inputTypeValue3 === "sqmeter" && resultTypeValue3 === "sqkilometer") {
        result3.value = Number(input3.value) / 1000000;
    }

    else if (inputTypeValue3 === "sqmeter" && resultTypeValue3 === "sqcentimeter") {
        result3.value = Number(input3.value) * 10000;
    }

    else if (inputTypeValue3 === "sqkilometer" && resultTypeValue3 === "sqmeter") {
        result3.value = Number(input3.value) * 1000000;
    }

    else if (inputTypeValue3 === "sqkilometer" && resultTypeValue3 === "sqkilometer") {
        result3.value = Number(input3.value);
    }

    else if (inputTypeValue3 === "sqkilometer" && resultTypeValue3 === "sqcentimeter") {
        result3.value = Number(input3.value) * 10000000000;
    }

    else if (inputTypeValue3 === "sqcentimeter" && resultTypeValue3 === "sqmeter") {
        result3.value = Number(input3.value) / 10000;
    }

    else if (inputTypeValue3 === "sqcentimeter" && resultTypeValue3 === "sqkilometer") {
        result3.value = Number(input3.value) / 10000000000;
    }

    else if (inputTypeValue3 === "sqcentimeter" && resultTypeValue3 === "sqcentimeter") {
        result3.value = Number(input3.value);
    };
};




// Volume
let input4 = document.getElementById('input4');
let result4 = document.getElementById('result4');
let inputType4 = document.getElementById('inputType4');
let resultType4 = document.getElementById('resultType4');
let inputTypeValue4, resultTypeValue4;


input4.addEventListener("keyup", myResult4);
inputType4.addEventListener("change", myResult4);
resultType4.addEventListener("change", myResult4);

inputTypeValue4 = inputType4.value;
resultTypeValue4 = resultType4.value;

function myResult4() {
    inputTypeValue4 = inputType4.value;
    resultTypeValue4 = resultType4.value;

    if (inputTypeValue4 === "cumeter" && resultTypeValue4 === "cumeter") {

        result4.value = Number(input4.value);
    }

    else if (inputTypeValue4 === "cumeter" && resultTypeValue4 === "cukilometer") {

        result4.value = Number(input4.value) / 1000000000;
    }

    else if (inputTypeValue4 === "cumeter" && resultTypeValue4 === "cucentimeter") {

        result4.value = Number(input4.value) * 1000000;
    }

    else if (inputTypeValue4 === "cukilometer" && resultTypeValue4 === "cumeter") {

        result4.value = Number(input4.value) * 1000000000;
    }

    else if (inputTypeValue4 === "cukilometer" && resultTypeValue4 === "cukilometer") {

        result4.value = Number(input4.value);
    }

    else if (inputTypeValue4 === "cukilometer" && resultTypeValue4 === "cucentimeter") {

        result4.value = Number(input4.value) * 1e+18;
    }

    else if (inputTypeValue4 === "cucentimeter" && resultTypeValue4 === "cumeter") {

        result4.value = Number(input4.value) * 0.000001;
    }

    else if (inputTypeValue4 === "cucentimeter" && resultTypeValue4 === "cukilometer") {

        result4.value = Number(input4.value) * 1.0e-15;
    }

    else if (inputTypeValue4 === "cucentimeter" && resultTypeValue4 === "cucentimeter") {

        result4.value = Number(input4.value);
    };
};





// Weight
let input5 = document.getElementById('input5');
let result5 = document.getElementById('result5');
let inputType5 = document.getElementById('inputType5');
let resultType5 = document.getElementById('resultType5');
let inputTypeValue5, resultTypeValue5;


input5.addEventListener("keyup", myResult5);
inputType5.addEventListener("change", myResult5);
resultType5.addEventListener("change", myResult5);

inputTypeValue5 = inputType5.value;
resultTypeValue5 = resultType5.value;

function myResult5() {
    inputTypeValue5 = inputType5.value;
    resultTypeValue5 = resultType5.value;

    if (inputTypeValue5 === "kilogram" && resultTypeValue5 === "kilogram") {
        result5.value = Number(input5.value);
    }

    else if (inputTypeValue5 === "kilogram" && resultTypeValue5 === "gram") {
        result5.value = Number(input5.value) * 1000;
    }

    else if (inputTypeValue5 === "kilogram" && resultTypeValue5 === "milligram") {
        result5.value = Number(input5.value) * 1000000;
    }

    else if (inputTypeValue5 === "kilogram" && resultTypeValue5 === "pound") {
        result5.value = Number(input5.value) * 2.20462;
    }

    else if (inputTypeValue5 === "kilogram" && resultTypeValue5 === "ounce") {
        result5.value = Number(input5.value) * 35.274;
    }

    else if (inputTypeValue5 === "kilogram" && resultTypeValue5 === "carrat") {
        result5.value = Number(input5.value) * 5000;
    }

    else if (inputTypeValue5 === "gram" && resultTypeValue5 === "kilogram") {
        result5.value = Number(input5.value) / 1000;
    }

    else if (inputTypeValue5 === "gram" && resultTypeValue5 === "gram") {
        result5.value = Number(input5.value);
    }

    else if (inputTypeValue5 === "gram" && resultTypeValue5 === "milligram") {
        result5.value = Number(input5.value) * 1000;
    }

    else if (inputTypeValue5 === "gram" && resultTypeValue5 === "pound") {
        result5.value = Number(input5.value) * 0.00220462;
    }

    else if (inputTypeValue5 === "gram" && resultTypeValue5 === "ounce") {
        result5.value = Number(input5.value) * 0.035274;
    }

    else if (inputTypeValue5 === "gram" && resultTypeValue5 === "carrat") {
        result5.value = Number(input5.value) * 5;
    }

    else if (inputTypeValue5 === "milligram" && resultTypeValue5 === "kilogram") {
        result5.value = Number(input5.value) / 1000000;
    }

    else if (inputTypeValue5 === "milligram" && resultTypeValue5 === "gram") {
        result5.value = Number(input5.value) / 1000;
    }

    else if (inputTypeValue5 === "milligram" && resultTypeValue5 === "milligram") {
        result5.value = Number(input5.value);
    }

    else if (inputTypeValue5 === "milligram" && resultTypeValue5 === "pound") {
        result5.value = Number(input5.value) / 453592.37;
    }

    else if (inputTypeValue5 === "milligram" && resultTypeValue5 === "ounce") {
        result5.value = Number(input5.value) / 28349.523125;
    }

    else if (inputTypeValue5 === "milligram" && resultTypeValue5 === "carrat") {
        result5.value = Number(input5.value) / 200;
    }

    else if (inputTypeValue5 === "pound" && resultTypeValue5 === "kilogram") {
        result5.value = Number(input5.value) * 0.45359237;
    }

    else if (inputTypeValue5 === "pound" && resultTypeValue5 === "gram") {
        result5.value = Number(input5.value) * 453.59237;
    }

    else if (inputTypeValue5 === "pound" && resultTypeValue5 === "milligram") {
        result5.value = Number(input5.value) * 453592.37;
    }

    else if (inputTypeValue5 === "pound" && resultTypeValue5 === "pound") {
        result5.value = Number(input5.value);
    }

    else if (inputTypeValue5 === "pound" && resultTypeValue5 === "ounce") {
        result5.value = Number(input5.value) * 16;
    }

    else if (inputTypeValue5 === "pound" && resultTypeValue5 === "carrat") {
        result5.value = Number(input5.value) * 2267.96;
    }

    else if (inputTypeValue5 === "ounce" && resultTypeValue5 === "kilogram") {
        result5.value = Number(input5.value) * 0.0283495;
    }

    else if (inputTypeValue5 === "ounce" && resultTypeValue5 === "gram") {
        result5.value = Number(input5.value) * 28.3495;
    }

    else if (inputTypeValue5 === "ounce" && resultTypeValue5 === "milligram") {
        result5.value = Number(input5.value) * 28349.5;
    }

    else if (inputTypeValue5 === "ounce" && resultTypeValue5 === "pound") {
        result5.value = Number(input5.value) * 0.0625;
    }

    else if (inputTypeValue5 === "ounce" && resultTypeValue5 === "ounce") {
        result5.value = Number(input5.value);
    }

    else if (inputTypeValue5 === "ounce" && resultTypeValue5 === "carrat") {
        result5.value = Number(input5.value) * 141.748;
    }

    else if (inputTypeValue5 === "carrat" && resultTypeValue5 === "kilogram") {
        result5.value = Number(input5.value) * 0.0002;
    }

    else if (inputTypeValue5 === "carrat" && resultTypeValue5 === "gram") {
        result5.value = Number(input5.value) * 0.2;
    }

    else if (inputTypeValue5 === "carrat" && resultTypeValue5 === "milligram") {
        result5.value = Number(input5.value) * 200;
    }

    else if (inputTypeValue5 === "carrat" && resultTypeValue5 === "pound") {
        result5.value = Number(input5.value) * 0.000440925;
    }

    else if (inputTypeValue5 === "carrat" && resultTypeValue5 === "ounce") {
        result5.value = Number(input5.value) * 0.00705479;
    }

    else if (inputTypeValue5 === "carrat" && resultTypeValue5 === "carrat") {
        result5.value = Number(input5.value);
    };
};




// Time
let input6 = document.getElementById('input6');
let result6 = document.getElementById('result6');
let inputType6 = document.getElementById('inputType6');
let resultType6 = document.getElementById('resultType6');
let inputTypeValue6, resultTypeValue6;


input6.addEventListener("keyup", myResult6);
inputType6.addEventListener("change", myResult6);
resultType6.addEventListener("change", myResult6);

inputTypeValue6 = inputType6.value;
resultTypeValue6 = resultType6.value;

function myResult6() {
    inputTypeValue6 = inputType6.value;
    resultTypeValue6 = resultType6.value;

    if (inputTypeValue6 === "second" && resultTypeValue6 === "second") {
        result6.value = Number(input6.value);
    }

    else if (inputTypeValue6 === "second" && resultTypeValue6 === "minute") {
        result6.value = Number(input6.value) / 60;
    }

    else if (inputTypeValue6 === "second" && resultTypeValue6 === "hour") {
        result6.value = Number(input6.value) / 3600;
    }

    else if (inputTypeValue6 === "minute" && resultTypeValue6 === "second") {
        result6.value = Number(input6.value) * 60;
    }

    else if (inputTypeValue6 === "minute" && resultTypeValue6 === "minute") {
        result6.value = Number(input6.value);
    }

    else if (inputTypeValue6 === "minute" && resultTypeValue6 === "hour") {
        result6.value = Number(input6.value) / 60;
    }

    else if (inputTypeValue6 === "hour" && resultTypeValue6 === "second") {
        result6.value = Number(input6.value) * 3600;
    }

    else if (inputTypeValue6 === "hour" && resultTypeValue6 === "minute") {
        result6.value = Number(input6.value) * 60;
    }

    else if (inputTypeValue6 === "hour" && resultTypeValue6 === "hour") {
        result6.value = Number(input6.value);
    };
};