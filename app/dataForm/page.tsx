'use client'

import { title } from "@/components/primitives";
import React from "react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import NextLink from "next/link";
import { Snippet } from "@nextui-org/snippet"; 

export default function FormPage() {

	return (
		
		<form action="finalPage" className="flex flex-col gap-4">
			<h1 className={title()}>Ingresa tus datos</h1>
			<div className="flex flex-wrap w-full gap-4 mb-6 md:flex-nowrap md:mb-0">
				<Input
					isRequired
					type="text"
					label="Nombre"
					placeholder="Diego"
					labelPlacement="outside"
					name="name"
				/>
				<Input
					isRequired
					type="text"
					label="Apellido"
					placeholder="Alencastro"
					labelPlacement="outside"
					name="lastname"
				/>
			</div>
			<div className="flex flex-wrap w-full gap-4 mb-6 md:flex-nowrap md:mb-0">
				<Input
					isRequired
					type="text"
					label="Identificación"
					placeholder="1754784789"
					labelPlacement="outside"
					name="id"
				/>
				<Input
					isRequired
					label="Email"
					placeholder="correo"
					labelPlacement="outside"
					name="email"
				/>
			</div>
			<div className="flex flex-wrap w-full gap-4 mb-6 md:flex-nowrap md:mb-0">
				<Input
					isRequired
					label="Celular"
					labelPlacement="outside"
					placeholder="099999999"
					name="cellphone"
				/>
				<Input
					isRequired
					label="Telefono"
					labelPlacement="outside"
					placeholder="022058832"
					name="phone"
				/>
			</div>
			<h1 className={title({ class: "size:md" })}>Dirección</h1>
			<div className="flex flex-wrap w-full gap-4 mb-6 md:flex-nowrap md:mb-0">
				<Input
					isRequired
					label="Provincia"
					labelPlacement="outside"
					placeholder="Pichincha"
					name="dirProv"
				/>
				<Input
					isRequired
					label="Ciudad"
					labelPlacement="outside"
					placeholder="Quito"
					name="dirCi"
				/>
				<Input
					isRequired
					label="Parrioquia"
					labelPlacement="outside"
					placeholder="Conocoto"
					name="dirParr"
				/>
			</div>
			<div className="flex flex-wrap w-full gap-4 mb-6 md:flex-nowrap md:mb-0">
				<Input
					isRequired
					label="Calle Principal"
					labelPlacement="outside"
					placeholder="Calle V1"
					name="dirCP"
				/>
				<Input
					isRequired
					label="Calle Secundaria"
					labelPlacement="outside"
					placeholder="Calle V2"
					name="dirCS"
				/>
			</div>
			<div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="flat">
					<NextLink
						color="foreground"
						href="/"
					>
						<Button color="primary" variant="shadow">
							Regresar
						</Button>
					</NextLink>
				</Snippet>
				<Snippet hideSymbol hideCopyButton variant="flat">
						<Button color="primary" variant="shadow" type="submit" >
							Guardar
						</Button>
				</Snippet>
			</div>
		</form>
	);
}
