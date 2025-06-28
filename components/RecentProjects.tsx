import React from 'react';
import { projects } from "@/data";
import Image from "next/image";

const RecentProjects = () => {
const getBorderColor = (id: number) => {
  switch (id) {
    case 1:
      return "border-purple-400";
    case 2:
      return "border-blue-400";
    case 3:
      return "border-green-400";
    case 4:
      return "border-red-400";
    case 5:
      return "border-yellow-400";
    default:
      return "border-gray-300";
  }
};

return (
  <div className="py-20">
    <h2 className="heading">
      <span className="text-purple-400">Clients</span> and recent projects
    </h2>
    <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
        <div
          key={item.id}
          className={`p-4 h-[50vh] w-[50vw] rounded-lg shadow-lg border-4 ${getBorderColor(item.id)} transition-transform transform hover:scale-105`}
          onClick={() => {
            if (item.id === 1) {
              window.open("https://zenstays.netlify.app/", "_blank");
            }
          }}
        >
          {item.img?.endsWith('.mp4') ? (
            <video
              src={item.img}
              className="h-full w-full object-cover rounded-md"
              autoPlay
              loop
              muted
            />
          ) : (
            <Image
              src={'/bg.png'}
              alt={item.title}
              className="h-full w-full object-cover rounded-md"
              width={500}
              height={300}
            />
          )}
        </div>
      ))}
    </div>
  </div>
);
};

export default RecentProjects;