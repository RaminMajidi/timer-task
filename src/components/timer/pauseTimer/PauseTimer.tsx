'use client';

import { useTimerStore } from "@/stores/TimerStore";
import { useEffect, useState } from "react";

const PauseTimer = () => {
  const [count, setCount] = useState<number>(0);

  const pauseStatus = useTimerStore(state => state.pauseStatus);
  const setPauseCount = useTimerStore(state => state.setPauseCount);
  const resetPasuseCount = useTimerStore(state=>state.resetPasuseCount)
  const pauseCount = useTimerStore(state => state.pauseCount);
  const setPauseLocalTime = useTimerStore(state=>state.setPauseLocalTime);


  useEffect(() => {
    let countInterval: ReturnType<typeof setInterval>;
    if (pauseStatus) {
      console.log(count)
      countInterval = setInterval(() => {
        setPauseCount()
        setCount(prev => prev + 1)
      }, 1000)
    }

    return () => {
      clearInterval(countInterval);
      resetPasuseCount()
      setPauseLocalTime('')
      setCount(0)
    }

  }, [pauseStatus,])

  useEffect(()=>{
    setPauseLocalTime(new Date().toLocaleString());
    return()=>{
      setPauseLocalTime("")
    }
  },[pauseStatus])

  return (
    <>
      {pauseStatus ? (
        <div className="flex justify-center items-center
        rounded-lg border p-1 w-max min-w-[100px] h-[50px] font-bold text-sm">
          {count}
        </div>
      ) : null}
    </>
  )
}

export default PauseTimer