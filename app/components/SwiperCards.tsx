"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type SwiperType from "swiper";
import "swiper/css";
import CardInfo from "./nav/CardInfo";

const SwiperCards = ({
    items,
    paginationImages,
    className,
    slidesPerView,
}: {
    items: {
        card: React.ReactNode;
        src?: string;
        label?: string;
        description?: string;
    }[];
    paginationImages?: boolean;
    className?: string;
    slidesPerView?: number;
}) => {
    const [swiper, setSwiper] = useState<SwiperType | null>(null);
    const [activeCard, setActiveCard] = useState(items[0]);

    useEffect(() => {
        if (swiper) {
            swiper.on("slideChange", () => {
                const activeIndex = swiper.realIndex;
                setActiveCard(items[activeIndex]);
            });
        }
    }, [swiper, items]);

    return (
        <div className="relative h-full w-full flex flex-col">
            {/* Top Swiper */}
            <Swiper
                autoplay={{
                    delay: 8000,
                }}
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={slidesPerView || 1}
                className={`w-full relative ${className || "h-56"}`}
                onSwiper={setSwiper}
            >
                {items.map(({ card }, i) => (
                    <SwiperSlide key={i}>{card}</SwiperSlide>
                ))}
            </Swiper>

            {/* Small Cards Section */}
            <div className="flex items-center gap-5 mt-9">
                {paginationImages &&
                    items.map(({ src }, i) => (
                        <div
                            key={i}
                            onClick={() => {
                                swiper?.slideTo(i);
                                swiper?.autoplay.stop();
                            }}
                            className={`${
                                swiper?.realIndex === i
                                    ? "shadow-lg -translate-y-5 border-rose-500 border opacity-100"
                                    : "opacity-50"
                            } cursor-pointer hover:scale-105 hover:shadow-xl z-10 hover:opacity-75 transition-transform duration-300 ease-out rounded-3xl overflow-hidden w-1/3 h-64 relative`}
                        >
                            {src ? (
                                <Image
                                    alt="Image-pagination"
                                    src={src}
                                    fill
                                    className="object-cover rounded-md"
                                />
                            ) : (
                                <div className="bg-gray-200 fill flex items-center justify-center rounded-md"></div>
                            )}
                        </div>
                    ))}
            </div>

            {/* Right Sidebar */}
            <CardInfo activeCard={activeCard} />
        </div>
    );
};

export default SwiperCards;
