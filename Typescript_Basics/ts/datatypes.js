/*Numbers*/
let first = 123; // number 
let second = 0x37CF; // hexadecimal
let third = 0o377; // octal
let fourth = 0b111001; // binary  
let fifth = 12345.67;
let sixth = new Number(123);
first.toExponential(); //1.23e+2
fifth.toFixed(); //12346
fifth.toLocaleString('de-DE'); // returns 123.45,67 - German
fifth.toPrecision(1); //returns 12345.7
first.toString(2); //returns base value 1111011
sixth.valueOf(); // retuns 123
typeof sixth; // returns object
/*String*/
let firstName = "Nandhini";
let lastName = 'Udhayasekaran';
let names = 'Sam,Tim,John';
let employeeDesc = `Hello ${firstName} ${lastName}....!`; //es6 template string
firstName.charAt(0); //returns N
firstName.concat(' ', lastName); //returns Nandhini Udhayasekaran
lastName.indexOf('h'); //returns h
lastName.replace(/Udhayasekaran/gi, 'U'); //returns U
names.split(',', 2); //retuns ['Sam','Tim']
/*Boolean*/
let isTrue = true;
/*Array*/
let stringArray = ['Sam', 'Tom', 'Jerry'];
let numberAray = [4, 5, 6, 7];
let combinedArray = [3, 'Sam', 4, 5, 'John'];
/*Tuple*/
var empDetails = ['Sam', 1, true];
var emplData = [[1, 'Sam'], [2, 'Tom'], [3, 'John']];
empDetails.push(4, 'Don');
empDetails[0] = empDetails[0].concat(' Bradman'); // return Don Bradman
/*Enum*/
var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspaper"] = 1] = "Newspaper";
    PrintMedia[PrintMedia["Magazine"] = 2] = "Magazine";
    PrintMedia[PrintMedia["Newsletter"] = 3] = "Newsletter";
    PrintMedia[PrintMedia["Book"] = 4] = "Book";
})(PrintMedia || (PrintMedia = {}));
function getMedia(mediaName) {
    if (mediaName === 'Forbes' || mediaName === 'Times') {
        return PrintMedia.Magazine;
    }
}
let MediaType = getMedia('Forbes'); //returns Magazine
//Computed Enums
var StudenDetails;
(function (StudenDetails) {
    StudenDetails[StudenDetails["ID"] = 5] = "ID";
    StudenDetails[StudenDetails["Departmentode"] = getCode('Computer')] = "Departmentode";
    StudenDetails[StudenDetails["Department"] = StudenDetails.Departmentode * 3] = "Department";
})(StudenDetails || (StudenDetails = {}));
function getCode(Dept) {
    if (Dept === 'Computer') {
        return 6;
    }
}
StudenDetails.Departmentode; // returns 6
StudenDetails['Department']; // returns 18
/*Union*/
let code;
code = 123;
code = 'abc';
/*Any*/
let Something = 'Hello Nandy..!';
Something = 2;
Something = true;
let someArray = ['Nandhu', 2, true];
someArray.push('Happy');
console.log(someArray); //returns ['Nandhu',2,true,'Happy'];
/*Void*/
let nothing = undefined;
//let num: void = 1; // Error
/*Never*/
function keepProcessing() {
    while (true) {
        console.log('Hello Nandhini...!');
    }
}
//# sourceMappingURL=datatypes.js.map