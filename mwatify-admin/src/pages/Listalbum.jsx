import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { url } from '../App';

const Listalbum = () => {
  const [data, setdata] = useState([]);

  const fetchalbum = async () => {
    try {
      const response = await axios.get(`${url}/api/album/list`);

      if (response.data.success) {
        setdata(response.data.albums);
      }
    } catch (error) {
      toast.error("error occured")
    }
  }

  const removealbum = async (id) => {
    try {
      const response = await axios.post(`${url}/api/album/remove`, { id });
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchalbum();
      }

    } catch (error) {
      toast.error("error occured")

    }
  }

  useEffect(() => {
    fetchalbum();
  }, [])

  return (
    <div>
      <p>All Album List</p>
      <br />
      <div>
        <div className='sm:grid grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-pink-900 text-sm text-pink-900 mr-5 bg-pink-300'>
          <b>Image </b>
          <b>Name </b>
          <b>Description </b>
          <b>Album-color </b>
          <b>Action</b>
        </div>
        {data.map((i, index) => (
          <div key={index} className='grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-pink-900 text-sm mr-5 text-gray-500'>
            <img src={i.image} className="w-12" alt="" />
            <p>{i.name}</p>
            <p>{i.desc}</p>
            <input type="color" value={i.bgColour} />
            <p onClick={()=>removealbum(i._id)} className='cursor-pointer'>X</p>
          </div>

        ))}
      </div>
    </div>
  )
}

export default Listalbum