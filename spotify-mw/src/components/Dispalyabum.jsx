import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import logo from '../assets/spotify_logo.png'
import clock from '../assets/clock_icon.png'
import { PlayerCon } from '../context/Playerconext';
import { useState } from 'react'
import { useEffect } from 'react'


function Dispalyabum({album}) {
    const { idd } = useParams();
    const [albumData, setalbumData] = useState("");
    const { playwithid, albumsdata, songsData } = useContext(PlayerCon);

    useEffect(() => {
        albumsdata.map((i) => {
            if (i._id === idd) {
                setalbumData(i);
            }
        })
        
    }, [])

    return albumData ? (
        <>
            <Navbar />
            <div className='mt-8 flex gap-5 flex-col md:flex-row md:items-end'>
                <img className=' w-65 rounded-md' src={albumData.image}></img>
                <div className='flex flex-col '>
                    <p className='font-medium'>Playlist</p>
                    <h2 className='text-4xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
                    <h4>{albumData.desc}</h4>
                    <p className='mt-1 '>
                        <img className='inline-block w-8' src={logo}></img>
                        {/* inline-block ==> inline to be in same line with the rest of content , but still can take block property like W and H and M */}
                        <b>MWatify</b>. 1,455,987 likes. <b>50 songs, </b>about 2 hr 30 min
                    </p>
                </div>
            </div>

            <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-gray-400'>
                <p><b className='mr-4'>#</b>Title</p>
                <p>Album</p>
                <p className='hidden sm:block'>Date Added</p>
                <img className='m-auto mt-1 w-4' src={clock} alt="" />
            </div>
            <hr />
            {songsData.filter((i) => i.album === album.name).map((i, index) => (
                <div onClick={() => playwithid(i._id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-gray-400 cursor-pointer hover:bg-pink-100'>
                    <p className='text-pink-900'>
                        <b className='font-extralight mr-4 text-gray-500'>{index + 1}</b>
                        <img className='inline-block w-10 mr-5' src={i.image}></img>
                        {i.name}
                    </p>
                    <p className='text-[15px]'>{albumData.name}</p>
                    <p className='text-[15px] hidden sm:block'>5 days ago</p>
                    <p className='text-[15px] text-center ml-5'>{i.duration}</p>
                </div>
            ))}
        </>
    ) : null
}

export default Dispalyabum