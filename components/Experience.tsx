import React from 'react';
import {Button} from "@/components/ui/MovingBorders";
import {workExperience} from "@/data";
import Image from "next/image";

const Experience = () => {
  return (
    <div className='py-20' id="experience">
      <h1 className='heading'>
          My
          <span className='text-purple-400'> Work Experience</span>
      </h1>
        <div
          className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
            {workExperience.map((card) => (
                <div key={card.id} className='bg-gray-800 p-6 rounded-lg shadow-lg'>
                   <Button
                       key={card.id}
                       duration={Math.floor(Math.random() * 1000 + 1000)}
                       borderRadius='1.75rem'
                       className='flex-1 text-white border-neutral-200 dark:border-slate-800 p-6'
                   >
                       <div className='flex flex-col items-center justify-center lg:items-start'>
                           <Image
                               src={card.thumbnail}
                               alt={card.thumbnail}
                               className='lg:w-32 md:w-20 w-16 mb-4'
                               width={100}
                               height={100}
                           />
                           <div className='text-center lg:text-start'>
                               <h1 className='text-xl md:text-2xl font-bold'>
                                   {card.title}
                               </h1>
                               <p className='mt-3 font-semibold'>
                                   {card.des}
                               </p>
                           </div>
                       </div>
                   </Button>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Experience;