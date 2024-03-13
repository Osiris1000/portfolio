"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Button } from "../ui/button";

export default function Herosection() {
	const heroRef = useRef<HTMLDivElement | null>(null);
	const heroTitleRef = useRef<HTMLDivElement | null>(null);
	const herosubTitleRef = useRef<HTMLDivElement | null>(null);
	const tl = useRef<gsap.core.Timeline | null>(null);

	useGSAP(() => {
		tl.current = gsap.timeline();
		tl.current
			.to(heroRef.current, {
				duration: 2,
				ease: "power2.out",
				clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
				pointerEvents: "all",
			})
			.to(
				heroTitleRef.current,
				{
					duration: 2,
					ease: "power4.out",
					opacity: 1,
					y: 0,
				},
				"-=2"
			)
			.to(
				herosubTitleRef.current,
				{
					duration: 2,
					ease: "power4.out",
					opacity: 1,
					y: 0,
				},
				"-=2"
			)
			.to(
				".cta",
				{
					duration: 1,
					y: 0,
					opacity: 1,
					ease: "powe4.inOut",
				},
				"-=1.5"
			);
	}, []);
	return (
		<section>
			<div className="flex flex-col items-center lg:flex-row max-w-[1358px] 2xl:justify-center mx-auto">
				<div
					ref={heroRef}
					className="relative h-[60svh] md:h-[70svh] lg:h-[100svh] w-full video__container lg:order-2 lg:ml-auto -z-20"
					style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
				>
					<div className="left__shader"></div>
					<video
						preload="auto"
						src="/new-hero.mp4"
						playsInline
						muted
						loop
						autoPlay
						className="object-cover w-full h-full "
						style={{ backgroundPosition: "center" }}
					>
						<source src="/new-hero.mp4" type="video/mp4" />
					</video>
				</div>
				<div className="mx-5 pt-16 text-center lg:text-left lg:pl-12 md:px-0 lg:pt-0">
					<h1
						className="text-[2.3rem] font-bold opacity-0 -translate-y-[50px] "
						ref={heroTitleRef}
					>
						Is Your Website Stuck in the Past?{" "}
						<br className="hidden md:block" />
						Conversions and Sales Lost? We will Help You{" "}
						<span className="bg-[var(--blue)] text-white uppercase px-[2px]">
							Transform
						</span>{" "}
						and Thrive again...
					</h1>

					<h2
						className="text-[1.4rem] text-[#787878]  mt-6 opacity-0 translate-y-[100px]"
						ref={herosubTitleRef}
					>
						We craft conversion machines designed to turn{" "}
						<span className="font-semibold text-black">website traffic</span>{" "}
						into loyal customers, driving sales nonstop and propelling your{" "}
						<span className="font-semibold text-black">
							sales on autopilot.
						</span>
					</h2>

					<div className="flex items-center justify-center mt-10 space-x-10 md:justify-start">
						<Button className="w-full max-w-[350px] cta opacity-0 translate-y-5 py-6 bg-[var(--blue)] rounded-3xl px-8 hover:bg-[#1667fe]/80 text-lg font-bold">
							Book a FREE strategy call
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
