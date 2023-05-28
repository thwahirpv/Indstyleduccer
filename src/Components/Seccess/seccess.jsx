import React from 'react'
import { useEffect } from 'react'
import sucIcon from '../../Assets/Success/checked.png'

const Seccess = ({mailSuc, setMailSuc}) => {

    useEffect( ()=>{
        const timer = setTimeout( () => {
            if(mailSuc === true) {
                setMailSuc(false)  
            }
            return clearTimeout(timer)
        },3000);
    },[mailSuc])

  return (
    <div className={`fixed w-full flex justify-center items-center transition-all ease-in duration-500 ${ mailSuc ? 'top-10' : '-top-[15rem]'}`}>
        <div className='md:w-[20%] md:h-[4rem] sm:w-[30%] sm:h-[4rem] xs:w-[40%] xs:h-[3rem] 
        rounded-md bg-[#f2f3ef] flex justify-center items-center space-x-2'>
            <img src={sucIcon} alt="" className='w-7'/>
            <h2 className='font-bold text-xl text-[#112b24]'>Success</h2>
        </div>
      
    </div>
  )
}

export default Seccess
