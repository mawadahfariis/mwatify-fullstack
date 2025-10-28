import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Dishome from './Dishome'
import Dispalyabum from './Dispalyabum';
import { useContext } from 'react';
import { PlayerCon } from '../context/Playerconext';


function Display() {
    const { albumsdata } = useContext(PlayerCon);

    const displayref = useRef();
    /* useRef hook ==> make refrence to DOM element that dosent change between the rerenders---> it has property .current */
    const location = useLocation();
    /* useLocation hook ==> give you the url of current page in browser  */
    const isAlbum = location.pathname.includes("album");
    /* pathname is obj element in location that say the path in url  */
    const albumid = isAlbum ? location.pathname.split('/').pop() : "";
    /* it return number in string format */
    const bgcolor = isAlbum && albumsdata.length > 0 ? albumsdata.find((x) => (x._id == albumid)).bgColour : "#FE98C2";

    useEffect(() => {
        if (isAlbum) {
            displayref.current.style.background = `linear-gradient(${bgcolor},#FE98C2)`
        }
        else {
            displayref.current.style.background = `linear-gradient(${bgcolor},#fccee8)`
        }
    })

    return (
        <div ref={displayref} className='w-[100%] m-2 px-6 rounded-md bg-pink-200 text-white overflow-auto lg:w-[75%] lg:ml-0 '>
            {/* overflow-auto==>  add scrollbars to an element in the event that its content overflows the bounds of that element" only shows scrollbars if they are necessary,, unlike overflow-scroll that show them forever" --> default is vertical ,, if i wanna it be horizontal we add overflow-x-auto */}
            {albumsdata.length > 0
                ? <Routes>
                    <Route path='/' element={<Dishome />} />
                    <Route path='/album/:idd' element={<Dispalyabum album={albumsdata.find((x) => (x._id == albumid))} />} />
                </Routes>
                : null
            }

        </div>
    )
}

export default Display