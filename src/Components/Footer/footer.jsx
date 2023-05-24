import React from 'react'
import { Link } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

const Footer = () => {

    const navigations = [
        {option: 'Home', path: '/'},
        {option: 'Catalogue', path: 'catalogue'},
        {option: 'Gallery', path: 'gallery'},
        {option: 'Contact', path: '/contact'}
      ]
    
  return (
    <div className='w-full bg-[#f2f3ef] mt-[7rem] flex justify-center items-center py-10'>
        <div className='w-[60%] flex justify-between items-center'>
            <div className='flex flex-col justify-center items-start space-y-5'>

              <h2 className='font-bold text-3xl text-[#112b24]  hover:text-green-900 transition-all duration-200 ease-in cursor-pointer'>Links</h2>

            <ul className='flex justify-center items-start flex-col space-y-3'>
        {
          navigations.map((navigation, index) => (
            <li key={index} className='font-bold text-[18px] text-[#112b24] hover:text-green-900 transition-all duration-200 ease-in cursor-pointer'>
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
        </div>

        <div className='flex flex-col justify-center items-center'>
        <LinkScroll className='font-extrabold md:text-[2rem] text-[#112b24] text-[1.6rem] cursor-pointer'
        activeClass="active"
        to="slider"
        spy={true}
        smooth={true}
        offset={-200}
        duration={500}>
          In sTyle Duccer
        </LinkScroll>

        <div>
            <button className='bg-[]'></button>
            <button className='bg-[]'></button>
        </div>

        </div>
      
    </div>
  )
}

export default Footer
