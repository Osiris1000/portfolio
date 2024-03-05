"use client";
import { X, Grip } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function MobileNav() {
	const [openNav, setOpenNav] = useState(false);
	const navRef = useRef<HTMLDivElement | null>(null);

	const tl = gsap.timeline({ paused: true });
	useGSAP(() => {
		if (tl.current) {
			tl.current
				.to(navRef.current, {
					duration: 0.5,
					opacity: 1,
					clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
					ease: "Power2.easeOut",
				})
				.from(
					".menu__item",
					1.5,
					{
						delay: -0.5,
						y: 200,
						opacity: 0,
						stagger: {
							amount: 0.4,
						},
						ease: "Expo.easeInOut",
					},
					"-=1"
				)
				.stagger(
					".socials",
					0.8,
					{
						y: 0,
						opacity: 0,
						ease: "Expo.easeOut",
					},
					"0.4"
				);
		}
	});

	const handleToggle = () => {
		setOpenNav((prev) => !prev);

		if (openNav) {
			tl.play();
		} else {
			tl.reverse();
		}
	};

	return (
		<nav className="fixed bg-white bottom-20 right-20 md:hidden">
			<Button
				className="toggle__btn backdrop-blur-xl h-16 w-16 flex items-center  text-black bg-transparent justify-center absolute rounded-full hover:bg-transparent z-50 shadow-sm transition-all duration-700 ease-in-out"
				onClick={handleToggle}
			>
				{openNav ? (
					<X className="h-8 w-8 animate__rotateIn" />
				) : (
					<Grip className="h-8 w-8 animate__rotateOut" />
				)}
			</Button>

			<div
				ref={navRef}
				className={`z-30 backdrop-blur-xl text-black  fixed overflow-hidden inset-0 transition-all duration-[6s] ease-in-out opacity-0`}
				style={{ clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" }}
			>
				<div className="absolute top-5 left-10">
					<h3>Osiris Digital Agency</h3>
				</div>
				<ul className="flex  flex-col gap-5 absolute bottom-32 left-10 ojuju">
					<Link href="/" className="text-2xl uppercase font-bold menu__item">
						home
					</Link>
					<Link href="/" className="text-2xl uppercase font-bold menu__item">
						Services
					</Link>

					<Link href="/" className="text-2xl uppercase font-bold menu__item">
						Expressions
					</Link>
					<Link href="/" className="text-2xl uppercase font-bold menu__item">
						Ethos
					</Link>
					<Link href="/" className="text-2xl uppercase font-bold menu__item">
						Profile
					</Link>
					<Link href="/" className="text-2xl uppercase font-bold menu__item">
						Connect
					</Link>
				</ul>

				<div className="absolute left-10 bottom-6 translate-y-[1000px]">
					<div className="flex items-center gap-4 text-sm font-bold md:text-xl justify-items-end">
						<Link
							href={"https://twitter.com/osirisdigitalagency"}
							target="_blank"
							className="uppercase socials"
						>
							Twitter
						</Link>
						<Link
							className="uppercase socials"
							href={"https://twitter.com/osirisdigitalagency"}
							target="_blank"
						>
							Behance
						</Link>
						<Link
							className="uppercase socials"
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
