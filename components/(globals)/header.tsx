import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<header>
			<nav className="absolute top-0 w-full backdrop-blur-xl h-[4rem] flex px-4">
				<ul className="mx-auto max-w-[1150px] flex justify-between items-center w-full">
					<li className="font-bold">
						<Image
							src={"/logo.png"}
							alt="logo-image"
							width={500}
							height={500}
							className="w-[25px] h-[25px] object-cover"
						/>
					</li>

					<ul className="hidden gap-5  text-black md:flex nunito">
						<Link href="/" className="capitalize text-sm font-medium">
							home
						</Link>
						<Link href="/" className=" capitalize text-sm font-medium">
							Services
						</Link>

						<Link href="/" className=" capitalize text-sm font-medium">
							Expressions
						</Link>
						<Link href="/" className=" capitalize text-sm font-medium">
							Ethos
						</Link>
						<Link href="/" className=" capitalize text-sm font-medium">
							Profile
						</Link>
						<Link href="/" className=" capitalize text-sm font-medium">
							Connect
						</Link>
					</ul>

					<li className="cursor-pointer">
						<svg
							aria-hidden="true"
							fill="none"
							focusable="false"
							width="20"
							className="header__nav-icon icon icon-cart"
							viewBox="0 0 24 24"
						>
							<path
								d="M4.75 8.25A.75.75 0 0 0 4 9L3 19.125c0 1.418 1.207 2.625 2.625 2.625h12.75c1.418 0 2.625-1.149 2.625-2.566L20 9a.75.75 0 0 0-.75-.75H4.75Zm2.75 0v-1.5a4.5 4.5 0 0 1 4.5-4.5v0a4.5 4.5 0 0 1 4.5 4.5v1.5"
								stroke="currentColor"
								stroke-width="1.8"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path>
						</svg>
					</li>
				</ul>
			</nav>
		</header>
	);
}
