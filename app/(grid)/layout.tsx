import React from "react";
import GridContainer from "../components/defaults/GridContainer";
import SideBar from "../components/nav/SideBar";
import NavBar from "../components/nav/NavBar";
import MaxWidthWrapper from "../components/defaults/MaxWidthWrapper";
import AuthButtons from "../components/nav/TopButtons";

export default function GridLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="background grid min-h-screen h-full">
            <GridContainer cols={12}>
                <SideBar />
                <MaxWidthWrapper className="col-span-full lg:col-span-10">
                    <NavBar /> <AuthButtons />
                    {children}
                </MaxWidthWrapper>
            </GridContainer>
        </main>
    );
}
