"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Cart from "./cart";

export default function Header() {
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
	});
	return (
		<header ref={headerRef} className="opacity-0 -translate-y-10">
			<nav className="absolute top-0 w-full backdrop-blur-xl h-[4rem] flex px-4">
				<ul className="mx-auto max-w-[1150px] flex justify-between items-center w-full">
					<Link href={"/"} className="font-bold">
						<Image
							src={"/logo.png"}
							alt="logo-image"
							width={500}
							height={500}
							className="w-[25px] h-[25px] object-cover"
						/>
					</Link>

					<ul className="hidden gap-5  text-black md:flex nunito">
						<Link href="/" className="capitalize text-sm font-medium">
							home
						</Link>
						<Link href="/" className=" capitalize text-sm font-medium">
							Services
						</Link>

						<Link href="/" className=" capitalize text-sm font-medium">
							Expressions
						</Link>
						<Link href="/" className=" capitalize text-sm font-medium">
							Ethos
						</Link>
						<Link href="/" className=" capitalize text-sm font-medium">
							Profile
						</Link>
						<Link href="/" className=" capitalize text-sm font-medium">
							Connect
						</Link>
					</ul>

					<li>
						<Cart />
					</li>
				</ul>
			</nav>
		</header>
	);
}
