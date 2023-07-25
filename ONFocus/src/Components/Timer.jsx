import { useState, useEffect } from "react";
import CustomTime from "./CustomTime";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [selectedTime, setSelectedTime] = useState(1);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId;
    if (isRunning && timeLeft > 0) {
      timerId = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (isRunning && timeLeft === 0) {
      alert("Countdown has ended!");
    }

    return () => clearTimeout(timerId);
  }, [isRunning, timeLeft]);

  const handleTimeSelect = (minutes) => {
    setSelectedTime(minutes);
    setTimeLeft(minutes * 60);
  };

  const toggleStartPause = () => {
    setIsRunning(!isRunning);
  };
  const handleReset = () => {
    setTimeLeft(selectedTime * 60);
    setIsRunning(false);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };
  return (
    <>
      <div className=" rounded-2xl border bg-[rgba(33,37,41,0.05)] shade1 border-black p-7">
        <div className="flex pb-5 justify-between">
          <div className="w-5"></div>
          <h3 className=" text-3xl font-semibold">Timer </h3>{" "}
          <CustomTime
            handleTimeSelect={handleTimeSelect}
            selectedTime={selectedTime}
          />
        </div>

        <h2 className="text-center pb-5 text-6xl">{formatTime(timeLeft)}</h2>
        <div className="grid grid-cols-2  gap-4 text-white">
          <button
            onClick={toggleStartPause}
            className="rounded-lg border border-black bg-[#001F8C] px-8 py-1"
          >
            {isRunning ? "Pause" : "Start"}
          </button>

          <button
            onClick={handleReset}
            className="rounded-lg border border-black bg-[#001F8C] px-10 py-1"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
