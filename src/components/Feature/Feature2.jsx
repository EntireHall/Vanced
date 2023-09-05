import React from 'react'
import ph3 from "../../Image/ph3.jpg"
import ph4 from "../../Image/ph4.jpg"

function Feature2() {
    return (

        <div className='text-white flex mt-40 justify-center items-center max-sm:flex-wrap gap-10 flex-col'>
            <div className='flex justify-center items-center flex-wrap-reverse gap-10'>
                <div className=' flex gap-10 max-sm:flex-col'>
                    <img src={ph3} className='max-h-[500px] ' />
                    <img src={ph4} className='max-h-[500px] ' />
                </div>

                <ul className='list-disc text-justify md:w-1/3 md:px-6 max-sm:px-7 max-sm:mb-6 text-gray-400  '>
                    <h1 className='text-red-500 font-pops font-extrabold mb-4'>#2</h1>
                    <h1 className='text-4xl font-semibold mb-6 '><span className='max-sm:text-2xl bg-gradient-to-tr from-blue-600 from-35% via-red-700 bg-clip-text text-transparent '>Customization:</span></h1>

                    <li>Allows to override Codec options like forcing H.264 or VP9 for old devices.</li>

                    <li>If you need a cinematic experience, it allows you to force turn off 60fps or HDR
                        playback. (Access to the custom device configs are on our Discord or XDA)</li>

                    <li>Allows you to set the default video resolution as high o
                        r low if you want to, and also override screen
                        resolution for the sharp 4K playback on any device.</li>

                    <li>You can change the default playback speed between 0.25x
                        to 2x (assuming your device is good enough)</li>

                    <li>Ability to toggle home ads, merchandise ads, UI ads, community posts, movie upselling, compact movie, movie shelf removal, compact banners (like covid info), remove comments, and much more!</li>
                </ul>

            </div>
        </div>


    )
}

export default Feature2
