import React from 'react'
import imageData from '../../imageData'
import {AiOutlineClose} from 'react-icons/ai'

const DetailedImage = ({activeId, setDetailViewer}) => {
    const imageDetails = imageData.find(imageDetail => imageDetail.id === activeId)
  return (
    <div className='w-full h-full bg-[#112b2490] fixed top-0 left-0 z-[100] flex justify-center items-center'>
      <div className='md:w-[28rem] md:h-[30rem] xs:w-[22rem] xs:h-[31.3rem] sm:w-[33rem] sm:h-[35rem] md:pt-[3rem] xs:pt-[3rem] sm:pt-[3.1rem] 
      rounded-md flex justify-center items-center p-5 relative bg-[#f2f3ef]'>

        {
          imageDetails.catogary === 'video' ?  
            <video src={imageDetails.urlImg} className='bg-cover object-cover md:w-[25rem] md:h-[25rem] sm:w-[35rem] sm:h-[35rem] xs:w-[20rem] xs:h-[27rem] rounded-md'
            autoPlay loop controls muted />
          : 
          <div style={{backgroundImage: `url(${imageDetails.urlImg})`}} className='bg-cover object-cover bg-no-repeat md:w-[25rem] md:h-[25rem] sm:w-[30rem] sm:h-[30rem] xs:w-[20rem] xs:h-[27rem] rounded-md'>
          </div>
        }
        


        <button className='absolute top-2 right-2 bg-[#112b24] w-[1.8rem] h-[1.8rem] rounded-full flex justify-center items-center cursor-pointer'
        onClick={ ()=> setDetailViewer(false)}>
          <AiOutlineClose className='text-[#f2f3ef] font-extrabold text-md'/>
        </button>

      </div>
    </div>
  )
}

export default DetailedImage
