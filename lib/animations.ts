"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const animateNav = (tag: string) => {
	const tl = useRef<gsap.core.Timeline | null>(null);

	useGSAP(() => {
		gsap.to(`.${tag}`, {
			y: 0,
			duration: 1,
			opacity: 1,
			ease: "bounce.out",
		});
	});
};
