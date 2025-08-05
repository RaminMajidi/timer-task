'use client'
import Buttom from "@/components/custom/Buttom";
import { useTimerStore } from "@/stores/TimerStore";

const BtnPause = () => {
    const { setStartTimer } = useTimerStore();

    const pauseTimerHandler = () => {
        setStartTimer(false)
    }


    return (
        <Buttom
            onClickHandler={pauseTimerHandler}
            text="PAUSE"
            className={`w-[200px] border h-[35px] rounded-lg`}
            isPending={false}
            type="button"
        />
    )
}

export default BtnPause;