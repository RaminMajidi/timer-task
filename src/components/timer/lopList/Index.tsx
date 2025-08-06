'use client';
import NoItem from '@/components/custom/NoItem';
import { useTimerStore } from '@/stores/TimerStore'

const LopList = () => {
    const lops = useTimerStore(state => state.lops);
    return (
        <div className='border mx-auto p-2 w-[48%] rounded-lg '>
            <h6>LOOPS</h6>
            {lops?.length > 0 ? (
                <ol>
                    {lops.map((item, i) => (<li key={item + "_" + i}>
                        {
                            i + 1
                        }
                        {" ) "}
                        {item}
                    </li>))}
                </ol>
            ) : (
                <NoItem />
            )}

        </div>
    )
}

export default LopList