"use client";
import { Menu } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar: React.FC = () => {
    const [isNavbar, setIsNavbar] = useState(false);
    const { setTheme } = useTheme();

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
        <header className="flex justify-between items-center sticky top-0 bg-white z-50 h-20 px-20 max-sm:px-5">
            <div className="w-2/6 sm:w-1/5 p-1">
                <Image
                    height={175}
                    width={175}
                    src="/logo.png"
                    alt="logo"
                    className="max-sm:w-24"
                />
            </div>
            <div className="hidden md:flex items-center gap-10 w-3/5 justify-evenly px-20 ">
                {links.map((link) => (
                    <Link
                        className="duration-200 border-b-2 border-b-transparent transition-all font-bold hover:border-b-2 hover:border-blue-300 hover:text-blue-300"
                        key={link.id}
                        href={link.href}
                    >
                        {link.title}
                    </Link>
                ))}
            </div>
            <div className="w-1/5 flex justify-center items-center max-sm:hidden max-md:hidden">
                <button className="w-3/5 inline-flex h-12 items-center bg-blue-300 rounded justify-center text-white font-bold shadow-sm hover:-translate-y-1 transition-all duration-200 hover:bg-blue-400">
                    Contact Us
                </button>
            </div>

            <button
                className="block md:hidden"
                onClick={() => setIsNavbar(!isNavbar)}
            >
                <Menu />
            </button>
            {isNavbar && (
                <div className="absolute top-16 left-0  bg-white shadow flex flex-col items-center py-5 md:hidden w-full">
                    {links.map((link) => (
                        <Link
                            className="transition hover:text-[#25BE7C] mb-3"
                            key={link.id}
                            href={link.href}
                            onClick={() => setIsNavbar(false)}
                        >
                            {link.title}
                        </Link>
                    ))}
                    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border  bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        Contact Us
                    </button>
                </div>
            )}
        </header>
    );
};

export default Navbar;
