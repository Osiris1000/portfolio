import React from "react";
import {
	Sheet,
	SheetPortal,
	SheetOverlay,
	SheetTrigger,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetFooter,
	SheetTitle,
	SheetDescription,
} from "../../components/ui/sheet";
import Image from "next/image";

import cartImage from "../../public/animated-cart-bag.svg";

import CartSvg from "./cart-svg";

export default function Cart() {
	return (
		<Sheet>
			<SheetTrigger>
				<li className="cursor-pointer">
					<CartSvg />
				</li>
			</SheetTrigger>
			<SheetContent side="right">
				<SheetHeader>
					<SheetTitle>Are you absolutely sure?</SheetTitle>
					<SheetDescription>
						This action cannot be undone. This will permanently delete your
						account and remove your data from our servers.
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
}
