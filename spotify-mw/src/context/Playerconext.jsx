/* use context is to solve the props drilling problem , and this is buy
make storage called 'context' and put the data in it , and then any component want the data take it from the context
*/

import { createContext, useEffect, useRef, useState } from "react";
import axios from 'axios'



// make the context "storage"
// eslint-disable-next-line react-refresh/only-export-components
export const PlayerCon = createContext();

const PlayerConProvider = (props) => {
    // refrence to can use DOM element 
    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const url = 'http://localhost:4000';

    const [songsData, setsongsData] = useState([]);
    const [albumsdata, setalbumsdata] = useState([]);


    // to track which song is now 
    const [track, settrack] = useState("");
    // to track if the song play or pause
    const [playstatus, setplaystatus] = useState(false);
    // to track current song time 
    const [time, settime] = useState({
        currenttime: {
            second: 0,
            minute: 0
        },
        totaltime: {
            second: 0,
            minute: 0
        }
    })

    // to mange time changing and bar changing
    useEffect(() => {
        setTimeout(() => { // to wait 1sec=1000mlsec untill the song start
            audioRef.current.ontimeupdate = () => { //call this when song time change which mean every sec and mlsec
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)) + "%";
                settime({
                    currenttime: {
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60)
                    },
                    totaltime: {
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60)
                    }
                })
            }
        }, 1000)
    }, [audioRef])

    useEffect(() => {
        getsongdata();
        getalbumsdata();
    }, [])

    //functions to play or pause the song 
    const play = () => {
        audioRef.current.play();
        setplaystatus(true);
    }
    const pause = () => {
        audioRef.current.pause();
        setplaystatus(false);
    }

    const playwithid = async (id) => {
        await songsData.map((i) => {
            if (id === i._id) {
                settrack(i);
            }

        })
        await audioRef.current.play();
        setplaystatus(true);
    }

    const previous = async () => {
        songsData.map(async (i, index) => {
            if (track._id === i._id && index > 0) {
                await settrack(songsData[index - 1]);
                await audioRef.current.play();
                setplaystatus(true);
            }
        })
    }
    const next = async () => {
        songsData.map(async (i, index) => {
            if (track._id === i._id && index < songsData.length) {
                await settrack(songsData[index + 1]);
                await audioRef.current.play();
                setplaystatus(true);
            }
        })
    }

    const seeksong = async (e) => {
        // in e data that we see in the console when we print e,s data we see "nativeevent" and inside it we see "offsetx" that show number based on the place we click
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration)
    }

    const getsongdata = async () => {
        try {
            const response = await axios.get(`${url}/api/song/list`);
            setsongsData(response.data.songs);
            settrack(response.data.songs[0]);
        // eslint-disable-next-line no-unused-vars
        } catch (error) { /* empty */ }
    }

    const getalbumsdata = async () => {
        try {
            const response = await axios.get(`${url}/api/album/list`);
            setalbumsdata(response.data.albums);
        // eslint-disable-next-line no-unused-vars
        } catch (error) { /* empty */ }
    }




    // the object that the data will be in it
    const conValue = {
        audioRef,
        seekBar,
        seekBg,
        track, settrack,
        playstatus, setplaystatus,
        time, settime,
        play, pause,
        playwithid,
        next, previous,
        seeksong,
        songsData,
        albumsdata

    }

    return (
        // this provider ant component inside it can user the context data
        <PlayerCon.Provider value={conValue}>
            {/* this means any component inside PlayerConProvider */}
            {props.children}
        </PlayerCon.Provider>
    )

}
export default PlayerConProvider;

// after that ant component in app.jsx be inide the <playerConProvider> can use the data using usecontext hook
