"use client";

import { SearchIcon } from "lucide-react";
import React, { useState } from "react";

const Search = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div
            className="group py-3 px-6 rounded-full h-full w-full md:w-[40%] lg:w-full bg-[#00030e] flex items-center"
            onClick={() => setIsActive(true)}
        >
            <SearchIcon
                className={`text-[#F0EBD8] w-5 h-5 m-3 mr-5 cursor-pointer duration-500 group-hover:text-yellow-200 ${
                    isActive ? "text-yellow-400 w-9 h-9" : ""
                }`}
            />
            <input
                type="text"
                placeholder="Search..."
                className="w-full font-semibold bg-transparent text-[#ffffff] placeholder:text-[#F0EBD8]/35 border-none outline-none focus:ring-0 text-sm md:text-base lg:text-lg"
                aria-label="Search"
                onFocus={() => setIsActive(true)}
                onBlur={() => setIsActive(false)}
            />
        </div>
    );
};

export default Search;
