'use client';
import Buttom from "@/components/custom/Buttom";
import { useTimerStore } from "@/stores/TimerStore";
import Swal from 'sweetalert2'

const BtnStart = () => {

    const { hour, minute, second } = useTimerStore();

    const startTimeHandler = () => {
        if (!hour && !minute && !second) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please fill in at least one of the fields.",
            });
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

export default BtnStart