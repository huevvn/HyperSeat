import React from "react";
import Search from "../Search";

const NavBar = () => {
    return (
        <nav>
            <header className="flex justify-between items-center">
                <Search />
                <div className="font-semibold text-lg flex items-center"></div>
            </header>
        </nav>
    );
};

export default NavBar;
