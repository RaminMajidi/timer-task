import { create } from "zustand";
import { devtools } from "zustand/middleware";

type TimerState = {
    showBtnStart: boolean;
    setShowBtnStart: (value: boolean) => void;
    hour: number | null;
    minute: number | null;
    second: number | null;
    setHour: (hour: number) => void;
    setMinute: (minute: number) => void;
    setSecond: (second: number) => void;
    startTimer: boolean;
    setStartTimer: (value: boolean) => void;
    reset: () => void;
}

export const useTimerStore = create<TimerState>()(devtools(
    (set, get) => ({
        reset:()=>{set((state)=>({hour:null,minute:null,second:null,}))},
        showBtnStart: true,
        setShowBtnStart: (value) => { set((state) => ({ ...state, showBtnStart: value })) },
        hour: null,
        minute: null,
        second: null,
        setHour: (hour) => { set((state) => ({ ...state, hour })) },
        setMinute: (minute) => { set((state) => ({ ...state, minute })) },
        setSecond: (second) => { set((state) => ({ ...state, second })) },
        startTimer: false,
        setStartTimer: (value) => { set((state) => ({ ...state, startTimer: value })) }
    })));