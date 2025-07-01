import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
    return (
        <div className="py-20">
            <h1 className="heading">
                My <span className="text-purple-400">work experience</span>
            </h1>

            <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
                {workExperience.map((card) => (
                    <Button
                        key={card.id}
                        duration={Math.floor(Math.random() * 10000) + 10000}
                        borderRadius="1.75rem"
                        style={{
                            background: "rgb(4,7,29)",
                        backgroundColor: "#050517",
                        borderRadius: `calc(1.75rem* 0.96)`,
                        }}
                        className="flex-1 text-black dark:text-white border-neutral-200
                        dark:border-slate-800"
                    >
                        <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                            <img
                                src={card.thumbnail}
                                alt={card.thumbnail}
                                className="lg:w-32 md:w-20 w-16"
                            />
                            <div className="lg:ms-5">
                               <h1 className="text-start text-white text-xl md:text-2xl font-bold break-words">
                                   {card.title
                                       .split(' ')
                                       .reduce((acc, word, idx, arr) => {
                                           const half = Math.ceil(arr.length / 2);
                                           if (idx === half) acc.push('\n');
                                           acc.push(word);
                                           return acc;
                                       }, [] as (string | '\n')[])
                                       .map((part, i) =>
                                           part === '\n' ? <br key={i} /> : part + ' '
                                       )}
                               </h1>
                                <p className="text-start text-white mt-3 font-semibold">
                                    {card.des}
                                </p>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default Experience;