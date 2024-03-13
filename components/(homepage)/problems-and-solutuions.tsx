import React from "react";
import {
	CardProps,
	problems,
	solutions,
} from "../../constants/problems-and-solutions";
import { CardComponent } from "./card";
import { Button } from "../ui/button";
import Link from "next/link";

export default function ProblemsAndSolutions() {
	return (
		<section className="px-5 mt-40 my-20">
			<h2 className="text-3xl font-bold text-center my-8">
				Forget Traffic. We Focus on What Truly Matters: <br />{" "}
				<span className=" bg-[var(--blue)] text-white uppercase px-[2px] leading-[200%]">
					Conversions.
				</span>
			</h2>

			<h3 className="font-medium text-center leading-[250%] text-black/60">
				High website traffic is meaningless without a plan to convert visitors
				into paying customers. <br className="hidden md:block" />
				We bridge the gap with proven strategies.
			</h3>
			<div className="flex justify-center items-center gap-12 flex-wrap mt-20">
				{problems.map((prob: CardProps) => {
					return <CardComponent key={prob.title} {...prob} />;
				})}
			</div>

			<div className="my-40">
				<h2 className="text-3xl font-bold text-center my-8">
					Turn website visitors into paying customers{" "}
					<br className="hidden md:block" />
					with a landing page that works tirelessly.
				</h2>

				<h3 className="text-center font-medium leading-[200%] text-black/60">
					Imagine: Your ideal customer lands on your website, engaged and ready
					to convert. <br className="hidden md:block" />
					Our expertly crafted landing pages act as your 24/7 salesperson,
					guiding them through <br className="hidden md:block" />a clear and
					compelling journey that maximizes conversions.
				</h3>
				<Link
					href={"/booking"}
					className="flex justify-center items-center my-10"
				>
					<Button className="py-6 bg-[var(--blue)] rounded-3xl px-8 hover:bg-[#1667fe]/80 text-lg font-bold">
						Book a FREE strategy call
					</Button>
				</Link>

				<div className="flex justify-center items-center gap-12 flex-wrap mt-20">
					{solutions.map((prob: CardProps) => {
						return <CardComponent key={prob.title} {...prob} />;
					})}
				</div>
			</div>
		</section>
	);
}
