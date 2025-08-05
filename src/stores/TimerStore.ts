import { create } from "zustand";
import { devtools } from "zustand/middleware";

type TimerState = {
    hour: number | null;
    minute: number | null;
    second: number | null;
    setHour: (hour: number) => void;
    setMinute: (minute: number) => void;
    setSecond: (second: number) => void;
}

export const useTimerStore = create<TimerState>()(devtools(
    (set, get) => ({
        hour: null,
        minute: null,
        second: null,
        setHour: (hour) => { set((state) => ({ ...state, hour })) },
        setMinute: (minute) => { set((state) => ({ ...state, minute })) },
        setSecond: (second) => { set((state) => ({ ...state, second })) },

    })));