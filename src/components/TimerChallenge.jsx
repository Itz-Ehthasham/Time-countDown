import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timerStarted, setTimerStarted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const [startTime, setStartTime] = useState(0);

  function handleStart() {
    clearTimeout(timer.current);
    setStartTime(Date.now());
    timer.current = setTimeout(() => {
      setTimeRemaining(0);
      dialog.current.open();
    }, targetTime * 1000);
    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
    const elapsedTime = Date.now() - startTime;
    const actualTimeRemaining = targetTime * 1000 - elapsedTime;
    setTimeRemaining(actualTimeRemaining);
    dialog.current.open();
    setTimerStarted(false);
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
    setTimerStarted(false);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} second{targetTime !== 1 ? "s" : ""}
        </p>

        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"}
          </button>
        </p>

        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Time is running..." : "Time is inactive."}
        </p>
      </section>
    </>
  );
}
