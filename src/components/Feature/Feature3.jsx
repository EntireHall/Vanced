import React from 'react'
import ph5 from "../../Image/ph5.jpg"
import ph6 from "../../Image/ph6.jpg"


function Feature3() {
    return (
      
            <div className='text-white flex mt-40 justify-center items-center max-sm:flex-wrap gap-10'>


                <ul className='list-disc text-justify md:w-1/3 md:px-6 max-sm:px-7 max-sm:mb-6 text-gray-400 '>
                <h1 className='text-red-500 font-pops font-extrabold mb-4'>#3</h1>
                    <h1 className='text-4xl font-semibold mb-6 '><span className='max-sm:text-2xl bg-gradient-to-tr from-blue-600 from-35% via-red-700 bg-clip-text text-transparent '>Sponser Block:</span></h1>

                    <li>New feature to skip annoying sponsor advertisements (where the YouTuber puts a 
                        service or product ads in the middle of a video)</li>

                    <li>It also allows you to skip other unwanted things like intros, 
                        outros, and reminders to like & subscribe.</li>

                    <li>Using this API found here. You can follow the link to find more information on how this API works.</li>

                    <li>Also features the ability to submit your segments to the API and contribute to the community.</li>

                    <li>Full control over whether to automatically skip a sponsored segment o
                        r showing a button for the skip, or just not skipping it at all.</li>

                    <li>Highlights the segments in the specific colors based on their category in the seek bar/timeline.</li>



                </ul>
                <div className=' flex gap-10 max-sm:flex-col'>
                    <img src={ph5} className='max-h-[500px] ' />
                    <img src={ph6} className='max-h-[500px] ' />
                </div>

            </div>
        
    )
}

export default Feature3
