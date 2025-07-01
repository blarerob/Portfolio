import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
            {/* background grid */}
            <div className="w-full absolute left-0 bottom-0 min-h-96 overflow-hidden">
                <Image
                    src="/footer-grid.svg"
                    width={100}
                    height={100}
                    alt="grid"
                    className="w-full h-auto opacity-50"
                />
            </div>

            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    Ready to take <span className="text-purple-500">your</span> digital
                    presence to the next level?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Reach out to me today and let&apos;s discuss how I can help you
                    achieve your goals.
                </p>
                <a href="mailto:blarerobinson@yahoo.com">
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">
                    Copyright © 2025 Blare Robinson
                </p>

                <div className="flex items-center mt-2 md:gap-3 gap-6">
                    {socialMedia.map((info) => (
                        <div
                            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                            key={info.id}
                            onClick={() => {
                                if (info.id === 1) {
                                    window.open("https://github.com/blarerob", "_blank");
                                } else if (info.id === 2) {
                                    window.open("https://linkedin.com/in/ber", "_blank");
                                }
                            }}
                            >
                            <Image src={info.img} alt="icons" width={20} height={20} />
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;