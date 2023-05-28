import React,{ useState, useEffect } from 'react'
import cImg_1 from '../../Assets/curtain-imges/curtian-1.jpg'
import cImg_2 from '../../Assets/curtain-imges/curtian-2.jpg'
import cImg_3 from '../../Assets/curtain-imges/curtian-3.jpg'
import cImg_4 from '../../Assets/curtain-imges/curtian-4.jpg'
import cImg_5 from '../../Assets/curtain-imges/curtian-5.jpg'
import cImg_6 from '../../Assets/curtain-imges/curtian-6.jpg'
import cImg_7 from '../../Assets/curtain-imges/curtian-7.jpg'
import cImg_8 from '../../Assets/curtain-imges/curtian-8.jpg'
import { GrNext, GrPrevious } from 'react-icons/gr'
import {RxDotFilled} from 'react-icons/rx'


const Slider = () => {

    useEffect( ()=> {
       const timer = setTimeout( ()=> {
            if(currentIndex === 0) {
                const updatedIndex = currentIndex + 1
                setCurrentIndex(updatedIndex)
            }
            if(currentIndex !== slides.length){
                const updatedIndex = currentIndex + 1
                setCurrentIndex(updatedIndex)  
            }
            if(currentIndex === 7){
                const updatedIndex = currentIndex - 7
                setCurrentIndex(updatedIndex)

            }
            else{
                const updatedIndex = currentIndex + 1
                setCurrentIndex(updatedIndex)
            }
            return clearTimeout(timer)
        },4000)
    })

    const [currentIndex, setCurrentIndex ] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const slides = [
        {link: cImg_1},
        {link: cImg_2},
        {link: cImg_3},
        {link: cImg_4},
        {link: cImg_5},
        {link: cImg_6},
        {link: cImg_7},
        {link: cImg_8}
    ]

    const goTOSlide = (slideIndex) => { 
        setCurrentIndex(slideIndex)
    }
  return (
    <div id='slider' className='flex justify-center flex-col items-center w-[100%] h-[65vh] mt-[12rem]'>
        <div style={{backgroundImage: `url(${slides[currentIndex].link})`,
        backgroundPosition: 'center',backgroundRepeat: 'no-repeat'}} className='z-[-1] md:z-auto relative group md:w-[60%] w-[80%] h-[100%] rounded-2xl 
        bg-cover object-cover transition-all ease-in duration-500'>

            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] text-2xl left-5 rounded-full bg-[#112b24] p-2 text-white cursor-pointer'
            onClick={prevSlide}>
                <GrPrevious className='w-[22px] h-[22px] md:w-[1.7rem] md:h-[1.7rem]'/>
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] text-2xl right-5 rounded-full bg-[#112b24]/80 p-2 text-white cursor-pointer'
            onClick={nextSlide}>
                <GrNext className='w-[22px] h-[22px] md:w-[1.7rem] md:h-[1.7rem]'/>
            </div> 
        </div>


        <div className='flex top-4 justify-center py-2 flex-row'>
            {
                slides.map((slide, slideIndex) => (
                    <div key={slideIndex} onClick={ ()=> goTOSlide(slideIndex)} className='text-2xl text-[#f2f3ef] cursor-pointer'>
                        <RxDotFilled className={`${currentIndex === slideIndex ? 'text-2xl' : 'text-xl'}`}/>
                    </div>
                ))
            }   
        </div>


    </div>
  )
}

export default Slider


