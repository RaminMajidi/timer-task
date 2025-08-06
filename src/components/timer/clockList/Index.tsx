'use client';
import NoItem from "@/components/custom/NoItem";
import { useTimerStore } from "@/stores/TimerStore";


const ClockList = () => {
    const clocks = useTimerStore(state => state.clocks)
    return (
        <div className="border mx-auto p-2 w-[48%] rounded-lg">
            <h6>CLOCKS</h6>
            {
                clocks?.length > 0 ? (
                    <ul>
                        {clocks.map((item, i) => (
                            <li key={i}>
                                <span>{item.clock}</span>
                                {" "}
                                <span>__</span>
                                {" "}
                                <span>{item.stopTimer}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <NoItem />
                )
            }

        </div>
    )
}

export default ClockList