import Image from "next/image";
import React from "react";
import Numbers from "./Numbers";

interface SectionProps {
    imageFirst: boolean;
    title: string;
    text: string;
}

const Section: React.FC<SectionProps> = ({ imageFirst, title, text }) => (
    <section className="flex flex-col md:flex-row w-full px-4 md:px-36 py-10">
        {imageFirst && (
            <div className="flex items-center justify-center md:w-1/2 py-5">
                <Image
                    src="/logo.png"
                    alt="Company logo"
                    width={250}
                    height={250}
                />
            </div>
        )}
        <div className="flex justify-center flex-col text-left md:pl-20 bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 shadow-sm max-sm:p-4">
            <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
            <p className="font-light pt-2 w-full md:w-5/6">{text}</p>
        </div>
        {!imageFirst && (
            <div className="flex items-center justify-center md:w-1/2 py-5 max-sm:hidden">
                <Image
                    src="/logo.png"
                    alt="Company logo"
                    width={250}
                    height={250}
                />
            </div>
        )}
    </section>
);

export function About() {
    return (
        <main className="relative top-0" id="about">
            <header className="flex justify-center items-center px-4 text-left flex-col h-full">
                <Section
                    imageFirst={false}
                    title="About Us"
                    text="Driven by a passion and a vision to inspire as many students and professionals as possible, Praksa is a platform that connects students and professionals with companies and schools. Our mission is to help as many as we can transition from the classroom to the workplace."
                />
                <Section
                    imageFirst={true}
                    title="Helping since 2020"
                    text="Praksa was founded in 2020 by a group of students who wanted to help their peers find opportunities that would help them grow and develop their skills. Since then, we have been working tirelessly to help as many students and professionals as possible."
                />
            </header>
            <Numbers />
        </main>
    );
}
