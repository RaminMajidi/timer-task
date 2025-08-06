"use client";
import { useTimerStore } from '@/stores/TimerStore'
import { TimerItem } from './TimerItem';
import { useEffect, useState } from 'react';

const ShowTimer = () => {
    const [totlaTime, setTotalTime] = useState(0);
    const { hour, setHour, minute, setMinute, second, setSecond, startTimer, setStartTimer } = useTimerStore();

    useEffect(() => {
        if (startTimer) {
            setTimeout(() => {
                if (!hour && !minute && !second) {
                    setStartTimer(false);
                    return;
                }
                setSecond(Number(second) - 1 < 0 ? 59 : Number(second) - 1);
                if (second === 0) {
                    if (Number(minute) - 1 < 0 && Number(hour) > 0) {
                        setMinute(59)
                    } else {
                        setMinute(Number(minute) - 1);
                    }

                    if (minute === 0) {
                        if (Number(hour) - 1 < 0) {
                            setHour(0)
                        } else {
                            setHour(Number(hour) - 1);
                        }
                    }
                }

                setTotalTime(totlaTime + 1)
            }, 1000);
        }

    }, [startTimer, totlaTime])

    return (
        <div className='flex flex-wrap gap-2 justify-center items-center my-4 mx-auto'>
            <TimerItem
                calssName=''
                value={hour ? hour : 0}
            />
            {" : "}
            <TimerItem
                calssName=''
                value={minute ? minute : 0}
            />
            {" : "}
            <TimerItem
                calssName=''
                value={second ? second : 0}
            />

        </div>
    )
}

export default ShowTimer