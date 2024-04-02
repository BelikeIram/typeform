import Sample from '../../assets/sample.webp'
import Signup from './Signup';


const RootAuth = ()=>{
   return(
       <div className="bg-GrayShades-dark  w-full flex items-center relative">
          <section className='relative w-6/12 h-[100vh] hidden lg:flex'>
            <div className="flex flex-column items-center justify-center w-full mt-4 ">
                <div className="text-center  text-white">
                    <h1 className='text-[36px] '>
                        Sign up
                        <br/>
                        and come on in
                    </h1>
                    <div className='my-3 w-[380px] mt-8'>
                        <img src={Sample} alt='img' className='w-full'/> 
                    </div>
                    <div className='text-center absolute bottom-10 w-6/12 text-center'>
                        <span className='text-sm'>© Typeform</span> 
                    </div>
                </div>
            </div>
          </section> 
          <Signup/>
       </div>
   )
}

export default RootAuth;