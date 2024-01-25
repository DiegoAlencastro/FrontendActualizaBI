
import { Snippet } from "@nextui-org/snippet";
import { title, subtitle } from "@/components/primitives";
import { Button } from "@nextui-org/react";
import NextLink from "next/link";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="justify-center inline-block max-w-lg text-center">
				<h1 className={title()}>Bienvenidos al sistema de actualización de datos</h1>
				<br />
				<h2 className={subtitle({ class: "mt-4" })}>
					Se solicitara cierta información para ofrecerte mejores productos
				</h2>
			</div>
			<div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="flat">
					<NextLink
						color="foreground"
						href="/dataForm"
					>
						<Button color="primary" variant="shadow">
							Ingresa al Formulario
						</Button>
					</NextLink>
				</Snippet>
			</div>
			<div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="flat">
					<NextLink
						color="foreground"
						href="/users"
					>
						<Button color="primary" variant="shadow">
							Ver usuarios actualizados
						</Button>
					</NextLink>
				</Snippet>
			</div>
		</section>
	);
}
