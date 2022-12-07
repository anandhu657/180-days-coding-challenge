let firstname;
firstname = "Anandhu";

// Any

let firstnameAny: any;
firstnameAny = "Anandhu";
firstnameAny = 10;

//Unknown

let firstnameUnknown: unknown;
firstnameUnknown = "Anandhu";
firstnameUnknown = 10;


// never

// let firstNever: never = "Anandhu";  //wrong case

let firstnameNever: never;

function throwError(): never {
    throw new Error();
}

// undefined

let firstnameUndefined: undefined;
// firstnameUndefined = "Anandhu";

// null

let firstnameNull: null;
// firstnameNull = "Anandhu";


export { }