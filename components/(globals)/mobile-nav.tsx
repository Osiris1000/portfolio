"use client";
import { X, Grip } from "lucide-react";
import React, { useState, useRef } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// const tl2 = useRef<gsap.core.Timeline | null>(null);

export default function MobileNav() {
	const [openNav, setOpenNav] = useState(false);
	const navRef = useRef<HTMLDivElement | null>(null);
	const tl = useRef<gsap.core.Timeline | null>(null);
	useGSAP(() => {
		tl.current = gsap.timeline({ paused: true });

		// Corrected selector: target menu items
		tl.current.from(
			".menu__item",
			{
				duration: 1,
				delay: 2.3,
				x: -100,
				opacity: 0,
				stagger: {
					amount: 0.4,
				},
				ease: "Expo.easeInOut",
			},
			"-=1"
		);
		// .staggerFrom(
		// 	".socials",
		// 	0.8,
		// 	{
		// 		ypercent: 100,
		// 		opacity: 0,
		// 		ease: "Expo.easeOut",
		// 	},
		// 	// "0.4",
		// 	"-=0.6"
		// );
	});

	const toggleNavOpen = () => {
		tl.current?.play();
	};

	const toggleNavClose = () => {
		tl.current?.reverse();
	};

	const toggleMenuIcon = () => {
		setOpenNav((prev) => !prev);
	};

	return (
		<nav className="fixed bg-white bottom-20 right-20 md:hidden">
			<Button
				className="toggle__btn backdrop-blur-xl h-16 w-16 flex items-center  text-black bg-transparent justify-center absolute rounded-full hover:bg-transparent z-50 shadow-sm transition-all duration-700 ease-in-out"
				onClick={toggleMenuIcon}
			>
				{openNav ? (
					<X className="h-8 w-8 animate__rotateIn" onClick={toggleNavClose} />
				) : (
					<Grip
						className="h-8 w-8 animate__rotateOut"
						onClick={toggleNavOpen}
					/>
				)}
			</Button>

			<div
				ref={navRef}
				className={`z-30 backdrop-blur-xl text-black  fixed overflow-hidden inset-0 h-[100svh] pointer-events-none transition-all duration-700 ease-in-out`}
				style={{
					clipPath: openNav
						? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
						: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
				}}
			>
				<ul className="flex flex-col gap-5 bottom-32 z-40 absolute left-10 ">
					<Link href="/" className="text-2xl uppercase font-bold menu__item">
						home
					</Link>
					<Link href="/" className="text-2xl uppercase font-bold menu__item">
						Services
					</Link>

					<Link href="/" className="text-2xl uppercase font-bold menu__item ">
						Ethos
					</Link>
					<Link href="/" className="text-2xl uppercase font-bold menu__item ">
						Profile
					</Link>
					<Link href="/" className="text-2xl uppercase font-bold menu__item ">
						Connect
					</Link>
				</ul>

				<div className="absolute left-10 bottom-6">
					<div className="flex items-center gap-4 text-sm font-bold md:text-xl justify-items-end">
						<Link
							href={"https://twitter.com/osirisdigitalagency"}
							target="_blank"
							className="uppercase socials opacity-0"
						>
							Twitter
						</Link>
						<Link
							className="uppercase socials opacity-0"
							href={"https://twitter.com/osirisdigitalagency"}
							target="_blank"
						>
							Behance
						</Link>
						<Link
							className="uppercase socials opacity-0"
							href={"https://twitter.com/osirisdigitalagency"}
							target="_blank"
						>
							Github
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}
