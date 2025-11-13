import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
    return (
       <div>
         <div className='font-[font1]  mt-72 lg:mt-0 pt-5 text-center'>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
                THE SPARK FOR
            </div>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[10vw]'>
                ALL
               
                <div
  className="relative h-[0.7em] w-[1.5em] rounded-full  overflow-hidden isolate"
>
  <video
    className="absolute top-0 left-0 w-full h-full object-cover rounded-full pointer-events-none"
    muted
    loop
    autoPlay
    playsInline
    src='video.mp4'
  ></video>
</div>

                THINGS
            </div>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
                CREATIVE
            </div>
        </div>
       </div>
    )
}

export default HomeHeroText