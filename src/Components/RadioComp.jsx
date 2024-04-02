import React from 'react'
import Radio from './Radio'


const RadioComp = ({isExpanded}) => {
    
  return (
    <div className={`flex flex-col gap-3 w-full text-black mt-2 transition-all duration-300 ease-in-out   overflow-hidden ${isExpanded ? 'max-h-[306px]' :  ' max-h-[0px]'}`}>
        <Radio name='field1' text={'Get useful tips, inspiration, and offers via e-communication.'}/>
        <Radio name='field2' text={'Tailor Typeform to my needs based on my activity'} link/>
        <Radio name='field3' text={'Enrich my data with select third parties for more relevant content.'} link/>
        
    </div>
  )
}

export default RadioComp