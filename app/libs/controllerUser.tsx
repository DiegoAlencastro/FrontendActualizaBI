let users = [
  {
    "name": "Diego",
    "lastName": "Alencastro",
    "email": "Diego.alencastro@gmail.com",
  }
]

export default async function controlUser(
  flag: String,
  user: {
    name: string;
    lastName: string;
    email: string;
  }
) {
  if (flag === "A") {
    return users
  }
  if (flag === "B") {
    users.push(user);
  }
}
