import React from 'react'
import Image from 'next/image'

function AboutBody() {
  return (
    <div>
        
        <div className='  sm:100vw w-[100vw] sm:h-[100vh] h-[200vh] flex justify-evenly items-center sm:flex-row flex-col '>
              
              <div className=' relative w-4/5 h-2/6 sm:w-1/5 sm:h-3/5 rounded-lg overflow-hidden '>
                             <Image src={"https://i.pinimg.com/736x/fe/d4/4e/fed44eaf0fe02391645e4b12e4f2e683.jpg"} alt='Image owner' fill ></Image>
              </div>

              <div className=' sm:w-3/6 p-8 '>
                  <h1 className='text-center text-6xl font-sans  m-4 my-8' >Our Hardworking Story</h1>
                  <p className='text-center text-xl font-sans  sm:text-xl text-muted-foreground p-10' >NIC Ice Creams came to life over late-night cravings and endless laughter because, let’s face it, the best memories are made with a spoon in hand. We wanted ice cream that’s as honest as your best friend, no artificial flavors, no preservatives, just pure goodness. So, we got to work, turning the creamiest milk and freshest fruits into flavours inspired by all the things we love.

                     Every scoop we churn is a little love note to friendship. It’s for those who believe that the best things in life are meant to be shared, and that a tub of ice cream is the perfect excuse to do it.
                  </p>
              </div>
        </div>
    </div>
  )
}

export default AboutBody