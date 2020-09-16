//Implicitly take as string
let hello = "hello World...!";
let hi;
function f1(input) {
    var x = 10;
    if (input) {
        let y = x + 1;
        return y;
    }
    //Cannot access y due to block scope
    //return y;  
}
function f2(x) {
    //let x=10; interferce with parameter declaration
    let y = 20;
}
function f3(a) {
    let x = 10;
    //let x=20; Can't have two declaration
    return x;
}
function f4(condition, x) {
    if (condition) {
        let x = 100;
        return x;
    }
    return x;
}
f4(false, 0); // returns '0'
f4(true, 0); // returns '100'
//Arrays
let input = [1, 2];
let [a, b] = input;
console.log(a); // returns 1
a = input[0];
function f5([a, b]) {
    console.log(b);
}
f5([2, 3]);
let [x, ...y] = [1, 2, 3, 4, 5];
console.log(x); //retuns 1
console.log(y); //retuns 2,3,4,5
//Tuple
let tuple = [7, "Hello", true];
let [x1, x2, x3] = tuple; //x1:number, x2:string, x3:boolean
//let [x1,x2,x3,x4] = tuple //Error no element at index 3
let [X, ...yz] = tuple; // yz: [string, boolean]
let [p, q, r, ...s] = tuple; // s: [], the empty tuple
//# sourceMappingURL=let.js.map