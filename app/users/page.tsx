import Link from "next/link"
import { title, subtitle } from "@/components/primitives";
import controlUser from "../libs/controllerUser"

export default async function UsersPage() {
    const users = await controlUser("A",{
        name: "",
        lastName: "",
        email: ""
    })
  return (
    <div className="mt-20 text-center">
        <h1 className={title({ size: "sm" })}>Usuarios registrados al momento</h1>
        {users.map(user => {
            return (
                <>
                <p className={subtitle()}>
                    {user.name} - {user.lastName} - {user.email}
                </p>
                </>
            )
            })
        }
    </div>
  );
}