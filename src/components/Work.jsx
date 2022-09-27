import React from 'react'
import Minotaur from '../assets/Minotaur.png'
import Rotten from '../assets/Rotten-Flix.png'
import Rest from '../assets/Rest.png'

const Work = () => {
  return (
    <div name='work' className= ' w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-blue-600'>Work</p>
                <p className='py-6'>// Check out some of my most recent work</p>
            </div>
            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* Grid Item */}
                <div style={{backgroundImage: `url(${Minotaur})`}}
                 className='shadow-lg shadow-[#040c15] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Vanilla JS: Minotaur
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://amyers3000.github.io/Browser-Game-Project'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 fond-bold text-lg'>Demo</button>
                           </a>
                           <a href='https://github.com/amyers3000/Browser-Game-Project'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 fond-bold text-lg'>Code</button>
                           </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Rotten})`}}
                 className='shadow-lg shadow-[#040c15] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-80'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Mern Stack: Rotten-Flix
                        </span>
                        <div className='pt-8 text-center'>
                           <a href='https://rottenflix.netlify.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 fond-bold text-lg'>Demo</button>
                           </a>
                           <a href='https://github.com/amyers3000/Rotten-Flix-Server/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 fond-bold text-lg'>Code</button>
                           </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Rest})`}}
                 className='shadow-lg shadow-[#040c15] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-80'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Mern Stack: Rest-Rant
                        </span>
                        <div className='pt-8 text-center'>
                           <a href='https://rest-rant-review-page.herokuapp.com/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 fond-bold text-lg'>Demo</button>
                           </a>
                           <a href='https://github.com/amyers3000/project-REST-rant'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 fond-bold text-lg'>Code</button>
                           </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work

