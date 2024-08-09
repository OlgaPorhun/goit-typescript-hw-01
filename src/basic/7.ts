type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};

const page1: Page = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: Page = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};

console.log(`Page 1: ${page1.title}, Status: ${page1.status}`);
console.log(`Page 2: ${page2.title}, Status: ${page2.status}`);

if (page1.details) {
  console.log(`Page 1 created at: ${page1.details.createAt}`);
}

if (page2.details) {
  console.log(`Page 2 updated at: ${page2.details.updateAt}`);
}
