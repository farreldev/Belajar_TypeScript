// Tuple Fix array
let tArr: [string, string, number, boolean];
tArr = ['satu', 'dua', 3, true];
// End Tuple

// Array
let Arr: (string | number)[];

Arr = ['satu', 2];

// Generic Style ----------------------------------------------
let Arr2: Array<string | number>;

Arr2 = ['satu', 2];

// Array Of Object
// Generic Style with type ------------------------------------

type MyList = {
  color: string;
  index: number;
};

let Arr3: Array<MyList>;
Arr3 = [
  { color: 'blue', index: 1 },
  { color: 'red', index: 2 },
];

// console.table(Arr3);

// Array Of Object
// Inline interface Style with type ----------------------------

let Arr4: MyList[];

Arr4 = [
  { color: 'green', index: 3 },
  { color: 'yellow', index: 4 },
];

// console.table(Arr4);

// Array Multi Dimension
// Inline Interface Style ---------------------------------------

let matrix1: number[][];

matrix1 = [
  [1, 2],
  [3, 4],
];

// console.table(matrix1);

// Array Multi Dimension
// Inline Generic Style -----------------------------------------

let matrix2: Array<Array<number>>;

matrix2 = [
  [1, 2],
  [3, 4],
];

// console.table(matrix2);
