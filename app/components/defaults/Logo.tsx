import Link from "next/link";
import React from "react";

const Logo = () => {
    return (
        <Link
            href="/home"
            className="font-light my-5 md:text-2xl lg:text-5xl flex items-center gap-2"
        >
            <h1 className="text-yellow-100 glow-effect">HyperSeat</h1>
        </Link>
    );
};

export default Logo;
