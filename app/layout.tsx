import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/(globals)/header";
import MobileNav from "@/components/(globals)/mobileNav";

const icons = [
	{ rel: "icon", url: "/favicon-32x32.png" },
	{ rel: "icon", url: "/favicon-16x16.png" },
	{ rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
	{ rel: "manifest", url: "/site.webmanifest" },
];
export const metadata: Metadata = {
	title: "Osiris Digital Agency",
	description:
		"Osiris Digital Agency empowers brands to thrive in the digital landscape. We craft exceptional design solutions and data-driven strategies that elevate your brand presence, drive conversions, and achieve your marketing goals.",
	openGraph: {
		type: "website",
		url: "https://osirisdigital.agency",
		title: "Osiris Digital Agency",
		description:
			"Osiris Digital Agency empowers brands tko thrive in the digital landscape. We craft exceptional design solutions and data-driven strategies that elevate your brand presence, drive conversions, and achieve your marketing goals.",
		siteName: "Osiris Digital Agency",
		images: [
			{
				url: "https://avatars.githubusercontent.com/u/140518259?v=4",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@osirisdigitalagency",
		creator: "@hussain_joe",
		title: "Osiris Digital Agency",
		description:
			"Osiris Digital Agency empowers brands to thrive in the digital landscape. We craft exceptional design solutions and data-driven strategies that elevate your brand presence, drive conversions, and achieve your marketing goals.",
		images: "https://avatars.githubusercontent.com/u/140518259?v=4",
	},
	robots: "index, follow",
	icons: icons,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="antialiased">
				<Header />
				<MobileNav />
				{children}
			</body>
		</html>
	);
}
