let tuple: [number, string, boolean];
tuple = [5, "hello", true];


// readonly tuple
let readonlyTuple: readonly [number, string, boolean] = [4, "hallo", true];

// named tuples

let namedTuples: [s: number, t: number] = [4, 5];

// destructuring tuple
let destructuring: [number, string] = [10, "hello"];
const [x, y] = destructuring;

