
export default async function controlUser(
  flag: String,
  user: {
    id:0;
    name: string;
    lastname: string;
    email: string;
    cellphone : string;
    phone : string;
  }
) {
  if (flag === "A") {
    const response = await fetch('http://localhost:9000/users', { cache: 'no-store' })

    if(!response.ok) {
       throw new Error('failed to fetch users')
    }
    return await response.json()
  }
  if (flag === "B") {

    try {
      const res = await fetch('http://localhost:9000/users',{
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'content-type': 'application/json'
        }
      })
      console.log(res)
      if(res.ok){
        console.log("Usuario guardado correctamente!")
      }else{
        console.log("Error al guardar usuario")
      }
    } catch (error) {
        console.log(error)
    }
  }
}
