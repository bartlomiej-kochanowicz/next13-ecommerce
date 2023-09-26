import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { Navigation } from "@/components/molecules/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Next 13 Ecommerce",
	description: "Home page",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<NextTopLoader color="#a855f7" />

				<Navigation />

				{children}
			</body>
		</html>
	);
}
