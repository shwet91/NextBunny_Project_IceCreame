import React from 'react'
import Image from 'next/image'

function ProductsBody() {


  return (
    <div className='w-screen sm:h-[500vh] p-6 mt-10 sm:p-24 flex flex-col items-center justify-evenly'>
         <div className='sm:w-3/4  w-[100vw] sm:m-9 h-[100vh]  rounded-sm sm:h-1/2 flex flex-col sm:flex-row justify-center items-center'>
            <div className=' w-3/4 sm:w-2/5 h-4/5 sm:h-full relative rounded-lg overflow-hidden'>
                <Image src={"https://i.pinimg.com/736x/5d/c7/ff/5dc7ff1ab82574fdf6d627dc463a9cae.jpg"} alt='this is image' fill ></Image>
            </div>
            <div className=' w-full  h-full flex justify-center items-center flex-col'>
                   <h1 className='text-center text-6xl font-sans m-12'>Almond Avalanche</h1>
                   <p className='text-center text-xl font-sans  sm:text-xl text-muted-foreground'>Roasted almond bits folded into rich almond-flavored cream. <br />
                      Nutty, buttery, and deeply satisfying. <br />
                      Crunch meets cream in a snowy swirl.</p>
            </div>
         </div>

         <div className='sm:w-3/4  w-[100vw] sm:m-9 h-[100vh]  rounded-sm sm:h-1/2 flex flex-col sm:flex-row justify-center items-center'>
            <div className='w-3/4 sm:w-2/5 h-4/5 sm:h-full  relative rounded-lg overflow-hidden'>
                <Image src={"https://i.pinimg.com/736x/a4/3b/d8/a43bd8140c7bda2c489a64824805ff5b.jpg"} alt='this is image' fill ></Image>
            </div>
            <div className=' w-full  h-full flex justify-center items-center flex-col'>
                   <h1 className='text-center text-6xl font-sans m-12'>ChocoComet</h1>
                   <p className='text-center text-xl font-sans  sm:text-xl text-muted-foreground'>A rich chocolate blast swirled with fudge meteor chunks. <br />
                   Dark, intense, and smooth as space. <br />
                   Perfect for true chocoholics craving cosmic flavor.</p>
            </div>
         </div>

         <div className='sm:w-3/4  w-[100vw] sm:m-9 h-[100vh]  rounded-sm sm:h-1/2 flex flex-col sm:flex-row justify-center items-center'>
            <div className='w-3/4 sm:w-2/5 h-4/5 sm:h-full relative rounded-lg overflow-hidden'>
                <Image src={"https://i.pinimg.com/736x/a5/7d/eb/a57deb96de2715d0125787e06bce0276.jpg"} alt='this is image' fill ></Image>
            </div>
            <div className=' w-full  h-full flex justify-center items-center flex-col'>
                   <h1 className='text-center text-6xl font-sans m-12'>Salted Caramel Eclipse</h1>
                   <p className='text-center text-xl font-sans  sm:text-xl text-muted-foreground'>Velvety caramel ice cream touched with sea salt and caramel ribbons. <br />
                   Sweet meets savory in a bold eclipse of taste. <br />
                   Crave-worthy and indulgent.</p>
            </div>
         </div>

         <div className='sm:w-3/4  w-[100vw] sm:m-9 h-[100vh]  rounded-sm sm:h-1/2 flex flex-col sm:flex-row justify-center items-center'>
            <div className=' w-3/4 sm:w-2/5 h-4/5 sm:h-full relative rounded-lg overflow-hidden'>
                <Image src={"https://i.pinimg.com/736x/1c/fc/3e/1cfc3e39dec65041d05b8d66ec22ae6f.jpg"} alt='this is image' fill ></Image>
            </div>
            <div className=' w-full  h-full flex justify-center items-center flex-col'>
                   <h1 className='text-center text-6xl font-sans m-12'>Berry Drift</h1>
                   <p className='text-center text-xl font-sans  sm:text-xl text-muted-foreground'>A creamy vanilla base with waves of blueberry and raspberry ripple. <br />
                   Tangy, sweet, and refreshing like a morning breeze. <br />
                   Your fruity escape in every bite.</p>
            </div>
         </div>

         <div className='sm:w-3/4  w-[100vw] sm:m-9 h-[100vh]  rounded-sm sm:h-1/2 flex flex-col sm:flex-row justify-center items-center'>
            <div className='w-3/4 sm:w-2/5 h-4/5 sm:h-fullfull relative rounded-lg overflow-hidden'>
                <Image src={"https://i.pinimg.com/736x/7c/48/da/7c48daabac639e79f3c65ffc12e99514.jpg"} alt='this is image' fill ></Image>
            </div>
            <div className=' w-full  h-full flex justify-center items-center flex-col'>
                   <h1 className='text-center text-6xl font-sans m-12'>Mango Mirage</h1>
                   <p className='text-center text-xl font-sans  sm:text-xl text-muted-foreground'>Smooth tropical mango blended with a hint of coconut cream. <br />
                   Light, juicy, and sun-kissed. <br />
                   Like summer frozen in a scoop.</p>
            </div>
         </div>

         <div className='sm:w-3/4  w-[100vw] sm:m-9 h-[100vh]  rounded-sm sm:h-1/2 flex flex-col sm:flex-row justify-center items-center'>
            <div className=' w-3/4 sm:w-2/5 h-4/5 sm:h-full relative rounded-lg overflow-hidden'>
                <Image src={"https://i.pinimg.com/736x/3a/fe/6d/3afe6d079889a2b0832b112e57e75bbe.jpg"} alt='this is image' fill ></Image>
            </div>
            <div className=' w-full  h-full flex justify-center items-center flex-col'>
                   <h1 className='text-center text-6xl font-sans m-12'>MintCraze</h1>
                   <p className='text-center text-xl font-sans  sm:text-xl text-muted-foreground'>Crushed chocolate cookies in cool mint ice cream. <br />
                   Crisp, clean, and deliciously crunchy. <br />
                   A fresh hit with every spoonful.</p>
            </div>
         </div>

         <div className='sm:w-3/4  w-[100vw] sm:m-9 h-[100vh]  rounded-sm sm:h-1/2 flex flex-col sm:flex-row justify-center items-center'>
            <div className=' w-3/4 sm:w-2/5 h-4/5 sm:h-full relative rounded-lg overflow-hidden'>
                <Image src={"https://i.pinimg.com/736x/37/ce/72/37ce72332d8531afac41cd51a2689144.jpg"} alt='this is image' fill ></Image>
            </div>
            <div className=' w-full  h-full flex justify-center items-center flex-col'>
                   <h1 className='text-center text-6xl font-sans m-12'>Caffeine Rush</h1>
                   <p className='text-center text-xl font-sans  sm:text-xl text-muted-foreground'>Coffee-flavored ice cream with chocolate espresso beans. <br />
                   Bold, creamy, and addictively energizing. <br />
                   Like your favorite cold brew—frozen.</p>
            </div>
         </div>

         <div className='sm:w-3/4  w-[100vw] sm:m-9 h-[100vh]  rounded-sm sm:h-1/2 flex flex-col sm:flex-row justify-center items-center'>
            <div className=' w-3/4 sm:w-2/5 h-4/5 sm:h-full relative rounded-lg overflow-hidden'>
                <Image src={"https://i.pinimg.com/736x/9d/d7/ab/9dd7ab7ec45a7b1b44796b3e26016da4.jpg"} alt='this is image' fill ></Image>
            </div>
            <div className=' w-full  h-full flex justify-center items-center flex-col'>
                   <h1 className='text-center text-6xl font-sans m-12'>Strawberry Fog</h1>
                   <p className='text-center text-xl font-sans  sm:text-xl text-muted-foreground'>Fluffy strawberry mousse-style ice cream with real fruit chunks.<br />
                   Soft, dreamy, and slightly tart. <br />
                   A pink cloud of berry goodness.</p>
            </div>
         </div>
    </div>
  )
}

export default ProductsBody