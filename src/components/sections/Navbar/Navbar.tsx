import Image from "next/image";
import Link from "next/link";
import React from "react";
import Dropdown from "./Dropdown";

const Navbar: React.FC = () => {
    const links = [
        {
            id: 1,
            title: "HOME",
            href: "/",
        },
        {
            id: 2,
            title: "ABOUT",
            href: "#about",
        },
        {
            id: 3,
            title: "WHY US?",
            href: "#whyus",
        },
    ];

    return (
        <nav className="flex justify-between items-center sticky top-0 bg-white z-50 h-20 px-20 max-sm:px-10">
            <div className="w-2/6 sm:w-1/5 p-1">
                <Link href="/" passHref>
                    <Image
                        height={175}
                        width={175}
                        src="/logo.png"
                        alt="logo"
                        className="max-sm:w-24"
                    />
                </Link>
            </div>
            <ul className="hidden md:flex items-center gap-10 w-3/5 justify-evenly px-20 ">
                {links.map((link) => (
                    <li key={link.id}>
                        <Link
                            href={link.href}
                            className="duration-200 border-b-2 border-b-transparent transition-all font-bold hover:border-b-2 hover:border-blue-300 hover:text-blue-300"
                        >
                            {link.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="w-1/5 flex justify-center items-center max-sm:hidden max-md:hidden">
                <Link
                    href="/contact"
                    className="w-3/5 inline-flex h-12 items-center bg-blue-300 rounded justify-center text-white font-bold shadow-sm hover:-translate-y-1 transition-all duration-200 hover:bg-blue-400"
                >
                    Contact Us
                </Link>
            </div>
            <Dropdown />
        </nav>
    );
};

export default Navbar;
