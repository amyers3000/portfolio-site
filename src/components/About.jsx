import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col p-0 justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-blue-600'>
                        About
                    </p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi, I'm Alex, it was nice meeting you. Glad you stopped by!</p>
                    </div>
                    <div>
                        <p>
                            My journey as a Software Developer started back in 2019 when I graduated college. I left UW-Madison with a degree in Genetics and a greater interest in coding. After graduation, I looked forward to pursuing my passion for software development and searched for opportunities to progress my knowledge. Fast forward 3 years, one bootcamp, and thousands of lines of code later, I’m ready to dive into the industry I love, and establish a presence as a part of something greater.
                        </p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default About