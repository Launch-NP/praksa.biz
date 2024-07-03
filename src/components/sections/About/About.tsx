import Image from "next/image";
import React from "react";
import Numbers from "./Numbers";

const Section = ({ imageFirst, title, text }: any) => (
    <div className="w-full flex px-36">
        {imageFirst && (
            <div className="w-1/2 flex items-center justify-center py-10">
                <Image src="/logo.png" alt="logo" width={300} height={300} />
            </div>
        )}
        <div className="w-1/2 flex justify-center flex-col text-left pl-20 bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 shadow-sm">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="font-light pt-2 w-5/6">{text}</p>
        </div>
        {!imageFirst && (
            <div className="w-1/2 flex items-center justify-center py-10">
                <Image src="/logo.png" alt="logo" width={300} height={300} />
            </div>
        )}
    </div>
);

export function About() {
    return (
        <div className="relative top-0" id="about">
            <div className="flex justify-center items-center px-4 text-left flex-col h-full">
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
            </div>
            <Numbers />
        </div>
    );
}
