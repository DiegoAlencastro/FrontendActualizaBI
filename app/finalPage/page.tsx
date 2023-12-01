import { title, subtitle } from "@/components/primitives";
import React from "react";
import controlUser from "../libs/controllerUser";
import { Snippet } from "@nextui-org/snippet";
import { Button } from "@nextui-org/react";
import NextLink from "next/link";

export default function FinalPage({ searchParams }:{
	searchParams:{
	name: string;
	lastName: string;
	email: string;
	};
}) {
	console.log("En FinalPage");
	console.log(searchParams.name);
	console.log(searchParams.lastName);
	controlUser("B",{
		name: searchParams.name,
		lastName: searchParams.lastName,
		email: searchParams.email
	})
	return (
		<div>
			<h1 className={title({ size: "sm" })}>Muchas gracias por actualizar tu información {searchParams.name} {searchParams.lastName} </h1>
			<h2 className={subtitle({ class: "mt-4" })}>
				Proximamente te contactaremos
			</h2>
			<div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="flat">
					<NextLink
						color="foreground"
						href="/"
					>
						<Button color="primary" variant="shadow">
							Regresar al menu Principal
						</Button>
					</NextLink>
				</Snippet>
			</div>
		</div>
	);
}
