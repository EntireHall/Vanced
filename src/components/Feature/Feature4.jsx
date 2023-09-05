import React from 'react'
import ph7 from "../../Image/ph7.jpg"
import ph8 from "../../Image/ph8.jpg"


function Feature4() {
    return (


        <div className='text-white flex mt-40 justify-center items-center max-sm:flex-wrap gap-10 flex-col '>
            <div className='flex justify-center items-center flex-wrap-reverse gap-10'>

                <div className=' flex gap-10 max-sm:flex-col '>
                    <img src={ph7} className='max-h-[500px] ' />
                    <img src={ph8} className='max-h-[500px] ' />
                </div>

                <ul className='list-disc text-justify md:w-1/3 md:px-6 max-sm:px-7 max-sm:mb-6 text-gray-400   '>
                    <h1 className='text-red-500 font-pops font-extrabold mb-4'>#4</h1>
                    <h1 className=' text-4xl font-semibold mb-6 '><span className='flex bg-gradient-to-tr from-blue-600 from-35% via-red-700 bg-clip-text text-transparent max-sm:text-2xl '>Return YouTube™ Dislike:</span></h1>


                    <li>Reverses the dislike counter removal, so you can
                        see the number of dislikes in videos again</li>

                    <li>Using the Return YouTube™ Dislike API found here. Click for more information on how it works</li>

                    <li>It uses extension and vanced userbase dislike submissions to estimate total dislikes
                        on new videos and archived dislike data for old videos.</li>



                </ul>
            </div>
        </div>




    )
}

export default Feature4
