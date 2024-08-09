interface Address {
  city: string;
  country: string;
}

interface User {
  name: string;
  age: number;
  email: string;
  address?: Address;
}

const mango: User = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

const poly: User = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};

console.log(
  `User 1: ${mango.name}, Age: ${mango.age}, City: ${mango.address?.city}`
);
console.log(`User 2: ${poly.name}, Age: ${poly.age}`);
