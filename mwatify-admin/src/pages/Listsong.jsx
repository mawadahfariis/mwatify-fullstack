import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { url } from '../App';
import { toast } from 'react-toastify';

const Listsong = () => {
    const [data, setdata] = useState([]);

    const fetchsong = async () => {
        try {
            const response = await axios.get(`${url}/api/song/list`);
            console.log(response.data);

            if (response.data.success) {
                setdata(response.data.songs)
            }
        } catch (error) {
            toast.error("error occured")
        }
    }


    const removesong = async (id) => {
        try {
            const response = await axios.post(`${url}/api/song/remove`, { id });

            if (response.data.success) {
                toast.success(response.data.message);
                await fetchsong();
            }

        } catch (error) {
            toast.error("error occured in remove")
        }



    }

    useEffect(() => {
        fetchsong();
    }, [])


    return (
        <div>
            <p>All Songs List</p>
            <br />
            <div>
                <div className='sm:grid grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-pink-900 text-sm text-pink-900 mr-5 bg-pink-300'>
                    <b>Image </b>
                    <b>Name </b>
                    <b>Album </b>
                    <b>Duration </b>
                    <b>Action</b>
                </div>
                {data.map((i, index) => {
                    return (<div key={index} className='grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-pink-900 text-sm mr-5 text-gray-500'>
                        <img className='w-12' src={i.image}></img>
                        <p>{i.name}</p>
                        <p>{i.album}</p>
                        <p>{i.duration}</p>
                        <p onClick={() => removesong(i._id)} className='cursor-pointer'>x</p>

                    </div>)

                })}
            </div>
        </div>
    )
}

export default Listsong