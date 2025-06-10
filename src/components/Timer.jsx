import './Timer.css';
import { useEffect, useState } from 'react';

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSecond) => prevSecond + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const startHandler = () => {
    setIsRunning(true);
  };
  const pausetHandler = () => {
    setIsRunning(false);
  };
  const formatTime = (secs) => {
    const minutes = Math.floor(secs/ 60);
    const seconds = secs % 60
    return `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`
  };

  return (
    <span>
      <button className="button-play" onClick={startHandler}></button>
     <button className="button-pause" onClick={pausetHandler}></button>
      {formatTime(seconds)}
    </span>
  );
}
