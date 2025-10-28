import React, { useState } from 'react'
import uploadimg from '../assets/upload_area.png'
import { toast } from 'react-toastify';
import axios from 'axios';
import { url } from '../App';

const Addalbum = () => {
  const [image, setimage] = useState(false);
  const [color, setcolor] = useState("#510424");
  const [name, setname] = useState("");
  const [desc, setdesc] = useState("");
  const [loading, setloading] = useState(false);


  const onsubmitHandlert = async (e) => {
    e.preventDefault();
    setloading(true)
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('desc', desc);
      formData.append('image', image);
      formData.append('bgColour', color);


      const response = await axios.post(`${url}/api/album/add`, formData)

      if (response.data.success) {
        toast.success("Album added added");
        setname("");
        setdesc("");
        setcolor("#510424");
        setimage(false);


      } else {
        toast.error("somthing went wrong")
      }
    } catch (error) {
      toast.error("error occured")
    }
    setloading(false)
  }


  return loading ? (
    <div className='grid place-items-center min-h-[80vh]'>
      <div className='w-16 h-16 place-self-center border border-t-pink-900 rounded-full animate-spin'>
      </div>
    </div>
  ) : (
    <form onSubmit={onsubmitHandlert} className='flex flex-col items-start gap-8 text-pink-950'>
      <div className='flex flex-col gap-4'>
        <p>Upload Image</p>
        <input onChange={(e) => setimage(e.target.files[0])} type='file' id='image' accept='image/*' hidden></input>
        <label htmlFor="image">
          <img className='w-24 cursor-pointer' src={image ? URL.createObjectURL(image) : uploadimg} alt="" />
        </label>
      </div>

      <div className='flex flex-col gap-2.5' >
        <p>Album name</p>
        <input onChange={(e) => setname(e.target.value)} value={name} type="text" className='bg-transparent outline-pink-500 border-2 border-pink-950 p-2.5 w-[max(40vw,250px)] ' placeholder='Type Here' required />
      </div >

      <div className='flex flex-col gap-2.5' >
        <p>Album description</p>
        <input onChange={(e) => setdesc(e.target.value)} value={desc} type="text" className='bg-transparent outline-pink-500 border-2 border-pink-950 p-2.5 w-[max(40vw,250px)] ' placeholder='Type Here' required />
      </div >

      <div className='flex flex-col gap-3'>
        <p>Background color</p>
        <input onChange={(e) => setcolor(e.target.value)} value={color} type="color" />
      </div>

      <button className='text-base bg-pink-900 text-white py-2.5 px-14 cursor-pointer' type='submit'>ADD</button>

    </form>
  )
}

export default Addalbum