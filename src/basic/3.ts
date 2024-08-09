let unionType: string | number;
let literalType: "enable" | "disable";

unionType = 42;
console.log(`Union Type as number: ${unionType}`);

unionType = "Hello";
console.log(`Union Type as string: ${unionType}`);

literalType = "enable";
console.log(`Literal Type: ${literalType}`);

literalType = "disable";
console.log(`Literal Type: ${literalType}`);
