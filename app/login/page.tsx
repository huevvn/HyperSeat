"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaGoogle } from "react-icons/fa";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const formData = new FormData(e.target as HTMLFormElement);
        const data = {
            email: formData.get("email") as string,
            password: formData.get("password") as string,
        };

        console.log("Data being sent:", data);

        try {
            const res = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await res.json();
            console.log("Login response:", result);

            if (!res.ok) {
                // Show a more user-friendly error message
                const errorMessage =
                    result.code === "EMAIL_NOT_FOUND"
                        ? "No account found with this email"
                        : result.code === "INVALID_PASSWORD"
                        ? "Incorrect password"
                        : "This email isn't registered before";

                throw new Error(errorMessage);
            }

            console.log("Login successful!");
            router.push("/loading"); // Navigate to the loading page
        } catch (error: any) {
            console.error("Login error:", error);
            setError(error.message || "An error occurred while logging in.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="landingBG flex h-screen w-full items-center justify-center px-5">
            <Card className="bg-white w-full max-w-lg">
                <CardHeader>
                    <CardTitle className="text-black text-4xl font-black py-5">
                        Log-in
                    </CardTitle>
                    <CardDescription className="text-[#000000] font-medium text-xl">
                        Welcome Back!
                    </CardDescription>
                    <p>Enter your e-mail & password to login to your account</p>
                </CardHeader>
                <CardContent>
                    <form
                        onSubmit={handleLogin}
                        className="flex flex-col gap-y-2"
                    >
                        <div>
                            <Label className="text-black text-2xl font-semibold">
                                Email
                            </Label>
                            <Input
                                name="email"
                                type="email"
                                required
                                className="bg-[#ffffff] rounded-xl my-2 py-5"
                                placeholder="Email"
                            />
                        </div>
                        <div>
                            <Label className="text-black text-2xl font-semibold">
                                Password
                            </Label>
                            <Input
                                name="password"
                                type="password"
                                required
                                className="bg-[#ffffff] rounded-xl my-2"
                                placeholder="Password"
                            />
                        </div>
                        {error && (
                            <p className="text-red-500 text-sm">{error}</p>
                        )}
                        <div className="flex">
                            <Button
                                className="bg-[#010722] text-yellow-200 w-full rounded-full mt-1 mb-3 mr-3 py-5 hover:bg-black hover:text-white"
                                disabled={loading}
                            >
                                {loading ? "Logging in..." : "Submit"}
                            </Button>
                            <Button
                                type="button"
                                className="bg-yellow-300 text-black rounded-full mt-1 mb-3 ml-r py-5 hover:bg-black hover:text-white"
                            >
                                Log-in with Google <FaGoogle />
                            </Button>
                        </div>
                        <p className="underline font-medium  text-yellow-700">
                            Forgot your password?
                        </p>
                        <p className="flex">
                            Not a member yet?{" "}
                            <span className="underline text-blue-700 ml-1">
                                <a href="./signup">Create Account!</a>
                            </span>
                        </p>
                    </form>
                </CardContent>
            </Card>
        </section>
    );
};

export default Page;
