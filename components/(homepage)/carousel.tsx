import Image from "next/image";

import { logos } from "../../constants/carousel_images";

export default function Carousel() {
	return (
		<section>
			<div className="my-20 mx-5 md:mx-auto max-w-[1150px] overflow-hidden select-none marquee relative ">
				<div className="flex overflow-hidden scroll-smooth whitespace-nowrap ">
					<div className="flex items-center gap-12 logo_carousel">
						{logos.map((image, i) => (
							<div
								key={i}
								className="h-[60px] w-[100px]  flex items-center justify-center "
							>
								<Image
									src={image}
									alt={`sponsor_logo_${i}`}
									width={300}
									height={300}
									className="object-contain w-full px-5 aspect-video grayscale hover:grayscale-0 shaow-lg"
								/>
							</div>
						))}
					</div>
					<div className="flex items-center gap-12 logo_carousel">
						{logos.map((image, i) => (
							<div
								key={i}
								className="h-[60px] w-[100px]  flex items-center justify-center "
							>
								<Image
									src={image}
									alt={`sponsor_logo_${i}`}
									width={300}
									height={300}
									className="object-contain w-full px-5 aspect-video grayscale hover:grayscale-0 shaow-lg"
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
// w-[clamp(10rem, 1rem + 40vmin, 30rem)] p-[calc(10rem, 1rem + 30vmin, 30rem )]
//  className="flex items-center justify-center w-full overflow-hidden select-none whitespace-nowrap scroll-smooth masked "
// className="object-contain w-full h-full px-5 py-1 rounded aspect-video grayscale hover:grayscale-0 shaow-lg"
//  className="grid place-items-center"
// className="flex items-center justify-around w-full logo_carousel"
// className="object-contain w-full h-full px-5 py-1 rounded aspect-video grayscale hover:grayscale-0 shaow-lg"
// className="flex items-center justify-around w-full logo_carousel"
