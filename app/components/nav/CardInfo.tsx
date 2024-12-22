"use client";

import React from "react";

const CardInfo = ({
    activeCard,
}: {
    activeCard?: { label?: string; description?: string }; // anther data are required
}) => {
    return (
        <div className="fixed right-10 bottom-14 h-[780px] w-[300px] bg-[#000000] shadow-2xl rounded-2xl p-5 z-50 overflow-hidden md:h-[600px] sm:h-[500px] sm:w-[250px] lg:h-[780px] lg:w-[300px]">
            <h2 className="text-yellow-200 text-5xl font-black mb-10">
                Details
            </h2>
            {activeCard ? (
                <div>
                    <h3 className="text-xl text-white font-bold">
                        {activeCard.label}
                    </h3>
                    <p className="font-medium text-gray-200 mt-4">
                        {activeCard.description}
                    </p>
                </div>
            ) : (
                <p className="text-gray-400">Select a card to view details.</p>
            )}
        </div>
    );
};

export default CardInfo;
