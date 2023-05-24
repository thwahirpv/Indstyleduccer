import React from 'react'
import { CgMenuRound, CgCloseO } from 'react-icons/cg'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'


const Header = () => {

  const [navOPen, setNavOPen] = useState(false)

  const navigations = [
    {option: 'Home', path: '/'},
    {option: 'Catalogue', path: 'catalogue'},
    {option: 'Gallery', path: 'gallery'},
    {option: 'Contact', path: '/contact'}
  ]

  
  return (
   <div id='header' className='w-full fixed top-5 flex justify-center z-[150] items-center'>
    <div className='w-[80%] py-2 md:py-4 bg-[#f2f3ef] rounded-md shadow-md flex md:justify-between justify-center items-center relative'>

      <div className='w-fit md:ml-10'>
        <h1>
        <Link to="/" className='font-extrabold md:text-[2rem] text-[#112b24] text-[1.6rem]'>
          In sTyle Duccer
        </Link>
        </h1>
      </div>

      <ul className='md:flex md:mr-5 md:mt-2 hidden'>
        {
          navigations.map((navigation, index) => (
            <li key={index} className='md:mr-9 font-bold text-[18px] text-[#112b24] hover:text-green-900 transition-all duration-200 ease-in cursor-pointer'>
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

      <div className='w-fit md:hidden absolute right-3'>
        {
           navOPen ? <CgCloseO className='text-[25px] font-bold text-[#112b24] cursor-pointer'
           onClick={ ()=> setNavOPen(false)}/> 
           : <CgMenuRound className='text-[25px] font-bold text-[#112b24] cursor-pointer' 
           onClick={ ()=> setNavOPen(true)}/>
        }
      </div>


      <div className={`md:hidden w-full flex justify-center absolute mt-[4rem]`}>
      <ul className={`flex flex-col md:mr-10 md:mt-2 absolute bg-[#f2f3ef] py-10 px-24 rounded-md transition-all text-center duration-1000 ${navOPen ? 'top-[1rem]' : 'top-[-480px] z-[-50]'}`}>
        {
          navigations.map((navigation, index) => (
            <li key={index} className='font-bold text-[18px] text-[#112b24] hover:text-green-900 transition-all duration-1000 ease-in cursor-pointer py-[12px]'>
              {
                navigation.option === 'Catalogue' ? <LinkScroll 
                
                               activeClass="active"
                               to="catalogue"
                               spy={true}
                               smooth={true}
                               offset={-100}
                               duration={500}
                               onClick={ ()=> setNavOPen(false)}>

                                  {navigation.option}
                                              </LinkScroll> :
                navigation.option === 'Gallery' ?<LinkScroll 
                
                               activeClass="active"
                               to="gallery"
                               spy={true}
                               smooth={true}
                               offset={-100}
                               duration={500}
                               onClick={ ()=> setNavOPen(false)}>

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
   </div>
  )
}

export default Header
