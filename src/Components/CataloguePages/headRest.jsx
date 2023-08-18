import React, { useState } from 'react'
import CatalogueData from './cataApi'
import MoreDetail from './moreDetail'

const HeadRest = () => {


  const [activeID, setActiveID] = useState(null)
  const [tabOpen, setTabOpen] = useState(false)
  const [cData, setCData] = useState(CatalogueData)

  const idPasser = (id) => {
    setActiveID(id)
    setTabOpen(true)
  }
  
  return (
    <div className='w-full flex justify-center items-center '>
      <div className='grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-10 py-10 px-10'>
        {
          cData.map((imgData, index) => (
            imgData.name === 'headRestVideo' ? <div className={`w-[17rem] h-[17rem]`}
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-easing="ease-in"
            data-aos-delay="100"
            onClick={ ()=> idPasser(imgData.id)}
            >

              <video src={imgData.imgUrl} className='w-full h-full object-cover rounded-md' autoPlay ioop muted/>

            </div> : imgData.name === 'headRestImg' ?
             <div style={{backgroundImage: `url(${imgData.imgUrl})`,backgroundPosition: 'center',backgroundRepeat: 'no-repeat'}}
             className='bg-cover object-cover w-[17rem] h-[17rem] rounded-md'
             data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="100"
            data-aos-easing="ease-in"
            onClick={ ()=> idPasser(imgData.id)}></div> : null
          ))
        }

      </div>
      {tabOpen && <MoreDetail setTabOpen={setTabOpen} activeID={activeID}/>}
    </div>
  )
}

export default HeadRest
