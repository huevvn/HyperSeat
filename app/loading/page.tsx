"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Loading = () => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/aboutus"); // Redirect after 3-5 seconds
        }, 1000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className="landingBG flex h-screen w-full items-center justify-center">
            <div className="loader"></div>
        </div>
    );
};

export default Loading;
