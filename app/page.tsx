'use client';

import {FloatingNav} from "@/components/ui/FloatingNavBar";
import Hero from "@/components/Hero";
import {navItems} from "@/data";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

import "./globals.css";


export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
            <Hero />
          <Grid />
          <RecentProjects />
          <Experience />
          <Approach />
          <Footer />
      </div>
    </main>
  );
}
