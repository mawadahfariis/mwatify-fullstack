import { useContext } from "react"
import Display from "./components/Display"
import Player from "./components/Player"
import { Sidebar } from "./components/Sidebar"
import { PlayerCon } from "./context/Playerconext";

function App() {
  // to use the contect that we create 
  const { audioRef, track, songsData } = useContext(PlayerCon);

  return (
    <div className="h-screen bg-pink-100">
      {
        songsData.length !== 0
          ? <>
            <div className="h-[90%] flex">
              <Sidebar />
              <Display />
            </div>

            <Player />
          </>
          : null
      }

      <audio ref={audioRef} src={track?track.file:""} preload='auto'></audio>
      {/* preload attribute give browser a hint about how much of the audio should be preloaded before playback start --> auto value mean preload the whole audio when it is good idea , which mean depend on user's network/data saving setting */}


    </div>
  )
}

export default App
