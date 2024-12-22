"use client";

import React from "react";
import Image from "next/image";

const page = () => {
    return (
        <section>
            <section className="flex space-x-4 mt-5">
                <h1 className="trend text-9xl font-black text-white mt-7">
                    What's Hot?
                </h1>
                {/* First div */}
                <div className="flex items-center ml-1">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[400px] h-[300px] rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/trendPics/hru.jpg"
                            alt="Hurry Up Tomorrow"
                            layout="fill"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="pl-4 absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Hurry Up Tomorrow{""}
                            <span className="text-2xl text-white">
                                {" "}
                                <br />
                                The Weeknd
                            </span>
                        </span>
                    </button>
                </div>
                {/* Second div */}
                <div className="flex items-center ml-1">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[630px] h-[300px] object-cover object-right rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/trendPics/chromaPlane.webp"
                            alt="Chromakopia"
                            layout="fill"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Chromakopia{" "}
                            <span className="text-2xl text-white">
                                Tyler, The Creator
                            </span>
                        </span>
                    </button>
                </div>
            </section>

            {/* second section */}
            <section className="flex space-x-4 mt-5">
                {/* First div */}
                <div className="flex items-center ml-1">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[450px] h-[200px] rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/trendPics/kny.png"
                            alt="Bully"
                            layout="fill"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Bully{" "}
                            <span className="text-2xl text-white">
                                Kanye West
                            </span>
                        </span>
                    </button>
                </div>

                {/* second div */}
                <div className="flex items-center">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[500px] h-[200px] rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/trendPics/ilmond.png"
                            alt="ilmond"
                            layout="fill"
                            className="object-cover object-left transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Intifada <br />{" "}
                            <span className="text-2xl text-white">Ilmond</span>
                        </span>
                    </button>
                </div>

                {/* Third div */}
                <div className="flex items-center">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[500px] h-[200px] rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/trendPics/tv0.jpeg"
                            alt="TV Girl"
                            layout="fill"
                            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            The Night
                            <br />
                            in Question <br />{" "}
                            <span className="text-2xl text-white">TV Girl</span>
                        </span>
                    </button>
                </div>
            </section>

            {/* third section */}
            <section className="flex space-x-4 mt-5">
                {/* First div */}
                <div className="flex items-center ml-10">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[700px] h-[250px] rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/trendPics/y.jpg"
                            alt="Bully"
                            layout="fill"
                            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            2093{" "}
                            <span className="text-2xl text-white">Yeat</span>
                        </span>
                    </button>
                </div>
                {/* Second div */}
                <div className="flex items-center">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[700px] h-[250px] rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/trendPics/utopia.jpg"
                            alt="ilmond"
                            layout="fill"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            UTOPIA{" "}
                            <span className="text-2xl text-white">
                                Travis Scott
                            </span>
                        </span>
                    </button>
                </div>
            </section>
        </section>
    );
};

export default page;
