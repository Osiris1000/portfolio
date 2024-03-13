import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { CardProps } from "../../constants/problems-and-solutions";
import Image from "next/image";

export function CardComponent({ icon, title, subtitle }: CardProps) {
	return (
		<Card className="w-[350px] h-[450px] border-none shadow-xl">
			<CardTitle className="text-center my-12 flex justify-center items-center">
				<Image
					src={icon as CardProps["icon"]}
					alt="problem_icon"
					width={50}
					height={50}
					className="w-[80px] h-[80px]"
				/>
			</CardTitle>
			<h3 className="text-center font-semibold">{title}</h3>

			<CardContent className="my-12 text-center text-black/50">
				{subtitle}
			</CardContent>
		</Card>
	);
}
