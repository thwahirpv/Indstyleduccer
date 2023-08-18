import React from 'react'
import { Link } from 'react-router-dom'
import fullLengthLogo from "../../Assets/catalog/full-length/fl-8.jpg"
import romanLogo from "../../Assets/catalog/roman-blinds/zb-2.jpeg"
import zeebraLogo from "../../Assets/catalog/zeebra-blinds/zbr-14.jpg"
import headRestLogo from "../../Assets/catalog/head-rest/hr-20.jpg"
import frimeWorkLogo from "../../Assets/catalog/frame-work/fw-11.jpg"
import sofaLogo from "../../Assets/catalog/sofa/s-13.jpg"

const Catogary = () => {
  return (
    <div>
        <div id='catalogue' className='w-full flex flex-col justify-center items-center mt-[10rem] space-y-20'>
            <h1 className='text-[#f2f3ef] font-bold text-[2.5rem] md:text-[3rem] cursor-context-menu>Catalog'>Catalogue</h1>
            <div className='grid xs:grid-cols-2 xs:grid-row-2 sm:grid-cols-3
            xs:gap-x-11 md:gap-x-[10rem] sm:gap-x-[6rem]
            sm:gap-y-[4rem] xs:gap-y-[3rem]
            gap-y-12'>
              <div className='text-center space-y-1'>
                <Link to="/zeebraBlinds">
                <img src={zeebraLogo} alt='casualLogo' className='md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] bg-black rounded-md xs:w-[6rem] xs:h-[6rem]'/>
                <Link to="/zeebraBlinds" className='font-bold xs:text-[.9rem] sm:text-[1rem] md:text-[1.5rem] text-[#f2f3ef]'>Zeebra Blinds</Link>
                </Link>
              </div>

              <div className='text-center space-y-1'>
                <Link to="/fullLength">
                <img src={fullLengthLogo} alt='bambooLogo' className='md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] bg-black rounded-md xs:w-[6rem] xs:h-[6rem]'/>
                <Link to="/fullLength" className='font-bold xs:text-[.9rem] sm:text-[1rem] md:text-[1.5rem] text-[#f2f3ef]'>Full Length</Link>
                </Link>
              </div>

              <div className='text-center space-y-1'>
                <Link to="/romanBlinds">
                <img src={romanLogo} alt='bambooLogo' className='md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] bg-black rounded-md xs:w-[6rem] xs:h-[6rem]'/>
                <Link to="/romanBlinds" className='font-bold xs:text-[.9rem] sm:text-[1rem] md:text-[1.5rem] text-[#f2f3ef]'>Roman Blinds</Link>
                </Link>
              </div>

              <div className='text-center space-y-1'>
                <Link to="/headRest">
                <img src={headRestLogo} alt='casualLogo' className='md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] bg-black rounded-md xs:w-[6rem] xs:h-[6rem]'/>
                <Link to="/headRest" className='font-bold xs:text-[.9rem] sm:text-[1rem] md:text-[1.5rem] text-[#f2f3ef]'>Head Rest</Link>
                </Link>
              </div>

              <div className='text-center space-y-1'>
                <Link to="/frimeWork">
                <img src={frimeWorkLogo} alt='casualLogo' className='md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] bg-black rounded-md xs:w-[6rem] xs:h-[6rem]'/>
                <Link to="/frimeWork" className='font-bold xs:text-[.9rem] sm:text-[1rem] md:text-[1.5rem] text-[#f2f3ef]'>Frime Work</Link>
                </Link>
              </div>

              <div className='text-center space-y-1'>
                <Link to="/sofa">
                <img src={sofaLogo} alt='casualLogo' className='md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] bg-black rounded-md xs:w-[6rem] xs:h-[6rem]'/>
                <Link to="/sofa" className='font-bold xs:text-[.9rem] sm:text-[1rem] md:text-[1.5rem] text-[#f2f3ef]'>Sofa</Link>
                </Link>
              </div>
              
            </div>
        </div>
    </div>
  )
}

export default Catogary
