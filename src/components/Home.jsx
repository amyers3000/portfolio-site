import React, {useState} from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div name='home' className=' w-full h-screen bg-[#0a192f]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-blue-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Alex Myers</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Junior Software Developer</h2>
            <p className='text-[#8892b0] py-max-w-[700px]'>I'm a software devoloper with experience across multiple 
                developmental stacks, constantly looking to explore other frameworks 
                and technologies that catch my eye. I'm currenly focused on 
                transitioning into the industry, and finding my first junior fullstack or 
                backend developer role. </p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:border-blue-600 '>View Work
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3'/>
                    </span>
                </button>
            </div>
        </div>
        
    </div>
  )
}

export default Home