import { useState, useEffect, useRef } from "react"

function Timer() {
  const [time, setTime] = useState(null);
  const [isTimerRunning, setTimerRunning] = useState(false);

  //  useRef will return an object with a property key called current 
  const timerRef = useRef(null);

  useEffect(() => {
    if (time === 0) {
      clearInterval(timerRef.current);
    }
  }, [time]);

  const handleUpdate = (time) => {
    setTime(time);
    handleStart();
  };

  const handleStart = () => {
    if (timerRef.current !== null) return;
    if (time === 0) return;
    timerRef.current = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    setTimerRunning(true);
    // we can do a better way, we will come back to it
  };

  const handleStop = () => {
    clearInterval(timerRef.current);
    setTimerRunning(false);
    timerRef.current = null;
  };

  const handleReset = () => {
    handleStop();
    setTime(0);
  };

  return (
    <div>
      {time === null ? ( <TimerInput handleUpdate={handleUpdate} /> ) : (
        <>
          <div> TIMER : {time} </div>
          {/* It will hit the start or pause with same button */}
          {isTimerRunning ? ( <button onClick={handleStop}>PAUSE</button> ) : ( <button onClick={handleStart}>START</button> )}
          <button onClick={handleReset}>RESET</button>
        </>
      )}
    </div>
  );
}

const TimerInput = ({ handleUpdate }) => {
  const [time, setTime] = useState(0);

  const handleTimeUpdate = (value) => {
    console.log("value: ", value)
    if (Number.isNaN(value)) {
      alert("please input number");
      return;
    }
    setTime(Number(value));
  };
  // check timee
  console.log(time);

  return (
    <div>
      <input value={time} onChange={(e) => handleTimeUpdate(e.target.value)} />
      <button onClick={() => handleUpdate(time)}> START TIMER </button>
    </div>
  );
};

export default Timer;
