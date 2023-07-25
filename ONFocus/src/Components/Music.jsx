import {
    useEffect,
    useRef,
    useState,
  } from "react";
  
  import { Slider } from "@mantine/core";
  
  import TrackOne from "../assets/Track 1.mp3";
  import TrackTwo from "../assets/Track 2.mp3";
  import TrackThree from "../assets/Track 3.mp3";
  import Prevbtn from "../assets/Prevbtn.png";
  import Playbtn from "../assets/Playbtn.png";
  import Nextbtn from "../assets/Nextbtn.png";
  import Pausebtn from "../assets/Pausebtn.png";
  const secToTimeStamp = (timeImSec) => {
    if (!timeImSec) return "0:00";
  
    const totalSeconds = Math.floor(timeImSec);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
  
    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");
  
    if (!hours) return `${formattedMinutes || "-"}:${formattedSeconds || "-"}`;
    return `${formattedHours || "-"}:${formattedMinutes || "-"}:${
      formattedSeconds || "-"
    }`;
  };
  
  function getTrack(trackNo) {
    switch (trackNo) {
      case 1:
        return TrackOne;
      case 2:
        return TrackTwo;
      case 3:
        return TrackThree;
      default:
        return TrackOne;
    }
  }
  
  function App() {
    const audioRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSec, setCurrentSec] = useState(0);
    const [progress, setProgress] = useState(0);
    const [trackNumber, setTrackNumber] = useState(1);
  
    const handleUpdate = () => {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      const progressPercent = (currentTime / duration) * 100;
      setCurrentSec(currentTime);
      setProgress(progressPercent);
    };
  
    useEffect(() => {
      audioRef.current.addEventListener("timeupdate", handleUpdate);
  
      return () => {
        audioRef.current.removeEventListener("timeupdate", handleUpdate);
      };
    }, []);
  
    async function handlePlay() {
      await audioRef.current.play();
    }
  
    function handlePause() {
      audioRef.current.pause();
    }
  
    useEffect(() => {
      if (isPlaying) {
        handlePlay()
          .then(() => console.log("play"))
          .catch(() => console.log("error"));
      } else {
        handlePause();
      }
    }, [isPlaying]);
  
    function togglePlayPause() {
      setIsPlaying((prev) => !prev);
    }
    function getTrackName(trackNo) {
      const trackPath = getTrack(trackNo);
      const trackNameWithExtension = trackPath.split("/").pop();
      const trackName = trackNameWithExtension.replace(".mp3", "");
      return trackName;
    }
  
    return (
      <>
        <div className=" bg-[rgba(33,37,41,0.05)] shade1 rounded-2xl border border-black">
          <div className="p-4 max-sm:pt-9">
            <div className="flex justify-center gap-5">
              <button
                onClick={() => {
                  setTrackNumber((prev) => {
                    setIsPlaying(false);
                    prev = prev - 1;
                    if (prev > 3) return 1;
                    if (prev < 1) return 3;
                    return prev;
                  });
                }}
              >
                <img src={Prevbtn} className="h-11" alt="" />
              </button>
              <button onClick={togglePlayPause}>
                <img
                  src={isPlaying ? Pausebtn : Playbtn}
                  className={isPlaying ? "h-12" : "h-12"}
                />
              </button>
              <button
                onClick={() => {
                  setTrackNumber((prev) => {
                    setIsPlaying(false);
                    prev = prev + 1;
                    if (prev > 3) return 1;
                    if (prev < 1) return 3;
                    return prev;
                  });
                }}
              >
                <img src={Nextbtn} className="h-11" alt="" />
              </button>
            </div>
            <div className="flex gap-2 pt-5">
              <Slider
                className="w-9/12 max-sm:w-8/12 pt-0.5"
                value={Math.round(progress * 100) / 100}
                onChange={(event) => {
                  const duration = audioRef.current.duration;
                  const currentSecFromProgress = (event * duration) / 100;
                  if (Number.isNaN(audioRef.current.currentTime)) {
                    audioRef.current.currentTime = 0;
                  }
                  audioRef.current.currentTime = currentSecFromProgress;
                }}
              />
              <h2 className="text-sm">{`${secToTimeStamp(
                currentSec
              )} / ${secToTimeStamp(audioRef?.current?.duration)}`}</h2>
            </div>
            <h2 className="text-center">{getTrackName(trackNumber)}</h2>
            <audio src={getTrack(trackNumber)} ref={audioRef} />
          </div>
        </div>
      </>
    );
  }
  
  export default App;
  