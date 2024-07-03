"use client";

import React, { useState } from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
    const words = ["work", "internships", "bootcamps", "courses"];
    const [hovered, setHovered] = useState(false);

    return (
        <header className="relative top-0 h-screen">
            <div className="flex justify-center items-center px-4 text-left flex-col sm:pt-36 pt-20">
                <h1 className="max-sm:text-4xl text-7xl font-bold text-neutral-900 dark:text-neutral-200 w-[55%] max-sm:w-full">
                    Find
                    <FlipWords
                        words={words}
                        className="bg-blue-300 rounded text-white ml-2 py-2 px-5"
                    />{" "}
                    <br />
                    for you all in one place
                </h1>
                <p className="text-neutral-400 dark:text-neutral-400 w-[55%] pt-5 max-sm:w-full">
                    Praksa is a platform that connects students and
                    professionals with companies and schools. We offer a variety
                    of opportunities such as summer internships, bootcamps,
                    courses, and work opportunities. We are here to help you
                    find the best opportunities.
                </p>
                <Link href="#about" passHref>
                    <a className="w-[55%] pt-5 max-sm:w-full">
                        <Button
                            className="w-48 h-15 text-xl font-bold flex items-center"
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            aria-label="Read more about Praksa"
                        >
                            Read More
                            <motion.div
                                animate={{
                                    rotate: hovered ? 90 : 0,
                                    scale: hovered ? 1.2 : 1,
                                }}
                                transition={{
                                    duration: 0.2,
                                    ease: "easeInOut",
                                }}
                                className="ml-2"
                            >
                                <FaArrowRight />
                            </motion.div>
                        </Button>
                    </a>
                </Link>
            </div>
        </header>
    );
}
