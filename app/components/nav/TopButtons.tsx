"use client";

import { Button } from "@/components/ui/button";
import { BsEnvelopeOpenHeart } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import React from "react";

const AuthButtons = () => {
    return (
        <div className="absolute right-5 top-5 md:right-10 md:top-10 flex space-x-2 md:space-x-4 z-50">
            {/* Support */}
            <Button className="bg-black hover:bg-white hover:text-black text-white rounded-full px-3 py-4 md:px-5 md:py-7 text-sm md:text-base duration-500">
                Buy me a Coffee <BsEnvelopeOpenHeart className="ml-2" />
            </Button>

            {/* Profile */}
            <Button className="bg-yellow-200 hover:bg-black text-black hover:text-yellow-200 rounded-full px-4 py-4 md:px-6 md:py-7 text-sm md:text-base duration-500">
                Profile <CgProfile />
            </Button>
        </div>
    );
};

const CardInfo = ({
    activeCard,
}: {
    activeCard?: { label?: string; description?: string };
}) => {
    return (
        <div className="left-14">
            <AuthButtons />
        </div>
    );
};

export default CardInfo;
