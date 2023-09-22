let Arr: (string | number)[];

Arr = ['satu', 2];

// Generic Style
let Arr2: Array<string | number>;

Arr2 = ['satu', 2];

// Array Of Object
// Generic Style

type MyList = {
  color: string;
  index: number;
};

let Arr3: Array<MyList>;
Arr3 = [
  { color: 'blue', index: 1 },
  { color: 'red', index: 2 },
];
console.log(Arr3);
