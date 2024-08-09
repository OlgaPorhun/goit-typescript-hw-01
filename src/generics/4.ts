type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>) {
  const user: User = {
    name: initialValues.name || "Default Name",
    surname: initialValues.surname || "Default Surname",
    email: initialValues.email || "",
    password: initialValues.password || "",
  };

  console.log("User:", user);
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
