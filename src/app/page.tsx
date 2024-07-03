"use client";

import Head from "next/head"; // Import Head for setting page metadata
import { About } from "../components/sections/About/About";
import { Contact } from "../components/sections/Contact/Contact";
import { Hero } from "../components/sections/Hero/Hero";

export default function Home() {
    return (
        <>
            <Head>
                <title>praksa.biz</title>
                <meta
                    name="description"
                    content="Praksa.biz is a platform for finding internships and jobs in the Balkans."
                />
                <meta
                    name="keywords"
                    content="internship, job, balkans, praksa, praksa.biz"
                />
                <link rel="canonical" href="https://www.praksa.biz/" />
            </Head>
            <main>
                <div className="fixed inset-0 -z-10 h-full w-full bg-custom-radial"></div>
                <Hero />
                <About />
                <Contact />
            </main>
        </>
    );
}
