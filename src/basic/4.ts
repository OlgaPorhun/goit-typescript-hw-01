function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

showMessage("Hello, World!");

const sum = calc(5, 10);
console.log(`Sum: ${sum}`);

try {
  customError();
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error("Unknown error occurred");
  }
}
