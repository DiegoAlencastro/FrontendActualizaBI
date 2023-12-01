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
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    if(!response.ok) {
       throw new Error('failed to fetch users')
    }
    return await response.json()
  }
  if (flag === "B") {

    users.push(user);
  }
}
