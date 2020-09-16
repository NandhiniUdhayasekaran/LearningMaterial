function move(distance, direction) {
    // ...
}
move(1, "North"); // Okay
//move(1,"Nurth"); // Error!
/*Interface*/
function iTakeFoo(foo) { }
const test = {
    someProp: 'foo'
};
iTakeFoo(test.someProp); // Okay!
/** Utility function to create a K:V from a list of strings */
function strEnum(o) {
    return o.reduce((res, key) => {
        res[key] = key;
        return res;
    }, Object.create(null));
}
/** Create a K:V */
const Direction = strEnum([
    'North',
    'South',
    'East',
    'West'
]);
/**
  * Sample using a string enum
  */
let sample;
sample = Direction.North; // Okay
sample = 'North'; // Okay
//sample = 'AnythingElse'; // ERROR!
//# sourceMappingURL=TypeLiterals.js.map