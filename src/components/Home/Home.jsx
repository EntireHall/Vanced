import React from 'react'
import { Type } from "./Type"
import { BsDownload,BsYoutube,BsMusicNoteBeamed } from "react-icons/bs"
import {PiTelevisionFill} from "react-icons/pi"
import Feature from '../Feature/Feature'

function Button({ icon, title }) {
  return <div className='text-white text-lg p-3 flex gap-2 px-6 items-center rounded bg-blue-600'>


    <button>{title} </button>
    <span>{icon}</span>
  </div>
}

function Home() {
  return (
    <>
    <div className="flex flex-col justify-center items-center max-sm:px-2 bg-black min-h-screen">

      <div className='flex flex-col items-center flex-wrap max-sm:mt-20'>
        <h1 className='max-sm:grid max-sm:text-center text-7xl max-sm:text-7xl max-sm:font-bold pb-10  font-rubik font-extrabold text-white mt-44'>Youtube<span className=' bg-gradient-to-tr from-blue-600 from-35% via-red-600 to-black bg-clip-text text-transparent mt-6 pl-6'>Vanced</span></h1>
        <h1 className='text-white text-4xl mb-10 max-sm:text-2xl'><Type /></h1>
      </div>


    
        <h1 className='mt-60 text-white font-bold text-4xl '>Download</h1>
        <h1 className='border-b-4 border-blue-600 w-10 mt-6' ></h1>
        <h1 className='py-16 md:px-[13%]  max-sm:px-6 mt-10 bg-neutral-900 text-center grid text-gray-400 text-base'>Vanced Manager will give you a chance to install and update YouTube Vanced latest versions easier than before.
          <span className='mt-2'> Download Vanced Manager from below.</span>

          <div className='flex items-center  mt-10 gap-4 justify-center max-sm:flex-col'>
            <Button icon={<BsDownload />} title={"Vanced Manager (v2.6.2)"} />

            <button className='text-white p-3 bg-zinc-800 max-sm:px-[28%]'>Try ReVanced </button>
          </div>
          <h1 className='text-base mt-2 text-gray-400'>Looking for <span className='italic text-white md:mb-20 md:mr-6'>older Versions?</span></h1>
        </h1>


        <div className='flex justify-center gap-8 mt-10 text-justify max-sm:flex-col flex-wrap font-pops  '>

        <div className=' bg-neutral-900 text-white rounded-lg py-8 flex flex-col items-center text-lg md:w-1/4 px-4'>
      <BsYoutube className=' text-9xl border-8 px-4 rounded-full border-blue-600 text-gray-400 mb-4 '/>
          <h1 className='font-semibold mb-2 text-3xl'>What is Vanced?</h1>
          <span className='mb-4 text-gray-400'>
            Vanced is a better version of the stock Android YouTube app! Includes adblocking, background playback, and lot more.
            Use the Vanced Manager app to install YouTube Vanced easily.</span>
            </div>


            <div className=' bg-neutral-900 text-white rounded-lg py-8 flex flex-col items-center text-lg md:w-1/4 px-4'>
            <BsMusicNoteBeamed className=' text-9xl border-8 px-4 rounded-full border-blue-600 text-zinc-400 mb-4'/>
          <h1 className='font-semibold mb-2 text-3xl'>Vanced Music</h1>
          <span className='mb-8 text-gray-400'>
          YouTube Vanced, but for Music! Relatively less feature-rich but fullfills your needs. 
          With adblocking and background playback enabled, experience the YouTube Music anywhere without any hassle.</span>
            </div>

            <div className=' bg-neutral-900 text-white rounded-lg py-8 flex flex-col items-center text-lg md:w-1/4 px-4 '>
            <PiTelevisionFill className=' text-9xl border-8 px-4 rounded-full border-blue-600 text-zinc-400 mb-4 '> </PiTelevisionFill>
          <h1 className='font-semibold mb-2 text-3xl'>Try PikaShow</h1>
          <span className='mb-8 text-gray-400'>
          PikaShow is a streaming app for Android! It will give you access to enjoy unlimited entertainment free of charge. 
          You can watch TV shows, New Movies, Live Cricket, Download Videos and lot more.</span>
            </div>

      </div>
      
      </div>    

<Feature/>


</>
  )
}

export default Home
