import React from 'react'
import Navbar from './Navbar'
import Albumitem from './Albumitem'
import Songsdata from './Songsdata'
import { useContext } from 'react'
import { PlayerCon } from '../context/Playerconext'

function Dishome() {

  const {songsData,albumsdata}=useContext(PlayerCon);
  return (
    <>
      <Navbar />
      <div className='mb-4'>
        <h1 className='mt-2 font-bold text-xl'>Feature Charts</h1>
        <div className='flex justify-between items-center overflow-auto'>
          {albumsdata.map((i, index) => (<Albumitem key={index} name={i.name} desc={i.desc} id={i._id} image={i.image} />))}
        </div>
      </div>
      <div className='mb-4'>
        <h1 className='mt-2 font-bold text-xl'>Today's biggest hits</h1>
        <div className='flex justify-between items-center overflow-auto'>
          {songsData.map((i,index)=>(<Songsdata key={index} name={i.name} desc={i.desc} id={i._id} image={i.image}/>))}
        </div>
      </div>
    </>
  )
}

export default Dishome