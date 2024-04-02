import React from 'react'
import { FaEye } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { MdError } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa";
import './style.css'

import useForm from './useForm';
import RadioComp from '../../Components/RadioComp';

const SignupForm = () => {
    const [isChecked, setIsChecked] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)
    const [isShownPassword, setIsShownPassword] = useState(false)
    const [checkboxValid, setCheckBoxValid] = useState(true)
  
    const emailRegex = '/^[^\s@]+@[^\s@]+\.[^\s@]+$/';
    let Passwordregex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

    const  {input: email , valid:emailValid, setIsvalid:setEmailValid, inputChange:emailChange} = useForm()
    const  {input: password ,valid:passValid, setIsvalid:setPasswordValid, inputChange:passChange} = useForm()

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!isChecked){
           setCheckBoxValid(false)
        }
     
        if((email.length < 1 || !emailValid) && (password.length < 1 || !passValid) ){
            setEmailValid(false)
            setPasswordValid(false)
            return;
        }else if( password.length < 1 || !passValid ){
            setPasswordValid(false)
            return
        }else if(email.length < 1 || !emailValid){
            setEmailValid(false)
        }

    }


  return (
    <div className='flex justify-center '>
       <form className='flex flex-col items-center justify-start gap-4 w-auto' onSubmit={handleSubmit}>
           <div className='mb-4 flex flex-col items-center justify-start gap-4'>
                <div className='field w-[290px] text-black'>
                    <input type={'email'} placeholder='Email' className='w-full h-10 border-[1px]  border-gray-300 rounded-sm pl-2 font-light' name='email' value={email} onChange={(e)=>emailChange(e, emailRegex)}/>
                    {!emailValid && email.length > 1 &&   <div className='flex gap-2  text-red-700 mt-2 items-start text-sm'>
                        <span><MdError className='text-[17px]' /></span> 
                    <p>Enter a valid email address</p>
                   </div>}
                   {!emailValid && email.length < 1 &&   <div className='flex gap-2  text-red-700 mt-2 items-start text-sm'>
                       <span><MdError className='text-[17px]' /></span> 
                   <p>This field cannot be left blank</p>
                  </div>}
                  
                </div>
                <div className='field  w-[290px] relative text-black'>
                    <input type={isShownPassword ? 'text' : 'password'} placeholder='Password' className=' w-full h-10 border-[1px] border-gray-300 rounded-sm pl-2 font-light' name='password' value={password} onChange={(e)=>passChange(e, Passwordregex)} />
                    <span className='absolute right-3 top-3 cursor-pointer' onClick={()=>setIsShownPassword(!isShownPassword)}> {isShownPassword ? <FaEyeSlash className='text-GrayShades-light'/> : <FaEye className='text-GrayShades-light'/>} </span>
                    {!passValid && password.length > 1 && <div className='flex gap-2   text-red-700 mt-2 items-start text-sm'>
                       <span><MdError className='text-[17px]' /></span> 
                    <p>Use 8 or more characters with a mix of letters, numbers and symbols</p>
                   </div>}
                   {!passValid && password.length < 1 && <div className='flex gap-2   text-red-700 mt-2 items-start text-sm'>
                        <span><MdError className='text-[17px]' /></span> 
                    <p>This field cannot be left blank</p>
                   </div>}
                </div>
           </div>
           <div className='flex gap-4 text-GrayShades-dark text-[12px] justify-center w-[290px]'>
               <div className='flex justify-center items-start'>
                    <div className="flex items-center mb-4 relative">

                            <input id="default-checkbox" type="checkbox" value="" className="w-5 h-5  text-GrayShades-dark  z-20 rounded focus:ring-GrayShades-medium   checked:opacity-0 opacity-1 dark:focus:ring-GrayShades-medium dark:ring-GrayShades-medium focus:ring-1  dark:bg-gray-700 dark:border-gray-600" 
                            onChange={(e)=>{
                                setCheckBoxValid(true)
                                if(e.target.checked){
                                    setIsChecked(true)
                                }else{
                                    setIsChecked(false)
                                }
                            }}/>
                            <div className={`h-5 w-5 transition-all border-[1px] rounded bg-GrayShades-dark flex justify-center items-center absolute top-0 right-0 left-0 bottom-0 ${isChecked ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                                <FaCheck className='text-white'/>
                            </div>
                    </div>
               </div>
               <div className='leading-5'>
                  <p>I agree to Typeform’s <a href='#' className='underline'>Terms of Service</a> , <a href='#' className='underline'>Privacy Policy</a> and <a href='#' className='underline'>Data Processing Agreement</a>.</p>
               </div>

           </div>
                {!checkboxValid && <div className='flex gap-2 text-red-700 mt-2 items-start text-sm w-[260px]'>
                    <MdError className='text-3xl' />
                    <p>Please accept the terms and conditions to finish the signup</p>
                </div>} 
           <div className='flex flex-col items-center flex-start w-[260px]  p-4'>
               <div className={`flex justify-between text-BlackShades-light text-[14px] items-center cursor-pointer w-full`} onClick={()=>setIsExpanded(!isExpanded)}>
                   <span>See options</span>
                   <span>{isExpanded ? <FaAngleUp /> : <FaAngleDown /> }</span>
               </div>
               <RadioComp isExpanded={isExpanded}/>
           </div>
           <input type={'submit'} value='Create my free account' className='bg-BlackShades-light text-white py-[9px]  px-8 rounded-[5px] text-sm'/>
       </form>
    </div>
  )
}

export default SignupForm