'use client'
import Input from "@/components/custom/Input"
import { useTimerStore } from "@/stores/TimerStore";
import BtnStart from "../btnStart/BtnStart";

const TopInputs = () => {

    const { hour, setHour, minute, setMinute, second, setSecond, showInputs } = useTimerStore();


    return (
        <>
            {
                showInputs &&
                <article className={`flex flex-wrap gap-3 p-2 items-end justify-center`}>
                    <Input
                        label="Hour"
                        className="border px-2 py-1 rounded-lg"
                        name="hour"
                        placeholder="2"
                        type="number"
                        changeHandler={(e) => { setHour(+e.target.value) }}
                        value={hour as number}
                    />

                    <Input
                        label="Minute"
                        className="border px-2 py-1 rounded-lg"
                        name="minute"
                        placeholder="2"
                        type="number"
                        value={minute as number}
                        changeHandler={(e) => { setMinute(+e.target.value) }}

                    />
                    <Input
                        label="Seconds"
                        className="border px-2 py-1 rounded-lg"
                        name="seconds"
                        placeholder="2"
                        type="number"
                        value={second as number}
                        changeHandler={(e) => { setSecond(+e.target.value) }}
                    />
                    <BtnStart />
                </article>
            }
        </>
    )
}

export default TopInputs;