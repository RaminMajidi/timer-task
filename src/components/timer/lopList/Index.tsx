'use client';
import { useTimerStore } from '@/stores/TimerStore'
import React from 'react'

const LopList = () => {
    const lops = useTimerStore(state => state.lops);
    return (
        <div className='border mx-auto p-2 w-[48%] rounded-lg'>
            <h6>LOOPS</h6>

            {lops?.length > 0 ? (
                <ul></ul>
            ) : (
                <p>No Item</p>
            )}

        </div>
    )
}

export default LopList