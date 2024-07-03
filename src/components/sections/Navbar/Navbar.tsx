"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Dropdown from "./Dropdown";

const Navbar: React.FC = () => {
    const [isNavbar, setIsNavbar] = useState(false);

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
        <header className="flex justify-between items-center sticky top-0 bg-white z-50 h-20 px-20 max-sm:px-10">
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
            <Dropdown />
        </header>
    );
};

export default Navbar;
