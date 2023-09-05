import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../Image/logo.jpg"

function Li({link,title})
{
    return<Link to={link} className="font-bold text-white text-normal  hover:underline underline-offset-4 pr-3 pt-4">
    <li className=''><li className='flex hover:text-red-600 transition duration-1000 ease-in-out'>{title}</li></li>
</Link> 
}



function Navbar() 
{
  
  return (
   
            <div className='flex justify-around gap-40 bg-black font-pop max-sm:hidden p-7'>
        <img src={logo} className='h-12 w-12'/>
              <ul className='flex gap-4'>
                   
              <Li link={""} title={"Features"} />
                    <Li link={""} title={"Changelogs"} />
                    <Li link={""} title={"Need_help?"} />
                    <Li link={""} title={"Vanced_for_iOS"} />
                    <Li link={""} title={"FAQ"} />
              </ul>
            </div>

   
  )
}

export default Navbar

          