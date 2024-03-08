import React from "react";
import { Button } from "../ui/button";

export default function Herosection() {
	return (
		<section className="flex flex-col items-center md:items-start px-5 pt-10">
			<h1>Herosection Lorem, ipsum dolor.</h1>
			<h2>Osiris Digital Agency</h2>
			<h3>bringing you the best</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit iste
				harum repellat!
			</p>

			<div>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minima
				dolorem suscipit veritatis! Quidem veniam impedit architecto repellat
				molestiae hic sint error est.
			</div>
			<Button className="gradient-button">press me</Button>
		</section>
	);
}
