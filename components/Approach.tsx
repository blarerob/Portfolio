"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";

const Approach = () => {
    return (
        <section className="w-fill py-20">
            <h1 className='heading'> My <span className='text-purple-500'>Approach</span> </h1>
            <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4 ">
                <Card title="Planning & Strategy"
                      icon={<AceternityIcon order='Phase 1'/>}
                      description="We will collaborate to understand your website's goals, target audience, and key functionalities. We'll outlines the website's structure, content, and design elements."
                >
                    <CanvasRevealEffect
                        animationSpeed={5.1}
                        containerClassName="bg-emerald-900"
                    />
                </Card>
                <Card
                    title="Development & Progress Update"
                    icon={<AceternityIcon order='Phase 2' />}
                    description="Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way."
                >
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-black"
                        colors={[
                            [236, 72, 153],
                            [232, 121, 249],
                        ]}
                        dotSize={2}
                    />
               </Card>
                <Card
                    title="Development & Launch"
                    icon={<AceternityIcon order='Phase 3' />}
                    description='"This is where the magic happens! Based on the approved design,
                            I translate everything into functional code, building your website
                            from the ground up."'
                        >
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-sky-600"
                        colors={[[125, 211, 252]]}
                    />
                </Card>
            </div>
        </section>
    );
}

export default Approach;

const Card = ({
      title,
      icon,
      description,
      children,
              }: {
    title: string;
    icon: React.ReactNode;
    description?: string;
    children?: React.ReactNode;
}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border border-white/[0.2] group/canvas-card flex items-center justify-center
            max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl"
        >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full w-full absolute inset-0"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-20">
                <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
                    {icon}
                </div>
                <h2 className="dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-3xl">
                    {title}
                </h2>
                <h2 className="dark:text-white text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black
                    mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2
                    transition duration-200 text-center" style={{ color: '#e4ecff' }}>
                    {description}
                </h2>
            </div>
        </div>
    );
};

const AceternityIcon = ({ order }: { order: string }) => {
    return (
        <div>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-white backdrop-blur-3xl text-2xl font-bold">
                {order}
                </span>
            </button>
        </div>
    );
};

export const Icon = ({ className, ...rest }: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};
