import React from 'react'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import Success from '../Seccess/seccess'
import cImg_1 from '../../Assets/curtain-imges/curtian-1.jpg'
import cImg_2 from '../../Assets/curtain-imges/curtian-2.jpg'
import cImg_3 from '../../Assets/curtain-imges/curtian-3.jpg'
import cImg_4 from '../../Assets/curtain-imges/curtian-4.jpg'
import cImg_6 from '../../Assets/curtain-imges/curtian-6.jpg'
import cImg_7 from '../../Assets/curtain-imges/curtian-7.jpg'
import cImg_8 from '../../Assets/curtain-imges/curtian-8.jpg'
import { Link } from 'react-router-dom'
import { SiHomebridge } from 'react-icons/si'
import { GrMail } from 'react-icons/gr'
import { AiFillPhone } from 'react-icons/ai'
import Footer from '../Footer/footer'



const Contact = () => {

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
         if(currentIndex === 6){
             const updatedIndex = currentIndex - 6
             setCurrentIndex(updatedIndex)
         }
         else{
             const updatedIndex = currentIndex + 1
             setCurrentIndex(updatedIndex)
         }
         return clearTimeout(timer)
     },3000)  
 })



 const form = useRef();

 const sendEmail = (e) => {
   e.preventDefault();

   emailjs.sendForm('service_1lctacn', 'template_fiyhj0m', form.current, 'mSLSQoeEVrx9wjIa1')
     .then((result) => {
         console.log(result.text);
         setMailSuc(true)
         e.target.reset()


     }, (error) => {
         console.log(error.text);
     });
 };


  const [currentIndex, setCurrentIndex] = useState(0)
  const [mailSuc, setMailSuc] = useState(false)

  const slides = [
    {link: cImg_1},
    {link: cImg_2},
    {link: cImg_3},
    {link: cImg_4},
    {link: cImg_6},
    {link: cImg_7},
    {link: cImg_8}
]
  return (
    <div className='w-full flex flex-col justify-center space-y-20'>
      <div style={{backgroundImage: `url(${slides[currentIndex].link})`, backgroundPosition: 'center'}} 
      className='w-[100%] md:h-[80vh] h-[75vh] bg-cover object-cover bg-no-repeat relative right-0 transition-all ease-in duration-500'>
        <div className='h-full w-full absolute top-0 right-0 bg-[#112b24aa] flex flex-col justify-center items-center space-y-1 text-center'>
          <h1 className='md:text-5xl text-3xl font-bold text-[#f2f3ef]'
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-easing="ease-in"
          data-aos-delay="100">Contact Us</h1>
          <p className='md:text-xl text-sm font-bold text-[#f2f3ef]'
          data-aos="fade-left"
          data-aos-duration="600"
          data-aos-easing="ease-in"
          data-aos-delay="100">We look forward to being of service to you !</p>
        </div>

        <Link className='absolute top-4 left-4 md:text-4xl text-2xl font-bold text-[#112b24]'
        to="/">
          <SiHomebridge className='text-[#f2f3ef]'/>
        </Link>
      </div>


        <div className='w-full flex flex-col justify-center items-center space-y-10 relative'>
          <h1 className='text-3xl text-[#f2f3ef] font-bold'>Get in Touch</h1>
          <div className='w-[100%] flex justify-center items-center'>
            <form  ref={form} className='space-y-5' onSubmit={sendEmail}>
              <input type="text" name="from_name" placeholder='Your Name' className='block w-[20rem] md:w-[30rem] px-2 rounded-md py-[.4rem] 
              outline-none text-black font-[600] text-md'/>
              
              <input type="number" name='user_mob' placeholder='Mobile' className='block md:inline w-[20rem] md:w-[14.5rem] px-2 rounded-md py-[.4rem]
              [&::-webkit-inner-spin-button]:appearance-none outline-none text-black font-[600] text-md'/>
              <input type="email" name="user_email" placeholder='example@gmail.com' className='block md:inline w-[20rem] md:w-[14.5rem] px-2 rounded-md py-[.4rem] md:ml-[1rem]
              outline-none text-black font-[600] text-md'/>

              <textarea name="message" id="message" cols="30" rows="7" placeholder='Message.....' 
              className='block w-[20rem] md:w-[30rem] rounded-md px-2 py-[.4rem] outline-none text-black font-[600] text-md'></textarea>
              <input type="submit" value="Send"  className='w-full py-2 bg-[#f2f3ef] rounded-md font-[800] text-lg text-[#112b24] cursor-pointer'/>
            </form>

            {
              setMailSuc ? <Success mailSuc={mailSuc} setMailSuc={setMailSuc}/> : null
            }

          </div>
        </div>


        <div className='w-full md:flex sm:flex xs:flex xs:flex-col xs:space-y-14 xs:justify-center  
        sm:space-y-0 sm:flex-row sm:justify-around
        md:flex-row  md:spcae-y-0 md:justify-around 
        items-center pt-12'>


          {/* ===========Email=========== */}
          <div className='flex flex-col justify-center items-center space-y-5'>
            <div className='bg-[#072a1f] py-4 px-5 rounded-md shadow-2xl shadow-[#000000]'>
            <GrMail size={35} className='text-white'/>
            </div>
            
            <div className='flex flex-col justify-center items-center text-center space-y-1'>
            <h1 className='font-bold text-2xl text-[#f2f3ef] mb-1'>Email Us :</h1>
            <p className='text-[#f2f3ef] text-md'>Email us for general queries, including your<br/> selections and opinions</p>
            <a href='https://mail.google.com/mail/u/0/#inbox?compose=gzwVKfZpmQKrbxQTPZPtHkTNzXrVPtbcBBTMfHQLsSTGhCZPKRZNLPxcXsZxvrL' className='text-blue-700 font-bold text-md '>rahoofm@gmail.com</a>
            </div>
          </div>
          {/* ==============Email============ */}

          {/* =========Mobile============== */}
          <div className='flex flex-col justify-center items-center space-y-5'>
           <div className='bg-[#072a1f] py-4 px-5 rounded-md shadow-2xl shadow-[#000000]'>
              <AiFillPhone size={35} className='text-white'/> 
            </div>

            <div className='flex flex-col justify-center items-center text-center space-y-1'>
            <h1 className='font-bold text-2xl text-[#f2f3ef] mb-1'>Call Us :</h1>
            <p className='text-[#f2f3ef] text-md'>Call us to speak to a member of our team.  <br/>  We are always happy to help.</p>
            <a href='tel:+918086533291' className='text-blue-700 font-bold text-md '>+91-8086533291</a>
            </div>
          </div>
          {/* ==========Mobile=========== */}
        </div>

        <Footer/>

    </div>
  )
}

export default Contact
