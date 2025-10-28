import React from 'react'
import Homelogo from '../assets/home.png'
import Searchicon from '../assets/search.png'
import libraryicon from '../assets/stack.png'
import Arrowitem from '../assets/arrow.png'
import Plusitem from '../assets/plus.png'
import { useNavigate } from 'react-router-dom'

export const Sidebar = () => {
    const navi=useNavigate();
    return (
        <div className=' h-full w-[25%] flex-col text-white p-2 gap-2 lg:flex'>
            {/* h-full ==> set the elemnt h to 100% of its parent container --> only work if the parent has defines height */}
            {/* h-screen ==> sets the element h to 100% of the viewport height "fill the whole browser window" */}
            <div className='bg-pink-300 h-[15%] rounded-md flex flex-col justify-around'>
                <div onClick={()=>navi('/')} className='flex items-center justify-center gap-2 cursor-pointer'>
                    <img className='w-6' src={Homelogo} alt='home'></img>
                    <p className='font-bold'>Home</p>
                </div>
                <div className='flex items-center gap-2 justify-center cursor-pointer'>
                    <img className='w-6' src={Searchicon} alt='search'></img>
                    <p className='font-bold'>Search</p>
                </div>
            </div>
            <div className='bg-pink-300 h-[85%] rounded-md mt-1'>
                <div className='p-4 lg:flex items-center justify-between '>
                    <div className='flex items-center justify-center gap-3'>
                        <img className='w-6' src={libraryicon} alt="library"></img>
                        <p className='font-semibold'>Your Library</p>
                    </div>
                    <div className='flex items-center justify-center gap-3 mt-1'>
                        <img className='w-4' src={Arrowitem} alt=""></img>
                        <img className='w-4' src={Plusitem} alt=""></img>
                    </div>
                </div>
                <div className='p-4 bg-pink-200 m-2 rounded-md font-semibold flex flex-col gap-1 '>
                    <h1 className='text-[12px] lg:text-[17px]'> Create your first playlist</h1>
                    <p className='font-light text-[12px] lg:text-[15px]'>it's easy we can help you</p>
                    <button className='lg:px-4 lg:py-1.5 px-2 py-0.5 text-[10px] bg-white lg:text-[15px] text-pink-900 rounded-full mt-3 '>Create Playlist</button>
                </div>
                <div className='p-4 bg-pink-200 m-2 rounded-md font-semibold flex flex-col gap-1 mt-4'>
                    <h1 className='text-[12px] lg:text-[17px]' > Let's find some podcasts to follow</h1>
                    <p className='font-light text-[12px] lg:text-[15px]'>to be updated in new eposides</p>
                    <button className='lg:px-4 lg:py-1.5 px-2 py-0.5 text-[10px] bg-white lg:text-[15px] text-pink-900 rounded-full mt-3'>Browse Podcasts</button>
                </div>

            </div>

        </div>
    )
}
