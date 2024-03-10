"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Herosection() {
	const heroRef = useRef<HTMLDivElement | null>(null);
	const heroTitleRef = useRef<HTMLDivElement | null>(null);
	const herosubTitleRef = useRef<HTMLDivElement | null>(null);
	const tl = useRef<gsap.core.Timeline | null>(null);

	useGSAP(() => {
		tl.current = gsap.timeline();
		tl.current
			.to(heroRef.current, {
				duration: 3,
				ease: "power2.out",
				clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
				pointerEvents: "all",
			})
			.to(
				heroTitleRef.current,
				{
					duration: 3,
					ease: "power4.out",
					opacity: 1,
					x: 0,
				},
				"-=3"
			)
			.to(
				herosubTitleRef.current,
				{
					duration: 2,
					ease: "power4.out",
					opacity: 1,
					y: 0,
				},
				"-=3"
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
						className=" w-full h-full object-cover "
						// pt-10 md:pt-0
						style={{ backgroundPosition: "center" }}
					>
						<source src="/new-hero.mp4" type="video/mp4" />
					</video>
				</div>
				<div className="text-center lg:text-left lg:pl-12 px-4 md:px-0 pt-16 lg:pt-0">
					<h1
						className="text-[2.3rem] font-bold opacity-0 -translate-x-[500px] "
						ref={heroTitleRef}
					>
						Is Your Website Stuck in the Past?{" "}
						<br className="hidden md:block" />
						Conversions and Sales Lost? We will Help You{" "}
						<span className="bg-[var(--blue)] text-white uppercase px-[2px]">
							Transform
						</span>{" "}
						and Thrive again. .{/* Feeling Lost in the Digital Jungle? */}
					</h1>

					<h2
						className="text-[1.4rem] text-[#787878]  mt-6 opacity-0 translate-y-[100px]"
						ref={herosubTitleRef}
					>
						We craft conversion machines designed to turn{" "}
						<span className="text-black font-semibold">website traffic</span>{" "}
						into loyal customers, driving sales nonstop and propelling your{" "}
						<span className="text-black font-semibold">
							sales on autopilot.
						</span>
						{/* <br className="hidden md:block" /> {" "} */}
					</h2>

					{/* <p className="text-[#787878] mt-6 text-[1.1rem]">
						Make your website a relentless{" "}
						<span className="opacity-100 text-black">sales advocate</span>,
						tirelessly persuading visitors to make{" "}
						<span className=" text-black"> purchases </span>
						and boosting sales &nbsp;
						<span className="text-black">automatically.</span>
					</p> */}
					{/* <p>
						Are you feeling stuck with your current website or lost in the
						digital landscape? Whether you're already online, considering a
						redesign, or starting fresh, unlock the potential for exponential
						growth and increased sales by optimizing your online presence.
					</p> */}
				</div>
			</div>
		</section>
	);
}
