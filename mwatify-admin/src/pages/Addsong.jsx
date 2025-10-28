import React, { useEffect, useState } from 'react'
import uploadsong from '../assets/upload_song.png'
import uploadimg from '../assets/upload_area.png'
import uploaded from '../assets/upload_added.png'
import axios from 'axios'
import { url } from '../App'
import { toast } from 'react-toastify'

const Addsong = () => {
    const [image, setimage] = useState(false);
    const [song, setsong] = useState(false);
    const [name, setname] = useState("");
    const [description, setdescription] = useState("");
    const [album, setalbum] = useState("none");
    const [loading, setloading] = useState(false);
    const [albumData, setalbumData] = useState([]);

    const onsubmitHandlert = async (e) => {
        e.preventDefault(); // to not reload the page when submit it
        setloading(true)
        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('desc', description);
            formData.append('image', image);
            formData.append('audio', song);
            formData.append('album', album);

            const response = await axios.post(`${url}/api/song/add`, formData)

            if (response.data.success) {
                toast.success("song added");
                setname("");
                setdescription("");
                setalbum("none");
                setimage(false);
                setsong(false);

            } else {
                toast.error("somthing went wrong")
            }
        } catch (error) {
            toast.error("error occured")
        }
        setloading(false)
    }

    const loadalbumdata = async () => {
        try {
            const response = await axios.get(`${url}/api/album/list`);
            if (response.data.success) {
                setalbumData(response.data.albums);
            } else {
                toast.error("unable to load albums data");
            }
        } catch (error) {
            toast.error("error occured")
        }
    }

    useEffect(() => {
        loadalbumdata();
    }, [])

    return loading ? (
        <div className='grid place-items-center min-h-[80vh]'>
            <div className='w-16 h-16 place-self-center border border-t-pink-900 rounded-full animate-spin'>
            </div>
        </div>
    ) : (
        <form onSubmit={onsubmitHandlert} className='flex flex-col items-start gap-8 text-pink-950'>
            <div className='flex gap-8'>
                <div className='flex flex-col gap-4'>
                    <p>Upload Song</p>
                    <input onChange={(e) => setsong(e.target.files[0])} type="file" id='song' accept='audio/*' hidden />
                    <label htmlFor="song">
                        <img src={song ? uploaded : uploadsong} alt="" className='w-24 cursor-pointer' />
                    </label>
                </div>
                <div className='flex flex-col gap-4'>
                    <p>Upload Image</p>
                    <input onChange={(e) => setimage(e.target.files[0])} type="file" id='image' accept='image/*' hidden />
                    <label htmlFor="image">
                        <img src={image ? URL.createObjectURL(image) : uploadimg} alt="" className='w-24 cursor-pointer' />
                    </label>
                </div>
            </div>

            <div className='flex flex-col gap-2.5'>
                <p>Song name</p>
                <input onChange={(e) => setname(e.target.value)} value={name} type="text" className='bg-transparent outline-pink-500 border-2 border-pink-950 p-2.5 w-[max(40vw,250px)] ' placeholder='Type Here' required />
            </div>

            <div className='flex flex-col gap-2.5'>
                <p>Song description</p>
                <input onChange={(e) => setdescription(e.target.value)} value={description} type="text" className='bg-transparent outline-pink-500 border-2 border-pink-950 p-2.5 w-[max(40vw,250px)] ' placeholder='Type Here' required />
            </div>

            <div className='flex flex-col gap-2.5'>
                <p>Album</p>
                <select onChange={(e) => setalbum(e.target.value)} defaultValue={album} className='bg-transparent outline-pink-500 border-2 border-pink-950 p-2.5 w-[150px]' >
                    <option value="none">None</option>
                    {albumData.map((i,index)=>(<option key={index} value={i.name}>{i.name}</option>))}
                </select>
            </div>

            <button type='submit' className='text-base bg-pink-900 text-white py-2.5 px-14 cursor-pointer'>ADD</button>

        </form>
    )
}

export default Addsong