import React from 'react'
import Image from 'next/image'

function Stores() {
  return (
      <div>
          
          <div className='  sm:100vw w-[100vw] sm:h-[100vh] h-[200vh] flex justify-evenly items-center sm:flex-row flex-col '>
                
                <div className=' relative w-4/5 h-2/6 sm:w-1/5 sm:h-3/5 rounded-lg overflow-hidden mt-20'>
                               <Image src={"https://i.pinimg.com/736x/5d/7d/74/5d7d747746593e846c083fa98573c184.jpg"} alt='Image owner' fill ></Image>
                </div>
  
                <div className=' sm:w-3/6 p-8 '>
                    <h1 className='text-center text-6xl font-sans  m-4 my-8' >Las vegas</h1>
                    <p className='text-center text-xl font-sans  sm:text-xl text-muted-foreground p-10' >
                    1234 Sunset Strip Blvd <br />
                    Las Vegas, NV 89109 <br />
                    USA <br />

                    This ice cream shop is one of the most popular spots in town.
                      Customers love the rich flavors and friendly atmosphere.
                        It is a go-to destination for sweet treats and happy moments.
                    </p>
                </div>
          </div>

          <div className='  sm:100vw w-[100vw] sm:h-[100vh] h-[200vh] flex justify-evenly items-center sm:flex-row flex-col '>

                <div className='block sm:hidden relative w-4/5 h-2/6 sm:w-1/5 sm:h-3/5 rounded-lg overflow-hidden mt-20'>
                               <Image src={"https://i.pinimg.com/736x/47/18/e1/4718e10049dcb052905a810868227613.jpg"} alt='Image owner' fill ></Image>
                </div>

                <div className=' sm:w-3/6 p-8 '>
                    <h1 className='text-center text-6xl font-sans  m-4 my-8' >California</h1>
                    <p className='text-center text-xl font-sans  sm:text-xl text-muted-foreground p-10' >
                    4820 Ice Cream <br /> Lane, California <br /> , NV 89119 <br />
                        A beloved spot known for its creamy scoops and vibrant vibe.
                       Locals and tourists can not get enough of the unique flavors.
                       It is the perfect chill-out place on a hot Vegas day.                  </p>
                </div>

                <div className=' hidden sm:block relative w-4/5 h-2/6 sm:w-1/5 sm:h-3/5 rounded-lg overflow-hidden mt-20'>
                               <Image src={"https://i.pinimg.com/736x/47/18/e1/4718e10049dcb052905a810868227613.jpg"} alt='Image owner' fill ></Image>
                </div>
          </div>

          <div className='  sm:100vw w-[100vw] sm:h-[100vh] h-[200vh] flex justify-evenly items-center sm:flex-row flex-col '>
                 <div className=' relative w-4/5 h-2/6 sm:w-1/5 sm:h-3/5 rounded-lg overflow-hidden mt-20'>
                               <Image src={"https://i.pinimg.com/736x/c5/b6/b4/c5b6b4432fe9b8c5b33b08c94f47384f.jpg"} alt='Image owner' fill ></Image>
                </div>

                <div className=' sm:w-3/6 p-8 '>
                    <h1 className='text-center text-6xl font-sans  m-4 my-8' >New york</h1>
                    <p className='text-center text-xl font-sans  sm:text-xl text-muted-foreground p-10' > 
                    2911 <br /> Rainbow Blvd, <br /> New york, NV 89108 <br />
                    Famous for its handcrafted cones and colorful sundaes.
                    Families and friends gather here for cool treats and good times.
                    A must-visit gem in the heart of Las Vegas.
                    </p>
                </div>
          </div>

          <div className='  sm:100vw w-[100vw] sm:h-[100vh] h-[200vh] flex justify-evenly items-center sm:flex-row flex-col '>
  
                <div className='block sm:hidden relative w-4/5 h-2/6 sm:w-1/5 sm:h-3/5 rounded-lg overflow-hidden mt-20'>
                               <Image src={"https://i.pinimg.com/736x/47/18/e1/4718e10049dcb052905a810868227613.jpg"} alt='Image owner' fill ></Image>
                </div>

                <div className=' sm:w-3/6 p-8 '>
                    <h1 className='text-center text-6xl font-sans  m-4 my-8' >San Francisco</h1>
                    <p className='text-center text-xl font-sans  sm:text-xl text-muted-foreground p-10' >
                    715 <br /> Dreamy Way, <br /> San Francisco, NV 8910 <br />
                    This cozy shop is a favorite for its melt-in-your-mouth textures.
                    Rave reviews from ice cream lovers across the city.
                    Every scoop feels like a taste of happiness.
                    </p>
                </div>

                                
                <div className='hidden sm:block relative w-4/5 h-2/6 sm:w-1/5 sm:h-3/5 rounded-lg overflow-hidden mt-20'>
                               <Image src={"https://i.pinimg.com/736x/47/18/e1/4718e10049dcb052905a810868227613.jpg"} alt='Image owner' fill ></Image>
                </div>
          </div>
      </div>
  )
}

export default Stores