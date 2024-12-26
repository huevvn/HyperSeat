"use client";

import React, { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";

const ProfilePage = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        username: "",
        memberSince: "",
        instagram: "",
        snapchat: "",
        x: "",
    });

    useEffect(() => {
        // Fetch user profile data from the API
        const fetchProfile = async () => {
            try {
                const response = await fetch("/api/profile");
                if (!response.ok) {
                    throw new Error("Failed to fetch profile data");
                }
                const data = await response.json();
                setProfile(data);
            } catch (error) {
                console.error("Error fetching profile data:", error);
            }
        };

        fetchProfile();
    }, []);

    const handleEditClick = () => setIsEditing(!isEditing);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    const handleSaveClick = async () => {
        setIsEditing(false);
        // Save the updated profile information to the database
        try {
            const response = await fetch("/api/profile", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(profile),
            });

            if (!response.ok) {
                throw new Error("Failed to save profile data");
            }
        } catch (error) {
            console.error("Error saving profile data:", error);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleSaveClick(); // Save the profile on pressing Enter
        }
    };

    return (
        <div className="prof w-screen h-screen profile-container p-8">
            <h1 className="text-7xl text-white font-bold mb-4">PROFILE</h1>
            <div className="profile-details p-6 bg-gray-50 shadow-md rounded-3xl">
                <div className="profile-header flex flex-col items-center mb-6">
                    <img
                        src="./pfp/anitamaxwin.jpg"
                        alt="Profile Picture"
                        className="w-36 h-36 rounded-full"
                    />
                    <div className="text-center">
                        {" "}
                        <br />
                        {isEditing ? (
                            <input
                                type="text"
                                name="username"
                                value={profile.username}
                                onChange={handleChange}
                                onKeyDown={handleKeyDown}
                                className="text-3xl font-semibold text-gray-900 bg-transparent border-b-2 border-gray-600 p-2 focus:outline-none focus:border-yellow-500"
                                placeholder="Enter a unique username..."
                            />
                        ) : (
                            <h2 className="text-5xl font-bold mb-6">
                                {profile.username}
                            </h2>
                        )}
                    </div>
                    <button
                        onClick={handleEditClick}
                        className="mt-4 bg-yellow-200 hover:bg-black text-black hover:text-yellow-200 rounded-full p-3 transition-all duration-500 ease-in-out"
                    >
                        <FaEdit className="text-2xl" />
                    </button>
                </div>

                <div className="profile-info grid grid-cols-2 gap-6 mb-6">
                    {/* Left Side: Editable Fields */}
                    <div>
                        <div className="mb-4">
                            <strong className="text-3xl">Full Name:</strong>
                            <br />
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="fullName"
                                    value={profile.fullName}
                                    onChange={handleChange}
                                    onKeyDown={handleKeyDown}
                                    className="text-xl border-b-2 p-1 bg-transparent focus:outline-none focus:border-yellow-500"
                                    placeholder="Enter your full name..."
                                />
                            ) : (
                                <p className="text-xl">{profile.fullName}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <strong className="text-3xl">Phone:</strong>
                            <br />
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="phone"
                                    value={profile.phone}
                                    onChange={handleChange}
                                    onKeyDown={handleKeyDown}
                                    className="text-xl border-b-2 p-1 bg-transparent focus:outline-none focus:border-yellow-500"
                                    placeholder="Enter your phone number..."
                                />
                            ) : (
                                <p className="text-xl">{profile.phone}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <strong className="text-3xl">Instagram:</strong>
                            <br />
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="instagram"
                                    value={profile.instagram}
                                    onChange={handleChange}
                                    onKeyDown={handleKeyDown}
                                    className="text-xl border-b-2 p-1 bg-transparent focus:outline-none focus:border-yellow-500"
                                    placeholder="Instagram handle..."
                                />
                            ) : (
                                <p className="text-xl">{profile.instagram}</p>
                            )}
                        </div>
                    </div>

                    {/* Right Side: Editable Fields */}
                    <div>
                        <div className="mb-4">
                            <strong className="text-3xl">Address:</strong>
                            <br />
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="address"
                                    value={profile.address}
                                    onChange={handleChange}
                                    onKeyDown={handleKeyDown}
                                    className="text-xl border-b-2 p-1 bg-transparent focus:outline-none focus:border-yellow-500"
                                    placeholder="Enter your address..."
                                />
                            ) : (
                                <p className="text-xl">{profile.address}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <strong className="text-3xl">Snapchat:</strong>
                            <br />
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="snapchat"
                                    value={profile.snapchat}
                                    onChange={handleChange}
                                    onKeyDown={handleKeyDown}
                                    className="text-xl border-b-2 p-1 bg-transparent focus:outline-none focus:border-yellow-500"
                                    placeholder="Snapchat username..."
                                />
                            ) : (
                                <p className="text-xl">{profile.snapchat}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <strong className="text-3xl">X (Twitter):</strong>{" "}
                            <br />
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="x"
                                    value={profile.x}
                                    onChange={handleChange}
                                    onKeyDown={handleKeyDown}
                                    className="text-xl border-b-2 p-1 bg-transparent focus:outline-none focus:border-yellow-500"
                                    placeholder="Twitter/X handle..."
                                />
                            ) : (
                                <p className="text-xl">{profile.x}</p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <strong className="text-3xl">Member Since:</strong>
                    <p className="text-xl">{profile.memberSince}</p>
                </div>

                {isEditing && (
                    <button
                        onClick={handleSaveClick}
                        className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out"
                    >
                        Save Changes
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProfilePage;
