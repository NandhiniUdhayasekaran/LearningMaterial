
/*String Literals*/
type CardinalDirection =
    | "North"
    | "East"
    | "South"
    | "West";

function move(distance: number, direction: CardinalDirection) {
    // ...
}

move(1,"North"); // Okay
//move(1,"Nurth"); // Error!

/*Interface*/
function iTakeFoo(foo: 'foo') { }
type Test = {
  someProp: 'foo',
}
const test: Test = { // Annotate - inferred someProp is always === 'foo'
  someProp: 'foo' 
}; 
iTakeFoo(test.someProp); // Okay!

/** Utility function to create a K:V from a list of strings */
function strEnum<T extends string>(o: Array<T>): {[K in T]: K} {
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
  ])
  /** Create a Type */
  type Direction = keyof typeof Direction;
  
  /** 
    * Sample using a string enum
    */
  let sample: Direction;
  
  sample = Direction.North; // Okay
  sample = 'North'; // Okay
  //sample = 'AnythingElse'; // ERROR!