import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { cn } from "@/utils/cn";

const Hero = () => {
    return (
        <div className="pb-20 pt-36">
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen fill-white"
                    fill="white"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full fill-purple-600"
                    fill="purple"
                />
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw] fill-blue-700" fill="blue" />
            </div>
            {/* Grid */}
            <div className="flex h-screen w-full items-center justify-center bg-black dark:bg-black absolute top-0 left-0 opacity-10">
                <div
                    className={cn(
                        "absolute inset-0",
                        "[background-size:40px_40px]",
                        "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px)," +
                        "linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                        "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px)," +
                        "linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                    )}
                />
                {/* Radial gradient for the container to give a faded look */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center
                 bg-black [mask-image:radial-gradient(ellipse_at_right,transparent_1%,black)] dark:bg-black" />
            </div>

            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                        Web Innovation with Next.js
                    </p>
                    <TextGenerateEffect
                       words="Building Scalable Solutions and Exceptional User Experiences"
                        className="text-center text-[40px] md:text-5xl lg:text-6xl"
                    />

                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                        Welcome! I&#39;m Blare, a Fullstack Developer crafting user experiences from the heart of Kentucky.
                    </p>

                    <a href="#about">
                        <MagicButton
                            title="Show my work"
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
