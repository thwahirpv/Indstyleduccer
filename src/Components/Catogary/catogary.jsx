import React from 'react'
import { Link } from 'react-router-dom'
import bambooLogo from "../../Assets/Catalogue/bamboo-1.jpg"
import casualLogo from "../../Assets/Catalogue/casual-5.jpg"
import livingLogo from "../../Assets/Catalogue/living-6.jpg"

const Catogary = () => {
  return (
    <div>
        <div id='catalogue' className='w-full flex flex-col justify-center items-center mt-[10rem] space-y-20'>
            <h1 className='text-[#f2f3ef] font-bold text-[2.5rem] md:text-[3rem] cursor-context-menu>Catalog'>Catalogue</h1>
            <div className='grid xs:grid-cols-1 sm:grid-cols-3 
            xs:gap-x-11 md:gap-x-[10rem] sm:gap-x-[6rem]
            sm:gap-y-[4rem] xs:gap-y-[3rem]
            gap-y-12'>
              <div className='text-center space-y-1'>
                <Link to="/casual">
                <img src={casualLogo} alt='casualLogo' className='md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] bg-black rounded-md xs:w-[6rem] xs:h-[6rem]'/>
                <Link to="/casual" className='font-bold xs:text-[.9rem] sm:text-[1rem] md:text-[1.5rem] text-[#f2f3ef]'>Casual</Link>
                </Link>
              </div>

              <div className='text-center space-y-1'>
                <Link to="/bamboo">
                <img src={bambooLogo} alt='bambooLogo' className='md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] bg-black rounded-md xs:w-[6rem] xs:h-[6rem]'/>
                <Link to="/bamboo" className='font-bold xs:text-[.9rem] sm:text-[1rem] md:text-[1.5rem] text-[#f2f3ef]'>Bamboo</Link>
                </Link>
              </div>

              <div className='text-center space-y-1'>
                <Link to="/livingroom">
                <img src={livingLogo} alt='bambooLogo' className='md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] bg-black rounded-md xs:w-[6rem] xs:h-[6rem]'/>
                <Link to="/livingroom" className='font-bold xs:text-[.9rem] sm:text-[1rem] md:text-[1.5rem] text-[#f2f3ef]'>Living Room</Link>
                </Link>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Catogary
