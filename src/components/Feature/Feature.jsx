import React from 'react'
import Feature2 from './Feature2'
import Feature3 from './Feature3'
import Feature4 from './Feature4'
import ph1 from "../../Image/ph1.jpg"
import ph2 from "../../Image/ph2.jpg"
 
function Feature() {
    return (


        <div className='flex flex-col bg-black min-h-screen justify-center items-center font-pops  '>
        <div className='md:mt-40 flex flex-col justify-center items-center max-sm:mt-20'>
            <h1 className='text-white font-bold text-4xl '>Features</h1>
            <h1 className='text-gray-400 text-lg mt-2 max-sm:px-6 text-center'>List of all the exclusive features of YouTube Vanced App.</h1>
            <h1 className='border-b-4 border-blue-600 w-10 mt-4 mb-20' ></h1>
        </div>
            
            <div className='text-white flex mt-10 justify-center items-center max-sm:flex-wrap gap-10'>
        
                
                <ul className='list-disc text-justify md:w-1/3 md:px-6 max-sm:px-7 max-sm:mb-6 text-gray-400 '>
                    <h1 className='text-red-500 font-pops font-extrabold mb-4'>#1</h1>
                <h1 className='text-4xl font-semibold mb-6 '><span className=' bg-gradient-to-tr from-blue-600 from-35% via-red-700 bg-clip-text text-transparent max-sm:text-2xl '>Main Features:</span></h1>
                    
                    <li>Features the true AMOLED dark mode to reduce battery and eye strain.</li>

                    <li>With adblocking enabled blocks all ads in videos and play videos in the background
                        or PiP (Picture in Picture) mode - supports android 8.0 and up</li>

                    <li>Controls brightness and volume with Swipe Control like the other video players
                        such as MX Player (with configurable padding).</li>

                    <li>The auto-repeat feature allows you to enjoy your favorite songs and videos keep playing in a loop.</li>

                    <li>Not much interest in the new comments
                        section or mini player? Simply toggle them to the tablet
                        version which is similar to the old version (slightly buggy though).</li>
                </ul>
        <div className=' flex gap-10 max-sm:flex-col'>
            <img src={ph1} className='max-h-[500px] '/>
            <img src={ph2} className='max-h-[500px] '/>
        </div>

            </div>
<Feature2/>
<Feature3/>
<Feature4/>
</div>
        
    )
}

export default Feature
