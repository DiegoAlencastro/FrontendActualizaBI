import React from "react";
import { title, subtitle } from "@/components/primitives";
import controlUser from "../libs/controllerUser"
import { Snippet } from "@nextui-org/snippet";
import { Button } from "@nextui-org/react";
import NextLink from "next/link";

export default async function UsersPage() {
    const users = await controlUser("A", {
        name: "",
        lastName: "",
        email: ""
    })
    console.log(users);

    if (users !== undefined) {
        return (
            <div className="mt-20 text-center">
                <h1 className={title({ size: "sm" })}>Usuarios registrados al momento</h1>
                <br />
                <br />

                {users.map(user => {
                    return (
                        <>
                            <p className={subtitle()}>
                                {user.name} {user.lastName} - {user.email}
                            </p>
                        </>
                    )
                })
                }
                <br />
                <br />
                <div className="mt-8">
                    <Snippet hideSymbol hideCopyButton variant="flat">
                        <NextLink
                            color="foreground"
                            href="/"
                        >
                            <Button color="primary" variant="shadow">
                                Regresar Menu Principal
                            </Button>
                        </NextLink>
                    </Snippet>
                </div>
            </div >
        );
    } else {
        return (
            <div className="mt-20 text-center">
                <h1 className={title({ size: "sm" })}>No hay usuarios registrados por el momento</h1>
                <div className="mt-8">
                    <Snippet hideSymbol hideCopyButton variant="flat">
                        <NextLink
                            color="foreground"
                            href="/"
                        >
                            <Button color="primary" variant="shadow">
                                Regresar Menu Principal
                            </Button>
                        </NextLink>
                    </Snippet>
                </div>
            </div>

        );
    }

}