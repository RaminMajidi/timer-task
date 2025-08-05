"use client";
import { useTimerStore } from '@/stores/TimerStore'
import { TimerItem } from './TimerItem';

const ShowTimer = () => {
    const { hour, minute, second } = useTimerStore();
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