import React, { useContext } from 'react'
import shuffleicon from '../assets/shuffle.png'
import previcon from '../assets/prev.png'
import playicon from '../assets/play.png'
import nexicon from '../assets/next.png'
import loopicon from '../assets/loop.png'
import playsicon from '../assets/plays.png'
import pauseicon from '../assets/pause.png'
import micicon from '../assets/mic.png'
import queueicon from '../assets/queue.png'
import speakericon from '../assets/speaker.png'
import volumeicon from '../assets/volume.png'
import miniplayericon from '../assets/mini-player.png'
import zoomicon from '../assets/zoom.png'
import { PlayerCon } from '../context/Playerconext'


function Player() {
    const { seekBar, seekBg, playstatus, play, pause, track, time, next, previous, seeksong } = useContext(PlayerCon);

    return track ? (
        <div className='h-[10%] bg-pink-400 flex justify-between items-center text-white px-4'>
            <div className='hidden lg:flex items-center gap-4'>
                <img className='w-12' src={track.image}></img>
                <div>
                    <p>{track.name}</p>
                    <p>{track.desc.slice(0, 14)}</p>
                </div>
            </div>
            <div className='flex flex-col items-center gap-1 m-auto'>
                <div className='flex gap-4 '>
                    <img className='w-4 cursor-pointer' src={shuffleicon}></img>
                    <img onClick={previous} className='w-4 cursor-pointer' src={previcon}></img>
                    {playstatus ? <img onClick={pause} className='w-4 cursor-pointer' src={pauseicon}></img> : <img onClick={play} className='w-4 cursor-pointer' src={playicon}></img>}
                    <img onClick={next} className='w-4 cursor-pointer' src={nexicon}></img>
                    <img className='w-4 cursor-pointer' src={loopicon}></img>
                </div>
                <div className='flex items-center gap-5'>
                    <p>{time.currenttime.minute}:{time.currenttime.second}</p>
                    <div ref={seekBg} onClick={seeksong} className='w-[60vw] max-w-[500px] bg-gray-100 rounded-full cursor-pointer'>
                        <hr ref={seekBar} className='h-1 border-none w-0 bg-pink-800 rounded-full' />
                    </div>
                    <p>{time.totaltime.minute}:{time.totaltime.second}</p>
                </div>
            </div>
            <div className='hidden lg:flex items-center gap-2 opacity-75'>
                <img className='w-4' src={playsicon}></img>
                <img className='w-4' src={micicon}></img>
                <img className='w-4' src={queueicon}></img>
                <img className='w-4' src={speakericon}></img>
                <img className='w-4' src={volumeicon}></img>
                <div className='w-20 bg-slate-50 h-1 rounded-md'>
                </div>
                <img className='w-4' src={miniplayericon}></img>
                <img className='w-4' src={zoomicon}></img>
            </div>

        </div>
    ) : null
}

export default Player