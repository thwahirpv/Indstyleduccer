import React from 'react'
import { Link } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
import { RiWhatsappFill } from 'react-icons/ri'
import { BsTelephone } from 'react-icons/bs'
import { FaWhatsappSquare } from 'react-icons/fa'
import { IoCall } from 'react-icons/io5'
import { FaInstagramSquare } from 'react-icons/fa'
import ReactWhatsapp from 'react-whatsapp'

const Footer = () => {

    const navigations = [
        {option: 'Home', path: '/'},
        {option: 'Catalogue', path: 'catalogue'},
        {option: 'Gallery', path: 'gallery'},
        {option: 'Contact', path: '/contact'}
      ]
    
  return (

    <div className='w-full bg-[#f2f3ef] mt-[7rem] flex justify-center items-center py-[9rem] md:px-10 px-4 relative'>
        <div className='w-[60%] flex justify-between items-center'>

          <div className='flex justify-between items-start space-x-4 md:space-x-14 w-fit mb-[4rem]'>
            {/* ==========Links============= */}
            <div className='flex flex-col justify-center items-start space-y-5'>
              <h2 className='font-bold text-[17px] md:text-[1.6rem] text-[#112b24]  hover:text-green-900 transition-all duration-200 ease-in cursor-pointer'>Links</h2>

            <ul className='flex justify-center items-start flex-col space-y-2'>
        {
          navigations.map((navigation, index) => (
            <li key={index} className='font-[500] text-[15px] md:text-[18px] text-[#112b24] hover:text-green-900 transition-all duration-200 ease-in cursor-pointer'>
              {
                navigation.option === 'Catalogue' ? <LinkScroll 
                
                               activeClass="active"
                               to="catalogue"
                               spy={true}
                               smooth={true}
                               offset={-150}
                               duration={500}>

                                  {navigation.option}
                                              </LinkScroll> :
                navigation.option === 'Gallery' ?<LinkScroll 
                
                               activeClass="active"
                               to="gallery"
                               spy={true}
                               smooth={true}
                               offset={-150}
                               duration={500}>

                                  {navigation.option}
                               </LinkScroll> :
                <Link to={navigation.path}>{navigation.option}</Link>
              }
              
            </li>
          ))
        }
      </ul>
            </div>
            {/* =============Links========== */}


            {/* ==========Our work============== */}

              <div className='flex flex-col justify-center items-start space-y-5'>

                <h2 className='font-bold text-[17px] md:text-[1.6rem] text-[#112b24]  hover:text-green-900 transition-all duration-200 ease-in cursor-pointer'>Our Work</h2>

                <ul className='flex justify-center items-start flex-col space-y-2'>
                  <LinkScroll
                  activeClass="active"
                  to="catalogue"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                  className='font-[500] text-[15px] md:[18px] text-[#112b24] hover:text-green-900 transition-all duration-200 ease-in cursor-pointer'>
                    Catalogue
                  </LinkScroll>
                  <LinkScroll
                  activeClass="active"
                  to="gallery"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                  className='font-[500] text-[15px] md:text-[18px] text-[#112b24] hover:text-green-900 transition-all duration-200 ease-in cursor-pointer'>
                    Gallery
                  </LinkScroll>
                </ul>

              </div>



            {/* ==========Our work============== */}

          </div>

        </div>

        <div className='flex flex-col justify-center items-center space-y-3 mb-[4rem]'>
        <LinkScroll className='font-extrabold text-[15px] md:text-[2rem] text-[#112b24] cursor-pointer'
        activeClass="active"
        to="slider"
        spy={true}
        smooth={true}
        offset={-200}
        duration={500}>
          In sTyle Duccer
        </LinkScroll>

        <div className='flex space-x-3 md:space-x-5 '>
            <ReactWhatsapp number='+91-8086533291' message='Hello, I need know more Details' className='bg-[#25D366] py-[.4rem] md:py-[.5rem] px-4 md:px-6 rounded-md cursor-pointer'>
              <RiWhatsappFill size={20} className=''/>
            </ReactWhatsapp>
            <a href='tel:+918086533291' className='bg-[#3BACEC] py-[.4rem] md:py-[.5rem] px-4 md:px-6 rounded-md cursor-pointer'>
              <BsTelephone size={20}/>
            </a>
        </div>

        <div className='flex space-y-5 md:space-y-5 flex justify-center items-center'>
          <p className='text-center text-[#112b24] text-md font-semibold'> Kerala, Kannur, Kuthuparamba, Mouweri</p>
        </div>
        </div>

        <div className='w-full absolute bottom-[1rem] flex flex-col justify-center items-center'>
           <div className='w-[80%] h-[.1rem] bg-[#112b24] '></div>

           <div className='flex w-[80%] justify-between mt-[7px] items-center mt-[2rem]'>
            <div className='flex space-x-2'>
              <p>
                &copy;
              </p>
            <p className='flex'>
              2023
            </p>
            </div>

           <div>
            <p>All rights reserve.</p>
           </div>
            

           </div>

            <div className='flex flex-col space-x-3 items-center justify-center mt-[2rem]'>
                
                <div className='block'>
                  <p className='font-bold-900 text-[#112b24]'>Designed By</p>
                </div>
                <div className='flex space-x-2 mt-[.6rem]'>
                <p className='font-extrabold text-[#112b24]'>MT-Designs</p>
                 <a href='tel:+918086533291' className='bg-[#4285F4] py-1 px-1 rounded-full cursor-pointer flex justify-center items-center'>
                   <IoCall size={20}/>
                 </a>
                <ReactWhatsapp number='+91-9895779351' message='Hello, I need Website' className='bg-[#25D366] px-1 py-1 rounded-full cursor-pointer font-semibold flex justify-center items-cente'>
                <FaWhatsappSquare size={20} className=''/>
                </ReactWhatsapp>

                <a href='https://www.instagram.com/_thwahirpv_/' className='bg-[#a45999] py-1 px-1 rounded-full cursor-pointer flex justify-center items-center'>
                   <FaInstagramSquare size={20}/>
                 </a>
                </div>
                
            </div>
           
        </div>
        </div>



    
  )
}

export default Footer
