/*Numbers*/
let first: number = 123; // number 
let second: number = 0x37CF;  // hexadecimal
let third: number = 0o377;      // octal
let fourth: number = 0b111001;// binary  
let fifth: number = 12345.67;
let sixth = new Number(123);

first.toExponential(); //1.23e+2
fifth.toFixed() //12346
fifth.toLocaleString('de-DE'); // returns 123.45,67 - German
fifth.toPrecision(1) //returns 12345.7
first.toString(2) //returns base value 1111011
sixth.valueOf() // retuns 123
typeof sixth // returns object

/*String*/
let firstName: string = "Nandhini";
let lastName: string = 'Udhayasekaran';
let names: string = 'Sam,Tim,John'
let employeeDesc: string = `Hello ${firstName} ${lastName}....!` //es6 template string
firstName.charAt(0); //returns N
firstName.concat(' ', lastName);//returns Nandhini Udhayasekaran
lastName.indexOf('h'); //returns h
lastName.replace(/Udhayasekaran/gi, 'U'); //returns U
names.split(',', 2) //retuns ['Sam','Tim']

/*Boolean*/
let isTrue: boolean = true;

/*Array*/
let stringArray: string[] = ['Sam', 'Tom', 'Jerry'];
let numberAray: Array<number> = [4, 5, 6, 7];
let combinedArray: Array<string | number> = [3, 'Sam', 4, 5, 'John'];

/*Tuple*/
var empDetails: [string, number, boolean] = ['Sam', 1, true];
var emplData: [number, string][] = [[1, 'Sam'], [2, 'Tom'], [3, 'John']];
empDetails.push(4, 'Don');
empDetails[0] = empDetails[0].concat(' Bradman'); // return Don Bradman

/*Enum*/
enum PrintMedia {
    Newspaper = 1,
    Magazine,
    Newsletter,
    Book
}
function getMedia(mediaName: string): PrintMedia {
    if (mediaName === 'Forbes' || mediaName === 'Times') {
        return PrintMedia.Magazine;
    }
}
let MediaType: PrintMedia = getMedia('Forbes'); //returns Magazine
//Computed Enums
enum StudenDetails {
    ID = 5,
    Departmentode = getCode('Computer'),
    Department = Departmentode * 3,
}
function getCode(Dept: string): StudenDetails {
    if (Dept === 'Computer') {
        return 6;
    }
}

StudenDetails.Departmentode; // returns 6
StudenDetails['Department']; // returns 18

/*Union*/
let code: (string | number);
code = 123;
code = 'abc';

/*Any*/
let Something: any = 'Hello Nandy..!';
Something = 2;
Something = true;

let someArray: any = ['Nandhu', 2, true]
someArray.push('Happy');
console.log(someArray); //returns ['Nandhu',2,true,'Happy'];

/*Void*/
let nothing: void = undefined;
//let num: void = 1; // Error

/*Never*/
function keepProcessing(): never {
    while (true) {
        console.log('Hello Nandhini...!')
    }
}

