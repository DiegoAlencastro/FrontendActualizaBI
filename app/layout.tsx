import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import clsx from "clsx";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "personalizado" }}>
					<div className="relative flex flex-col h-screen">
						<Navbar />
						<main className="container flex-grow px-6 pt-16 mx-auto max-w-7xl">
							{children}
						</main>
						<footer className="flex items-center justify-center w-full py-3">
								<p className="text-primary" color="primary" >Diseñado por Diego Alencastro</p>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
