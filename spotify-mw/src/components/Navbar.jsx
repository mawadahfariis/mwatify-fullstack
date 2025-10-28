import React from 'react'
import arrleft from '../assets/left_arrow.png'
import arrright from '../assets/right_arrow.png'
import { useNavigate } from 'react-router-dom'
function Navbar() {
    const navi=useNavigate();
    return (
        <>
            <div className='w-full flex justify-between items-center font-semibold'>
                <div className='flex items-center gap-2 mt-2'>
                    <img onClick={()=>navi(-1)} className='w-8 bg-pink-900 p-2 rounded-2xl cursor-pointer ' src={arrleft} alt="" />
                    <img onClick={()=>navi(1)} className='w-8 bg-pink-900 p-2 rounded-2xl cursor-pointer ' src={arrright} alt="" />
                </div>
                <div className='flex items-center gap-4 mt-2'>
                    <p className='bg-pink-900 text-white rounded-full text-[15px] px-4 py-2  hidden md:block cursor-pointer'>Explore premium</p>
                    <p className='bg-pink-500 text-white py-2 px-4 rounded-full text-[15px] hidden md:block cursor-pointer '>Install App</p>
                    <p className='bg-gray-500 text-white w-7 h-7 rounded-full flex items-center justify-around '>M</p>
                </div>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <p className='bg-white text-pink-900 px-4 py-1 rounded-2xl cursor-pointer '>All</p>
                <p className='bg-pink-900 text-white px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
                <p className='bg-pink-900 text-white  px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p>

            </div>
        </>
    )
}

export default Navbar