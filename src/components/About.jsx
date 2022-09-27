import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
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
                        <p>Hi, I'm Alex, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>
                            My journey as a software developer started back in 2019 when I graduated from college. Although I left UW-Madison with a degree in Genetics I knew even back then that my true passion was coding. However, with graduation right around the corner and the desire not to take out more loans, I thought it was too late to pursue this dream. Fast forward 3 years, it wasn't until 2022 that I realized that breaking into tech was even remotely possible without a bachelors degree. With this realization I began taking self paced coding classes and then eventually enrolling in a SoftwareBootcamp.
                        </p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default About