'use client';
import Buttom from "@/components/custom/Buttom";
import { useTimerStore } from "@/stores/TimerStore";
import Swal from 'sweetalert2'

const BtnStart = () => {

    const { hour, setHour, minute, setMinute, second, setSecond, startTimer, setStartTimer } = useTimerStore();


    const startTimeHandler = () => {
        if (!hour && !minute && !second) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please fill in at least one of the fields.",
            });
        } else {
            setStartTimer(true);

            for (let index = 60; index < Number(second); index--) {
                setTimeout(() => {
                    setSecond(Number(second) - 1 > 0 ? 59 : Number(second) - 1);
                }, 1000);

                for (let index = 59; index < Number(minute); index--) {
                    setTimeout(() => {
                        setMinute(Number(minute) - 1 > 0 ? 59 : Number(minute) - 1)
                     }, 60000)
                }
            }
        }
    }


    return (
        <Buttom
            onClickHandler={startTimeHandler}
            text="START"
            className={`w-[200px] border h-[35px] rounded-lg`}
            isPending={false}
            type="button"
        />
    )
}

export default BtnStart;