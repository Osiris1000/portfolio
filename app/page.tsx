import Test from "@/components/(globals)/cart-svg";
import Carousel from "@/components/(homepage)/carousel";
import Herosection from "@/components/(homepage)/hero-section";
import ProblemsAndSolutions from "@/components/(homepage)/problems-and-solutuions";
import Showcase from "@/components/(homepage)/showcase";

export default function Home() {
	return (
		<main className="">
			<Herosection />
			<Carousel />
			<ProblemsAndSolutions />
		</main>
	);
}
