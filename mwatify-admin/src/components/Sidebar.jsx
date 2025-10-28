import React from 'react'
import logo from '../assets/spotify_logo.png'
import fulllogo from '../assets/MWatify.png'
import addsong from '../assets/add_song.png'
import songicon from '../assets/song_icon.png'
import addalbum from '../assets/add_album.png'
import albumicon from '../assets/album_icon.png'
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {
    const navi = useNavigate();
    return (
        <div className='bg-pink-200 min-h pl-[4vw] pr-[2vw]' >
            <img src={fulllogo} className='mt-4 w-[max(10vw,100px)] hidden sm:block'></img>
            <img src={logo} className='mt-4 w-[max(5vw,40px)] mr-5 sm:hidden block '></img>
            <div className='flex flex-col gap-5 mt-10'>
                <div onClick={() => navi('/add-song')} className=' cursor-pointer flex items-center gap-2.5 text-pink-950 bg-white border border-pink-950 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_0_#510424] text-sm font-medium p-2'>
                    <img src={addsong} className='w-5' alt="" />
                    <p className='hidden sm:block'>Add Song</p>
                </div>

                <div onClick={() => navi('/list-song')} className='flex items-center gap-2.5 text-pink-950 bg-white border border-pink-950 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_0_#510424] text-sm font-medium p-2'>
                    <img src={songicon} className='w-5' alt="" />
                    <p className='hidden sm:block'>List Song</p>
                </div>

                <div onClick={() => navi('/add-album')} className='flex items-center gap-2.5 text-pink-950 bg-white border border-pink-950 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_0_#510424] text-sm font-medium p-2'>
                    <img src={addalbum} className='w-5' alt="" />
                    <p className='hidden sm:block'>Add Album</p>
                </div>

                <div onClick={() => navi('/list-album')} className='flex items-center gap-2.5 text-pink-950 bg-white border border-pink-950 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_0_#510424] text-sm font-medium p-2'>
                    <img src={albumicon} className='w-5' alt="" />
                    <p className='hidden sm:block'>List Album</p>
                </div>

                {/*instead of usenavigitor hook == we can use NavLink instead of div and use "to=" property to decide the path*/}
            </div>
        </div>

    )
}

export default Sidebar