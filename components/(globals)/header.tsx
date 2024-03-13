"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { useTheme } from "next-themes";
import { Button } from "../ui/button";

export default function Header() {
	const { theme } = useTheme();
	const headerRef = useRef<HTMLDivElement | null>(null);
	const tl = useRef<gsap.core.Timeline | null>(null);

	useGSAP(() => {
		tl.current = gsap.timeline();

		tl.current.to(headerRef.current, {
			y: 0,
			duration: 1,
			opacity: 1,
			ease: "bounce.out",
		});
	}, []);
	return (
		<header
			ref={headerRef}
			className="fixed top-0 z-50 w-full -translate-y-10 opacity-0 backdrop-blur-xl"
		>
			<nav className=" w-full backdrop-blur-xl h-[4rem] flex px-4">
				<menu className="mx-auto max-w-[1150px] flex justify-between items-center w-full">
					<Link href={"/"}>
						<Image
							src={"/logo.png"}
							alt="logo-image"
							width={500}
							height={500}
							className="w-[25px] h-[25px] object-cover"
						/>
					</Link>

					<menu className="hidden gap-5 text-black md:flex nunito">
						<Link href="/" className="text-sm font-medium capitalize">
							home
						</Link>
						<Link href="/" className="text-sm font-medium capitalize ">
							Services
						</Link>

						<Link href="/" className="text-sm font-medium capitalize ">
							Expressions
						</Link>
						<Link href="/" className="text-sm font-medium capitalize ">
							Ethos
						</Link>
						<Link href="/" className="text-sm font-medium capitalize ">
							Profile
						</Link>
						<Link href="/" className="text-sm font-medium capitalize ">
							Connect
						</Link>
					</menu>

					<Link href={"/booking"}>
						<Button className="bg-[var(--blue)] rounded-3xl px-6 font-bold shadow-md hover:bg-[#1667fe]/80">
							Book a FREE startegy call
						</Button>
					</Link>
				</menu>
			</nav>
		</header>
	);
}
