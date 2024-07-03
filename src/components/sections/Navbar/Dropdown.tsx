import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Dropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="max-sm:block hidden mr-5">
                <Menu />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="cursor-pointer">
                <Link href="/" className="hover:cursor-pointer">
                    <DropdownMenuItem>Home</DropdownMenuItem>
                </Link>
                <Link href="#about" className="hover:cursor-pointer">
                    <DropdownMenuItem>About</DropdownMenuItem>
                </Link>
                <Link href="#whyus" className="hover:cursor-pointer">
                    <DropdownMenuItem>Why Us?</DropdownMenuItem>
                </Link>
                <Link href="#contact" className="hover:cursor-pointer">
                    <DropdownMenuItem>Contact</DropdownMenuItem>
                </Link>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
