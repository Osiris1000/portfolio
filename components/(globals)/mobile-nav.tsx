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

		tl.current
			.to(navRef.current, {
				duration: 0.8,
				ease: "power4.inOut",
				clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
				pointerEvents: "all",
			})
			.from(
				".menu__item",
				{
					duration: 1.7,
					delay: 0,
					x: -100,
					opacity: 0,
					stagger: {
						amount: 0.4,
					},
					ease: "Expo.easeInOut",
				},
				"-=1"
			)
			.from(
				".socials",
				{
					duration: 0.5,
					y: 100,
					opacity: 0,
					stagger: {
						amount: 0.4,
					},
					ease: "Expo.easeOut",
				},
				"-=1.4"
			);
	}, []);

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
		<nav className="fixed bottom-20 right-20 md:hidden z-[900] ">
			<Button
				name="mobile-menu-toggle-button"
				className="toggle__btn backdrop-blur-xl h-16 w-16 flex items-center text-black bg-transparent justify-center absolute rounded-full hover:bg-transparent z-50 shadow-sm transition-all duration-700 ease-in-out"
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
				className={`backdrop-blur-2xl text-black fixed overflow-hidden inset-0 pointer-events-none`}
				style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
			>
				<ul className="flex flex-col gap-12 bottom-32 z-40 absolute left-5 group ">
					<Link
						href="/"
						className="text-4xl md:text-3xl uppercase font-bold menu__item hover:text-[--ash]"
					>
						home
					</Link>
					<Link
						href="/"
						className="text-4xl md:text-3xl uppercase font-bold menu__item hover:text-[--ash]"
					>
						Services
					</Link>

					<Link
						href="/"
						className="text-4xl  md:text-3xl uppercase font-bold menu__item hover:text-[--ash]"
					>
						Ethos
					</Link>
					<Link
						href="/"
						className="text-4xl  md:text-3xl uppercase font-bold menu__item hover:text-[--ash] "
					>
						Profile
					</Link>
					<Link
						href="/"
						className="text-4xl  md:text-3xl uppercase font-bold menu__item  hover:text-[--ash]"
					>
						Connect
					</Link>
				</ul>

				<div className="absolute left-5 bottom-6">
					<div className="flex items-center gap-4 text-sm font-bold md:text-xl justify-items-end">
						<Link
							href={"https://twitter.com/Osiris_Digital"}
							target="_blank"
							className="uppercase socials "
						>
							Twitter
						</Link>
						<Link
							className="uppercase socials "
							href={"https://twitter.com/Osiris_Digital"}
							target="_blank"
						>
							Behance
						</Link>
						<Link
							className="uppercase socials"
							href={"https://twitter.com/Osiris_Digital"}
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
