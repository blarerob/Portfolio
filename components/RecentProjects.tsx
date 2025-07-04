import React from 'react';
import { projects } from "@/data";
import Image from "next/image";
import { PinContainer } from "@/components/ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {

        return (
          <div className="py-20" id='projects'>
            <h2 className="heading">
              <span className="text-purple-400">Clients</span> and recent projects
            </h2>
            <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
                {projects.map(({ id, title, subTitle, des, img, iconLists, link } ) => (
                <div
                  className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
                  key={id}
                  onClick={() => {
                    if (id === 1) {
                      window.open("https://zenstays.netlify.app/", "_blank");
                    } else if (id === 3) {
                      window.open("https://whodoesyourhairky.netlify.app/", "_blank");
                    }
                  }}
                >
                    <PinContainer title={link} href={'/'}>
                        <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                            <div
                                className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                                style={{ backgroundColor: "#13162D" }}
                            >
                                {img?.endsWith('.mp4') ? (
                                    <video
                                        src={img}
                                        className="h-full w-full object-cover rounded-md"
                                        autoPlay
                                        loop
                                        muted
                                    />
                                ) : (
                                    <img
                                        src={img}
                                        alt="cover"
                                        className="z-10 absolute bottom-0"
                                    />
                                )}
                            </div>
                        </div>
                    <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-5">
                        {title} <span className="text-gray-400 font-light text-xs">{subTitle}</span>
                    </h1>

                        <p
                            className="lg:text-lg lg:font-normal font-light text-sm line-clamp-5"
                            style={{
                                color: "#BEC1DD",
                                margin: "1vh 0",
                            }}
                        >
                            {des}
                        </p>

                        <div className="flex items-center justify-between mt-7 mb-3">
                            <div className="flex items-center">
                                {iconLists.map((icon, index) => (
                                    <div
                                        key={icon}
                                        className="border border-white/[0.2] rounded-full bg-black lg:w-10
                                        lg:h-10 w-8 h-8 flex justify-center items-center"
                                        style={{
                                            transform: `translateX(-${5 * index + 2}px)`,
                                        }}
                                    >
                                        <img src={icon} alt="icon5" className="p-2" />
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-center items-center">
                                <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                                    Check Live Site
                                </p>
                                <FaLocationArrow className="ms-3" color="#CBACF9" />
                            </div>
                        </div>
                    </PinContainer>

                </div>
              ))}
            </div>
          </div>
        );
};

export default RecentProjects;