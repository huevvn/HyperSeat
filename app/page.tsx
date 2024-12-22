"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const LandingPage = () => {
    return (
        <section className="landingBG flex h-screen w-screen items-center justify-center px-5">
            <Card className="bg-white w-full max-w-5xl text-center shadow-2xl flex flex-col md:flex-row">
                <div className="md:w-1/2 p-5 md:p-10">
                    <CardHeader>
                        <CardTitle className="text-black text-5xl md:text-6xl font-black pt-5">
                            Welcome to{" "}
                            <span className="text-specialColor text-[#700000]">
                                HyperSeat
                            </span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="mt-10">
                        <CardDescription className="text-[#000000] font-semibold text-2xl md:text-4xl mb-10">
                            Experience the Hype, Own the Vibe
                        </CardDescription>
                        <p className="text-xl md:text-2xl mb-10">
                            Join us to book your seat for top concerts and live
                            shows.
                        </p>
                        <div className="flex justify-center gap-4 md:gap-8 mb-10">
                            <a href="/signup">
                                <Button className="bg-[#620101] text-yellow-200 font-bold rounded-full py-6 md:py-8 px-8 md:px-12 text-2xl md:text-xl hover:bg-[#000000] hover:text-white transition duration-500 ease-in-out transform">
                                    <p className="mx-3">Sign Up</p>
                                </Button>
                            </a>
                            <a href="/login">
                                <Button className="bg-[#001b4d] text-yellow-200 font-bold rounded-full py-6 md:py-8 px-8 md:px-12 text-2xl md:text-xl hover:bg-black hover:text-white transition duration-500 ease-out transform">
                                    <p className="mx-3">Log In</p>
                                </Button>
                            </a>
                        </div>
                    </CardContent>
                </div>
                <div className="flex justify-center items-center md:w-1/2 p-5 md:p-10">
                    <Image
                        src="/landing/music.svg"
                        alt="illustration"
                        width={700}
                        height={700}
                        className="w-full h-auto"
                    />
                </div>
            </Card>
        </section>
    );
};

export default LandingPage;
