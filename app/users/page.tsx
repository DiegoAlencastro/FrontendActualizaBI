import React from "react";
import { title, subtitle } from "@/components/primitives";
import controlUser from "../libs/controllerUser"
import { Snippet } from "@nextui-org/snippet";
import { Button } from "@nextui-org/react";
import NextLink from "next/link";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";


export default async function UsersPage() {
    const users = await controlUser("A", {
        id: 0,
        name: "",
        lastname: "",
        email: "",
        cellphone : "",
        phone : "",
    })

    console.log(users);

    if (users !== undefined) {
        return (
            <div className="mt-20 text-center">
                <h1 className={title()}>Usuarios registrados al momento</h1>
                <br />
                <br />
                <div className="flex flex-col">
                {users.map((user: {
                    id: number;
                    name: string;
                    lastname: string;
                    email: string;
                    cellphone : string;
                    phone : string;
                }) => {
                    return (
                        <>
                            <Card key={user.id} >
                                <CardHeader className="flex gap-3">
                                    <p className={subtitle()}>
                                        {user.name}&nbsp;{user.lastname}
                                    </p>
                                </CardHeader>
                                <Divider />
                                <CardBody>
                                    <div className="flex flex-col">
                                        <p className="text-md">Correo - {user.email}</p>
                                        <p className="text-md">Celular - {user.cellphone}</p>
                                        <p className="text-md">Telefono - {user.phone}</p>
                                    </div>
                                </CardBody>
                            </Card>
                            <br />
                        </>
                    )
                })
                }
                </div>
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