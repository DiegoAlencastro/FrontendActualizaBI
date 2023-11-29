import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarBrand,
} from "@nextui-org/navbar";

import NextLink from "next/link";



export const Navbar = () => {
	return (
		<NextUINavbar maxWidth="xl" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex items-center justify-start gap-1" href="/">
						<p className="font-bold text-inherit">Actualizate</p>
					</NextLink>
				</NavbarBrand>
			</NavbarContent>

		</NextUINavbar>
	);
};
