"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Waitlist from "@/components/nextbunny/waitlist";
const TRUSTED_TECH = ["Next.js", "Tailwind CSS", "Framer", "React"];
export default function Hero() {
  return <motion.section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-[2rem] md:pt-[5rem]" initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} transition={{
    duration: 1
  }}>
      <div className="text-center max-w-7xl mx-auto space-y-8 mt-[5rem]">
        <motion.div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter space-y-2" initial={{
        y: 20,
        opacity: 0
      }} animate={{
        y: 0,
        opacity: 1
      }} transition={{
        delay: 0.2,
        duration: 0.8
      }}>
          <h1 className="block">Free Next.js drag and drop builder</h1>
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary block">
            launch 10x faster
          </div>
        </motion.div>

        <motion.p className="text-muted-foreground text-lg md:text-xl max-w-4xl mx-auto" initial={{
        y: 20,
        opacity: 0
      }} animate={{
        y: 0,
        opacity: 1
      }} transition={{
        delay: 0.4,
        duration: 0.8
      }}>
          Design landing pages effortlessly with our no-code builder, featuring
          ready-to-use react components built with Tailwind CSS, Shadcn UI, and
          Framer Motion.
        </motion.p>

        <motion.div className="flex items-center justify-center gap-4" initial={{
        y: 20,
        opacity: 0
      }} animate={{
        y: 0,
        opacity: 1
      }} transition={{
        delay: 0.6,
        duration: 0.8
      }}>
          <Waitlist />
        </motion.div>
      </div>

      <motion.div className="mt-8 w-full max-w-6xl mx-auto relative" initial={{
      y: 100,
      opacity: 0
    }} animate={{
      y: 0,
      opacity: 1
    }} transition={{
      delay: 0.8,
      duration: 1
    }}>
        <div className="relative w-full rounded-lg overflow-hidden">
          <Image src="/images/nextbunny-hero-image.png" alt="NextBunny - Free Next.js Visual Page Builder Interface showing drag and drop functionality" width={1920} height={1080} className="object-cover rounded-lg shadow-2xl" priority />
        </div>

        <div className="absolute -inset-x-20 -bottom-20 bg-gradient-to-t from-primary/20 to-transparent blur-3xl h-40" />
      </motion.div>

      <motion.div className="mt-20 w-full max-w-4xl mx-auto" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1,
      duration: 0.8
    }}>
        <h2 className="text-center text-muted-foreground text-sm mb-8 uppercase">
          Built with Technologies You Trust
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {TRUSTED_TECH.map((tech, index) => <motion.div key={tech} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 1.2 + index * 0.1
        }} className="relative group">
              <motion.div className="relative px-4 py-2 rounded-lg overflow-hidden" whileHover={{
            scale: 1.05
          }} transition={{
            type: "spring",
            stiffness: 400,
            damping: 17
          }}>
                <motion.div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100" initial={{
              rotate: -25,
              scale: 0
            }} whileHover={{
              rotate: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17
              }
            }} />
                <motion.span className="relative text-xl font-bold text-foreground block" whileHover={{
              y: -2,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17
              }
            }}>
                  {tech}
                </motion.span>
                <motion.div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-primary to-secondary" initial={{
              scaleX: 0
            }} whileHover={{
              scaleX: 1,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17
              }
            }} style={{
              originX: 0
            }} />
              </motion.div>
              <motion.div className="absolute -inset-[1px] bg-gradient-to-r from-primary to-secondary rounded-lg opacity-0 group-hover:opacity-20 blur-lg" initial={{
            scale: 0.8
          }} whileHover={{
            scale: 1.1,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 17
            }
          }} />
            </motion.div>)}
        </div>
      </motion.div>
    </motion.section>;
}