import convertSecondsToHMS from "@/utils/convertSecondsToHMS";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type TimerState = {
    pauseStatus: boolean;
    setPauseStatus: (value: boolean) => void;
    pauseCount: number;
    setPauseCount: (pauseCount: number) => void;
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
    lops: string[];
    setLops: () => void;
    clocks: TClockItem[];
    setClocks: () => void;
    pauseLocalTime: string;
    setPauseLocalTime: (pauseLocalTime: string) => void;
}

export const useTimerStore = create<TimerState>()(devtools(
    (set, get) => ({
        reset: () => { set(() => ({ hour: null, minute: null, second: null, startTimer: false, lops: [], clocks: [], pauseLocalTime: '', pauseCount: 0, pauseStatus: false })) },
        showBtnStart: true,
        setShowBtnStart: (value) => { set((state) => ({ ...state, showBtnStart: value })) },
        hour: null,
        minute: null,
        second: null,
        setHour: (hour) => { set((state) => ({ ...state, hour })) },
        setMinute: (minute) => { set((state) => ({ ...state, minute })) },
        setSecond: (second) => { set((state) => ({ ...state, second })) },
        startTimer: false,
        setStartTimer: (value) => { set((state) => ({ ...state, startTimer: value })) },
        lops: [],
        setLops: () => { set((state) => ({ ...state, lops: [...state.lops, `${Number(state.hour) < 10 ? `0${state.hour}` : state.hour} : ${Number(state.minute) < 10 ? `0${state.minute}` : state.minute} : ${Number(state.second) < 10 ? `0${state.second}` : state.second}`] })) },
        clocks: [],
        setClocks: () => {
            set((state) => ({
                ...state, clocks: [...state.clocks, {
                    clock: state.pauseLocalTime, stopTimer: convertSecondsToHMS(state.pauseCount)
                }]
            }))
        },
        pauseStatus: false,
        setPauseStatus: (pauseStatus) => { set((state) => ({ ...state, pauseStatus })) },
        pauseCount: 0,
        setPauseCount: (pauseCount) => { set((state) => ({ ...state, pauseCount })) },
        pauseLocalTime: "",
        setPauseLocalTime: (pauseLocalTime) => { set((state) => ({ ...state, pauseLocalTime })) }
    })));