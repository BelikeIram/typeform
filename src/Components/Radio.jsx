import React from 'react'

const Radio = ({name,text,link}) => {
  return (
    <div className='flex flex-col gap-2 justify-start my-1'>
    <p className='text-[13px] leading-24 text-BlackShades-light'>{text} {link && <a href='#' className='text-gray-600'>See Privacy Policy</a>}</p>
    <div className='pl-1 py-1 flex gap-3 justify-start '>
        <div className='flex gap-7 '>
            <label className='form-control relative text-sm flex gap-2 text-BlackShades-light' id='2'>
                <input type={'radio'} name={name}/>
                Yes
            </label>
            <label className='form-control relative text-sm flex gap-2 text-BlackShades-light' id='2'>
                <input type={'radio'} name={name}/>
                No
            </label>
        </div>
    </div>
   </div>
   
  )
}

export default Radio