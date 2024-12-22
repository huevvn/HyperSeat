"use client";

import React from "react";
import Image from "next/image";

const page = () => {
    return (
        <section>
            <h1 className="trend text-5xl font-black text-white mt-5">Pop</h1>
            <section className="flex">
                {/* First div */}

                <div className="flex items-center mt-5">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[280px] h-[175px] object-cover object-right rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/pop/bh.jpeg"
                            alt="Beach House"
                            layout="fill"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Beach House{" "}
                        </span>
                    </button>
                </div>

                <div className="flex items-center mt-3 ml-5">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative mt-2 w-[280px] h-[175px] rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/pop/clairo.jpg"
                            alt="Clairo"
                            layout="fill"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Clairo{""}
                        </span>
                    </button>
                </div>
                {/* Second div */}
                <div className="flex items-center mt-5 ml-5">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[280px] h-[175px] object-cover rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/pop/t8.jpg"
                            alt="TUL8TE"
                            layout="fill"
                            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-5 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            TUL8TE{" "}
                        </span>
                    </button>
                </div>
                <div className="flex items-center mt-5 ml-5">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[280px] h-[175px] object-cover object-right rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/pop/twknd.webp"
                            alt="The weeknd"
                            layout="fill"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            The Weeknd{" "}
                        </span>
                    </button>
                </div>

                <div className="flex items-center mt-5 ml-5">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[280px] h-[175px] object-cover object-right rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/pop/lc.jpg"
                            alt="Lewis Capaldi"
                            layout="fill"
                            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Lewis Capaldi{" "}
                        </span>
                    </button>
                </div>
            </section>
            {/* second section */}
            <h1 className="trend text-5xl font-black text-white mt-5">
                Hip-Hop / Rap
            </h1>
            <section className="flex">
                {/* First div */}
                <div className="flex items-center mt-3">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative mt-2 w-[280px] h-[175px] rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/rap/kw.jpg"
                            alt="Hurry Up Tomorrow"
                            layout="fill"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Kanye West{""}
                        </span>
                    </button>
                </div>
                {/* Second div */}
                <div className="flex items-center mt-5 ml-5">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[280px] h-[175px] object-cover object-right rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/rap/scott.webp"
                            alt="Travis Scott"
                            layout="fill"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-5 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Travis Scott{" "}
                        </span>
                    </button>
                </div>
                <div className="flex items-center mt-5 ml-5">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[280px] h-[175px] object-cover object-right rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/rap/drake.webp"
                            alt="Drake"
                            layout="fill"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Drake{" "}
                        </span>
                    </button>
                </div>

                <div className="flex items-center mt-5 ml-5">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[280px] h-[175px] object-cover object-right rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/rap/jc.jpg"
                            alt="J. Cole"
                            layout="fill"
                            className="object-cover object-bottom transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            J. Cole{" "}
                        </span>
                    </button>
                </div>
                <div className="flex items-center mt-5 ml-5">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[280px] h-[175px] object-cover object-right rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/rap/yeat.png"
                            alt="Yeat"
                            layout="fill"
                            className="object-cover object-right transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Yeat{" "}
                        </span>
                    </button>
                </div>
            </section>
            {/* third section */}
            <h1 className="trend text-5xl font-black text-white mt-5">Indie</h1>
            <section className="flex">
                {/* First div */}

                <div className="flex items-center mt-5 ">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[280px] h-[175px] object-cover object-right rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/indie/mdm.jpg"
                            alt="Mac DeMarco"
                            layout="fill"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-5 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Mac DeMarco{" "}
                        </span>
                    </button>
                </div>

                <div className="flex items-center mt-3 ml-5">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative mt-2 w-[280px] h-[175px] rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/indie/vac.jpg"
                            alt="Vacations"
                            layout="fill"
                            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Vacations{""}
                        </span>
                    </button>
                </div>
                {/* Second div */}

                <div className="flex items-center mt-5 ml-5">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[280px] h-[175px] object-cover object-right rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/indie/sw.jpg"
                            alt="Still Woozy"
                            layout="fill"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Still Woozy{" "}
                        </span>
                    </button>
                </div>

                <div className="flex items-center mt-5 ml-5">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[280px] h-[175px] object-cover object-right rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/indie/m.jpg"
                            alt="J. Cole"
                            layout="fill"
                            className="object-cover object-bottom transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Mitski{" "}
                        </span>
                    </button>
                </div>
                <div className="flex items-center mt-5 ml-5">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[280px] h-[175px] object-cover object-right rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/indie/ch.jpg"
                            alt="Chezile"
                            layout="fill"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Chezile{" "}
                        </span>
                    </button>
                </div>
            </section>

            {/* fourth section */}
            <h1 className="trend text-5xl font-black text-white mt-5">
                Alternative
            </h1>
            <section className="flex">
                {/* First div */}
                <div className="flex items-center mt-3">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative mt-2 w-[280px] h-[175px] rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/alternative/am.webp"
                            alt="Arctic Monkeys"
                            layout="fill"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-2 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Arctic Monkeys{""}
                        </span>
                    </button>
                </div>
                {/* Second div */}
                <div className="flex items-center mt-5 ml-5">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[280px] h-[175px] object-cover object-right rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/alternative/tv.jpg"
                            alt="TV Girl"
                            layout="fill"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-5 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            TV Girl{" "}
                        </span>
                    </button>
                </div>
                <div className="flex items-center mt-5 ml-5">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[280px] h-[175px] object-cover object-right rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/alternative/ts.jpg"
                            alt="The Smiths"
                            layout="fill"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            The Smiths{" "}
                        </span>
                    </button>
                </div>

                <div className="flex items-center mt-5 ml-5">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[280px] h-[175px] object-cover object-right rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/alternative/ti.jpg"
                            alt="Tame Impala"
                            layout="fill"
                            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Tame Impala{" "}
                        </span>
                    </button>
                </div>
                <div className="flex items-center mt-5 ml-5">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[280px] h-[175px] object-cover object-right rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/alternative/stv.jpg"
                            alt="St. vincent"
                            layout="fill"
                            className="object-cover object-bottom transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            St. vincent{" "}
                        </span>
                    </button>
                </div>
            </section>

            {/* fifth section */}
            <h1 className="trend text-5xl font-black text-white mt-5">Jazz</h1>
            <section className="flex">
                {/* First div */}
                <div className="flex items-center mt-6">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[280px] h-[175px] object-cover object-right rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/jazz/fs.jpg"
                            alt="Frank Sinatra"
                            layout="fill"
                            className="object-cover object-right-bottom transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Frank Sinatra{" "}
                        </span>
                    </button>
                </div>

                <div className="flex items-center mt-3 ml-5">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative mt-2 w-[280px] h-[175px] rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/jazz/blb.jpg"
                            alt="Blue Lab Beats"
                            layout="fill"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-2 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Blue Lab Beats{""}
                        </span>
                    </button>
                </div>
                {/* Second div */}
                <div className="flex items-center mt-5 ml-5">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[280px] h-[175px] object-cover object-right rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/jazz/sj.jpg"
                            alt="TV Girl"
                            layout="fill"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-5 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Samara Joy{" "}
                        </span>
                    </button>
                </div>
                <div className="flex items-center mt-5 ml-5">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[280px] h-[175px] object-cover object-right rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/jazz/cl.jpg"
                            alt="Charles Lloyd"
                            layout="fill"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Charles Lloyd{" "}
                        </span>
                    </button>
                </div>

                <div className="flex items-center mt-5 ml-5">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[280px] h-[175px] object-cover object-right rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/jazz/vl.jpg"
                            alt="Vijay Iyer"
                            layout="fill"
                            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Vijay Iyer{" "}
                        </span>
                    </button>
                </div>
            </section>

            {/* sixth section */}
            <h1 className="trend text-5xl font-black text-white mt-5">Rock</h1>
            <section className="flex">
                {/* First div */}
                <div className="flex items-center mt-3">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative mt-2 w-[280px] h-[175px] rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/rock/tc.jpg"
                            alt="The Cure"
                            layout="fill"
                            className="object-cover object-right transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            The Cure{""}
                        </span>
                    </button>
                </div>
                {/* Second div */}
                <div className="flex items-center mt-5 ml-5">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[280px] h-[175px] object-cover object-right rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/rock/ff.webp"
                            alt="Foo Fighters"
                            layout="fill"
                            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-5 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Foo Fighters{" "}
                        </span>
                    </button>
                </div>
                <div className="flex items-center mt-5 ml-5">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[280px] h-[175px] object-cover object-right rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/rock/pj.jpeg"
                            alt="Pearl Jam"
                            layout="fill"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Pearl Jam{" "}
                        </span>
                    </button>
                </div>

                <div className="flex items-center mt-5 ml-5">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[280px] h-[175px] object-cover object-right rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/rock/rp.jpg"
                            alt="Royal Blood"
                            layout="fill"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Royal Blood{" "}
                        </span>
                    </button>
                </div>
                <div className="flex items-center mt-5 ml-5">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[280px] h-[175px] object-cover object-right rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/rock/tk.webp"
                            alt="The Killers"
                            layout="fill"
                            className="object-cover object-bottom transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            The Killers{" "}
                        </span>
                    </button>
                </div>
            </section>

            {/* Seventh section */}
            <h1 className="trend text-5xl font-black text-white mt-5">
                Country
            </h1>
            <section className="flex">
                {/* First div */}
                <div className="flex items-center mt-3">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative mt-2 w-[280px] h-[175px] rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/country/cs.jpg"
                            alt="Chris Stapleton"
                            layout="fill"
                            className="object-cover object-right transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-2 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Chris Stapleton{""}
                        </span>
                    </button>
                </div>
                {/* Second div */}
                <div className="flex items-center mt-5 ml-5">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[280px] h-[175px] object-cover object-left rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/country/ml.jpg"
                            alt="Miranda Lambert"
                            layout="fill"
                            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-5 text-yellow-300 text-3xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Miranda Lambert{" "}
                        </span>
                    </button>
                </div>
                <div className="flex items-center mt-5 ml-5">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[280px] h-[175px] object-cover object-right rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/country/km.webp"
                            alt="Kacey Musgraves"
                            layout="fill"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-3xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Kacey Musgraves{" "}
                        </span>
                    </button>
                </div>

                <div className="flex items-center mt-5 ml-5">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[280px] h-[175px] object-cover object-right rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/country/ec.webp"
                            alt="Eric Church"
                            layout="fill"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Eric Church{" "}
                        </span>
                    </button>
                </div>
                <div className="flex items-center mt-5 ml-5">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[280px] h-[175px] object-cover object-right rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/country/mw.png"
                            alt="Morgan Wallen"
                            layout="fill"
                            className="object-cover object-bottom transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Morgan Wallen{" "}
                        </span>
                    </button>
                </div>
            </section>
        </section>
    );
};

export default page;
