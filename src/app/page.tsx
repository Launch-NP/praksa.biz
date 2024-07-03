"use client";

import { About } from "../components/sections/About/About";
import { Contact } from "../components/sections/Contact/Contact";
import { Hero } from "../components/sections/Hero/Hero";

export default function Home() {
    return (
        <>
            <div className="fixed inset-0 -z-10 h-full w-full bg-custom-radial"></div>
            <Hero />
            <About />
            <Contact />
        </>
    );
}
