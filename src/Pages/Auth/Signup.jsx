import React from 'react'
import { FaAngleDown } from "react-icons/fa6";
import SignupForm from './SignupForm';


const Signup = () => {
  return (
    <div className='lg:w-[62%] w-full bg-white h-full lg:rounded-tl-2xl lg:rounded-bl-2xl px-6 md:h-[100vh] md:overflow-scroll'>
       <nav className='flex justify-between items-center h-[52px] w-full '>
           <div className='flex gap-2 items-center text-black text-GrayShades-medium text-[13px]'>
              <span>
              <svg height="17" viewBox="0 0 20 20" width="17" xmlns="http://www.w3.org/2000/svg"><path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zM9 17.9C5.1 17.4 2 14 2 10c0-.6.1-1.2.2-1.8L7 13v1c0 1.1.9 2 2 2v1.9zm6.9-2.5c-.3-.8-1-1.4-1.9-1.4h-1v-3c0-.6-.4-1-1-1H6V8h2c.6 0 1-.4 1-1V5h2c1.1 0 2-.9 2-2v-.4c2.9 1.2 5 4.1 5 7.4 0 2.1-.8 4-2.1 5.4z" fill="#5E5E5E" fillRule="evenodd"></path></svg>
              </span>
              <span className='hover:text-gray-400 text-GrayShades-medium cursor-pointer'>English</span>
              <span className='ml-[-5px]'><FaAngleDown className='text-[0.6rem]'/></span>
           </div>
           <div className='flex sm:gap-3 gap-2 items-center text-GrayShades-dark text-[12px]'>
               <span>Already have an account? </span>
               <button className='border-[1px] border-GrayShades-dark px-3 py-[2px] rounded-md'>
                  <a href='#'>Log in</a>
               </button>
           </div>
       </nav>
       <div className='flex flex-col items-center justify-center gap-4 flex-1 py-4 pb-6' style={{minHeight:'calc(100vh - 52px)'}}>
           <header className='text-GrayShades-dark flex gap-3 items-center w-full justify-center'>
              <a href='#' className='no-underline text-GrayShades-dark flex gap-3 text-2xl items-center font-bold'>
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="22" fill="none"><path fill="currentColor" fillRule="evenodd" d="M0 5.34C0 1.82 1.39 0 3.72 0c2.34 0 3.73 1.82 3.73 5.34V16c0 3.52-1.4 5.34-3.73 5.34S0 19.52 0 16V5.34ZM25.08 0h-7.7c-6.9 0-7.44 2.98-7.44 6.96l-.01 7.42c0 4.14.52 6.96 7.48 6.96h7.67c6.92 0 7.43-2.97 7.43-6.94V6.97c0-3.99-.53-6.97-7.43-6.97Z" clipRule="evenodd"></path></svg>
                <h2>Typeform</h2>
              </a>
              
           </header>
           <div className='text-[22px] text-GrayShades-medium text-center leading-9'>
              <p className=''>Get better data with conversational forms, surveys, <br/> quizzes & more. </p>
           </div>
           <SignupForm/>
       </div>
    </div>
  )
}

export default Signup