import React, { useContext } from 'react'
import { PlayerCon } from '../context/Playerconext'

function Songsdata({ image, name, desc, id }) {

    const {playwithid}=useContext(PlayerCon);

    return (
        <div onClick={()=>playwithid(id)} className='min-w-[180px] p-2 px-3 cursor-pointer hover:bg-pink-300'>
            <img className='rounded' src={image}></img>
            <p className='font-bold mt-2 mb-1'>{name}</p>
            <p className='text-gray-500 text-sm'>{desc}</p>
        </div>
    )
}

export default Songsdata