const age: number = 50;
const username: string = "Max";
const toggle: boolean = true;
const empty: null = null;
const callback = (a: number): number => {
  return 100 + a;
};

console.log(`Age: ${age}`);
console.log(`Username: ${username}`);
console.log(`Toggle is: ${toggle}`);
console.log(`Empty value: ${empty}`);
console.log(`Callback result: ${callback(10)}`);
