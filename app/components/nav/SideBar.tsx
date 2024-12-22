"use client";

import React from "react";
import Logo from "../defaults/Logo";
import { FaHeart } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { MdDashboard } from "react-icons/md";
import { FaFireFlameCurved } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { IoTicketSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { BsCircleSquare } from "react-icons/bs";
import NavLink from "./NavLink";

export const NAV_LINKS = [
    { link: "/home", label: "Home", icon: <GoHomeFill /> },
    { link: "/trends", label: "Trend", icon: <FaFireFlameCurved /> },
    { link: "/category", label: "Category", icon: <MdDashboard /> },
    { link: "/following", label: "Following", icon: <FaStar /> },
    { link: "/wishlist", label: "Wishlist", icon: <FaHeart /> },
    { link: "/offers", label: "Offers", icon: <BiSolidOffer /> },
    { link: "/mytickets", label: "My Tickets", icon: <IoTicketSharp /> },
    { link: "/settings", label: "Settings", icon: <IoSettingsSharp /> },
    { link: "/aboutus", label: "About Us", icon: <BsCircleSquare /> },
];

const SideBar = () => {
    return (
        <div className="col-span-2">
            <div className="h-screen sticky inset-0 py-10 px-10 flex flex-col items-start bg-black/50 rounded-r-3xl text-[#000000]">
                <Logo />
                {NAV_LINKS.map((navLink, index) => (
                    <NavLink key={navLink.link || index} navLink={navLink} />
                ))}
            </div>
        </div>
    );
};

export default SideBar;
