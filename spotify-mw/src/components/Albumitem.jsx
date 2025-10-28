import React from 'react'
import { useNavigate } from 'react-router-dom'


function Albumitem({ image, name, desc, id }) {
    const navigate = useNavigate()
    return (
        <div onClick={()=>navigate(`/album/${id}`)} className='min-w-[180px] p-2 px-3 rounded-md cursor-pointer hover:bg-pink-300'>
            <img className='rounded-md' src={image}></img>
            <p className='font-bold mt-2 mb-1'>{name}</p>
            <p className='text-gray-500 text-sm'>{desc}</p>
        </div>
    )
}

export default Albumitem