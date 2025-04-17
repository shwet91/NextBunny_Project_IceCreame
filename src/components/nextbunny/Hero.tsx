"use client";

import { motion } from "framer-motion";
import { CarouselSize } from "./Carousel";
const TRUSTED_TECH = ["Best Sellers"];
export default function Hero() {
  return <motion.section className=" relative min-h-screen flex flex-col items-center justify-center p1x-4 sm:pax-6 lg:p1x-8 pt-[2rem] md:pt-[5rem]" initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} transition={{
    duration: 1
  }}>

    {/* <h1 className="absolute top-0" >Hello</h1> */}
      <div className="text-center   ma1x-w-7xl mx-auto space-y-8 mt-0 relative ">
        <motion.div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter space-y-2 " initial={{
        y: 20,
        opacity: 0
      }} animate={{
        y: 0,
        opacity: 1
      }} transition={{
        delay: 0.2,
        duration: 0.8
      }}>
        <div className="  relative w-full rounded-lg  overflow-hidden bottom-8 sm:bottom-20 flex items-center justify-center ">

          <video  className="w-full h-1/3"   autoPlay muted loop>
          <source src="https://videos.pexels.com/video-files/4725766/4725766-hd_1920_1080_25fps.mp4" type="video/webm"/>
          Your browser does not support the video tag.
          </video>
          <div className=" absolute top-1/3 sm:top-1/2  m-auto" > 
          <h1 className="block text-derby-900 "  >Summer Just Got Sweeter! </h1>
           <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary block " >
           Blossum iceCream
           </div>

           </div>
     
          </div>

          {/* <div className="  m-auto" >

              
          <h1 className="block">Free Next.js drag and drop builder</h1>
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary block">
            launch 10x faster
          </div>

          </div> */}
        </motion.div>

        <motion.p className="  text-center text-muted-foreground sm:text-lg md:text-xl max-w-4xl mx-auto p-6 mr-6" initial={{
        y: 20,
        opacity: 0
      }} animate={{
        y: 0,
        opacity: 1
      }} transition={{
        delay: 0.4,
        duration: 0.8
      }}>
        Churned to perfection, bursting with joy one scoop is never enough
         
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
          {/* <Waitlist /> */}
        </motion.div>
      </div>

      <motion.div className="mt-8 w-full max-w-6xl mx-auto relative   bg-gray-200 flex" initial={{
      y: 100,
      opacity: 0
    }} animate={{
      y: 0,
      opacity: 1
    }} transition={{
      delay: 0.8,
      duration: 1
    }}>
        <div className="relative sm:w-3/5 w-full rounded-tl-lg rounded-bl-lg  overflow-hidden ">
          {/* <Image src="/images/nextbunny-hero-image.png" alt="NextBunny - Free Next.js Visual Page Builder Interface showing drag and drop functionality" width={1920} height={1080} className="object-cover rounded-lg shadow-2xl" priority /> */}

          <video  className=""   autoPlay muted loop>
          {/* <source src="../../../public/images/vid1.mp4" type="video/mp4"/> */}
          <source src="/images/1.mp4" type="video/webm"/>
          Your browser does not support the video tag.
          </video>


        </div>

        <div className="sm:w-full w-3/4 flex justify-center items-center flex-col p-4 " >
          <h1 className="text-sm sm:text-6xl m-8 text-gray-800" >Scoop into Happiness</h1>
          <p className="text-sm sm:text-xl text-muted-foreground p-3">Every scoop tells a story—crafted with the finest ingredients and a whole lot of love.
              From nostalgic classics to bold new creations, there s a flavor for every craving.
              </p>
        </div>

        <div className="absolute -inset-x-20 -bottom-20 bg-gradient-to-t from-primary/20 to-transparent blur-3xl h-40" />
      </motion.div>

      <motion.div className="mt-20 w-full 1max-w-xl mx-auto" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1,
      duration: 0.8
    }}>
        <h2 className="text-center text-muted-foreground text-sm mb-8 uppercase">
          Built with Your Trust
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
                <motion.span className="relative text-4xl font-bold text-foreground block" whileHover={{
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

            <CarouselSize></CarouselSize>
            <div className=" w-[80vw] flex flex-col justify-center items-center p-6 gap-8  h-64">
              <h1 className="sm:text-6xl text-xl m-7" >Globally Sourced, Locally Loved!</h1>
              <p className="text-sm sm:text-xl text-muted-foreground text-center" >No matter the season, having gelato does not need a reason. Whether it
                is a hot summer day or a sunny winter afternoon, our range of products will add
                 sweetness to your life!. What is better? The sweetness we bring is not sinful. Apart 
                 from fresh ingredients, exotic flavours and zero preservatives, we also have vegan and sugar-free options.</p>
             </div>

        </div>

        
      </motion.div>
    </motion.section>;
}