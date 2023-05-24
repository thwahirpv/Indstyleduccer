import React from 'react'

const Catogary = () => {
  return (
    <div>
        <div id='catalogue' className='w-full flex flex-col justify-center items-center mt-[10rem] space-y-20'>
            <h1 className='text-[#f2f3ef] font-bold text-[2.5rem] md:text-[3rem] cursor-context-menu>Catalog'>Catalogue</h1>
            <div className='grid xs:grid-cols-2 sm:grid-cols-3 
            xs:gap-x-11 md:gap-x-[10rem] sm:gap-x-[6rem]
            sm:gap-y-[4rem] xs:gap-y-[3rem]
            gap-y-12'>
              <div className='text-center space-y-1'>
                <div className='md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] bg-black rounded-md xs:w-[6rem] xs:h-[6rem]'></div>
                <h2 className='font-bold xs:text-[.9rem] sm:text-[1rem] md:text-[1.5rem] text-[#f2f3ef]'>Casual</h2>
              </div>

              <div className='text-center space-y-1'>
                <div className='md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] bg-black rounded-md xs:w-[6rem] xs:h-[6rem]'></div>
                <h2 className='font-bold xs:text-[.9rem] sm:text-[1rem] md:text-[1.5rem] text-[#f2f3ef]'>Bamboo</h2>
              </div>

              <div className='text-center space-y-1'>
                <div className='md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] bg-black rounded-md xs:w-[6rem] xs:h-[6rem]'></div>
                <h2 className='font-bold xs:text-[.9rem] sm:text-[1rem] md:text-[1.5rem] text-[#f2f3ef]'>Living Room</h2>
              </div>

              <div className='text-center space-y-1'>
                <div className='md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] bg-black rounded-md xs:w-[6rem] xs:h-[6rem]'></div>
                <h2 className='font-bold xs:text-[.9rem] sm:text-[1rem] md:text-[1.5rem] text-[#f2f3ef]'>Bamboo</h2>
              </div>

              <div className='text-center space-y-1'>
                <div className='md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] bg-black rounded-md xs:w-[6rem] xs:h-[6rem]'></div>
                <h2 className='font-bold xs:text-[.9rem] sm:text-[1rem] md:text-[1.5rem] text-[#f2f3ef]'>Bamboo</h2>
              </div>

              <div className='text-center space-y-1'>
                <div className='md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] bg-black rounded-md xs:w-[6rem] xs:h-[6rem]'></div>
                <h2 className='font-bold xs:text-[.9rem] sm:text-[1rem] md:text-[1.5rem] text-[#f2f3ef]'>Bamboo</h2>
              </div>

            </div>
        </div>
    </div>
  )
}

export default Catogary
