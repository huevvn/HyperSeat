import Image from "next/image";

const Page = () => {
    return (
        <div className="flex text-gray-300">
            <section className="mt-5">
                <h1 className="trend text-gray-200 font-black text-7xl">
                    About Us
                </h1>
                <p className="font-bold text-3xl mt-5">
                    Welcome to HyperSeat! We're a team of software engineers
                    focused on creating innovative solutions that simplify
                    complex tasks and improve user experiences.
                </p>

                <h2 className="trend text-gray-200 font-black text-6xl mt-7">
                    Our Mission
                </h2>
                <p className="font-bold text-3xl mt-5 mb-5">
                    Our mission is to provide a seamless music streaming
                    experience while helping users discover local concerts and
                    events. We aim to bring the music you love closer to you.
                </p>

                <h3 className="trend text-gray-200 font-black text-6xl mt-5">
                    The Team
                </h3>
                <ul className="text-2xl mt-5">
                    <li className="font-medium">
                        <span className="font-bold">- Ezzeldin Salah:</span>{" "}
                        UI/UX / Cloud Operations.
                    </li>

                    <li className="mt-5 font-medium">
                        <span className="font-bold">- Omar Elnazly:</span>{" "}
                        Database Design / APIs Integration.
                    </li>

                    <li className="mt-5 font-medium">
                        <span className="font-bold">- Abdallah Elrouby:</span>{" "}
                        Front-End / Responsiveness.
                    </li>

                    <li className="mt-5 font-medium">
                        <span className="font-bold">- Ziad Gaber: </span>
                        Support & Documentation / Project Reviewer.
                    </li>
                </ul>
            </section>
            <Image
                className="ml-100"
                src="/about/about.svg"
                alt="illustration"
                width={400}
                height={400}
            />
        </div>
    );
};

export default Page;
