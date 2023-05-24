import React from 'react'
import imageData from '../../imageData'
import { useState, useEffect } from 'react'
import DetailedImage from '../DetailedImage/detailedImage'



const Gallery = () => {

  const [mdNextItems, setMdNextItems] = useState(9)
  const [smNextItems, setSmNextItems] = useState(6)
  const [activeId, setActiveId] = useState(null)
  const [detailViewer, setDetailViewer] = useState(false)
  const [selectTab, setSelectTab] = useState('all')
  const [data, setData] = useState(imageData)


  useEffect( ()=> {

    if(selectTab === 'all') {
      setData(imageData)
    }

    if(selectTab === 'image') {
      const filteredData = imageData.filter( item => item.catogary === 'image')
      setData(filteredData)
    }

    if(selectTab === 'video') {
      const filteredData = imageData.filter( item => item.catogary === 'video')
      setData(filteredData)
    }

  }, [selectTab]);

  const loadMore = (screen) =>{
    if(screen === 'md'){
      setMdNextItems(prev=> prev + 3)
    }
    if(screen === 'sm') {
      setSmNextItems(prev => prev + 4)
    }  
  }

  const loadLess = (screen) =>{
    if(screen === 'md'){
      setMdNextItems(9)
    }
    if(screen === 'sm') {
      setSmNextItems(6)
    }  
  }

  const moreDetailsHandler = (id) =>{
    setActiveId(id)
    setDetailViewer(true)
  }

  
  return (
    <div id='gallery' className='w-full flex flex-col justify-center items-center xs:space-y-4 sm:space-y-8  md:space-y-16 mt-[15rem]'>

     
        <div className='w-full flex flex-col md:flex-row justify-center items-center space-y-20'>
        <div className='w-[65%] flex md:flex-row flex-col items-center md:justify-between md:space-y-0 space-y-20'>
           <h1 className='text-[#f2f3ef] font-bold text-[2.5rem] md:text-[3rem] cursor-context-menu'>Gallery</h1>
        
        <div className='flex md:space-x-5 space-x-3 pt-5'>       
          <button className='text-[#f2f3ef] border-2 border-[#f2f3ef] md:text-[17px] text-[15px] font-bold py-1 md:px-4 px-3 cursor-pointer rounded-md'
          onClick={ ()=> setSelectTab('all')}>
            All
          </button>
          <button className='text-[#f2f3ef] border-2 border-[#f2f3ef] md:text-[17px] text-[15px] font-bold py-1 md:px-4 px-3 cursor-pointer rounded-md'
          onClick={ ()=> setSelectTab('image')}>
            Images
          </button>
          <button className='text-[#f2f3ef] border-2 border-[#f2f3ef] md:text-[17px] text-[15px] font-bold py-1 md:px-4 px-3 cursor-pointer rounded-md'
          onClick={ ()=> setSelectTab('video')}>
            Videos
          </button>
        </div>
        </div>  
        </div>

        {/*=================md===========================  */}
        <div className='hidden md:flex flex-col justify-center space-y-20'>
        <div className='grid md:grid-cols-3 gap-16'>

          {
           data?.slice(0, mdNextItems)?.map((image, index)=> (
            image.catogary === 'video' ? <div className={`w-[18rem] h-[18rem]`}
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-easing="ease-in"
            data-aos-delay="100"
            >

              <video src={image.urlImg} className='w-full h-full object-cover rounded-md' autoPlay ioop muted  
              onClick={ ()=> moreDetailsHandler(image.id)}/>

            </div> : 
             <div style={{backgroundImage: `url(${image.urlImg})`}}
             className='bg-cover object-cover w-[18rem] h-[18rem] rounded-md'
             data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="100"
            data-aos-easing="ease-in"
            onClick={ ()=> moreDetailsHandler(image.id)}></div>
              ))
          }
        </div>


        {
          mdNextItems < imageData.length ? (<button className='bg-[#f2f3ef] text-[#112b24] font-extrabold text-xl rounded-md py-1 px-5 self-center'
          onClick={ ()=> loadMore('md')}>
            More
          </button> ) : 
          (<button className='bg-[#f2f3ef] text-[#112b24] font-extrabold text-xl rounded-md py-1 px-5 self-center transition-all ease-in duration-1000'
          onClick={ ()=> loadLess('md')}>
             Less 
          </button> )
        }
        </div>
        {/* ===========================md====================== */}



        {/* ===========================sm========================= */}
        <div className='md:hidden flex flex-col justify-center space-y-16'>
        <div className='grid sm:grid-cols-2 xs:grid-cols-1 gap-12'>

          {
           data?.slice(0, smNextItems)?.map((image, index)=> (
            image.catogary === 'video' ? <div className={`w-[17rem] h-[17rem]`}
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-easing="ease-in"
            data-aos-delay="100"
            >

              <video src={image.urlImg} className='w-full h-full object-cover rounded-md' autoPlay ioop muted  
              onClick={ ()=> moreDetailsHandler(image.id)}/>

            </div> : 
             <div style={{backgroundImage: `url(${image.urlImg})`}}
             className='bg-cover object-cover w-[17rem] h-[17rem] rounded-md'
             data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="100"
            data-aos-easing="ease-in"
            onClick={ ()=> moreDetailsHandler(image.id)}></div>
              ))
          }
        </div>



        {
          smNextItems < imageData.length ? (<button className='bg-[#f2f3ef] text-[#112b24] font-extrabold text-xl rounded-md py-1 px-5 self-center'
          onClick={ ()=> loadMore('sm')}>
            More
          </button> ) : 
          (<button className='bg-[#f2f3ef] text-[#112b24] font-extrabold text-xl rounded-md py-1 px-5 self-center transition-all ease-in duration-1000'
          onClick={ ()=> loadLess('sm')}>
             Less 
          </button> )
        }
        </div>


        {/* ==================================sm=========================== */}

        {/* {
          mdNextItems < imageData.length ? (<button className='bg-[#f2f3ef] text-[#112b24] font-extrabold text-xl rounded-md py-1 px-5 mt-[-10px]'
          onClick={ ()=> loadMore()}>
            More
          </button> ) : 
          (<button className='bg-[#f2f3ef] text-[#112b24] font-extrabold text-xl rounded-md py-1 px-5 mt-[-10px] transition-all ease-in duration-1000'
          onClick={loadLess}>
             Less 
          </button> )
        } */}

        { detailViewer && <DetailedImage setDetailViewer={setDetailViewer}  activeId={activeId} /> }

      </div>
      
  )
}

export default Gallery
