"use client";

import { Button } from "@/components/ui/button";
import { FaArrowUp } from "react-icons/fa6";

export default function ScrollToTop() {
    return (
        <Button
            onClick={() => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            }}
            className="fixed bottom-4 right-4"
        >
            <FaArrowUp />
        </Button>
    );
}
