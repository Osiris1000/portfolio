"use client";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
	const lenis = useLenis(({ scroll }) => {
		// console.log(lenis);
	});

	return (
		<ReactLenis
			root
			options={{
				// lerp: 0.01,
				duration: 1,
			}}
		>
			{children}
		</ReactLenis>
	);
}
