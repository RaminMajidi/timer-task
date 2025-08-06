import convertSecondsToHMS from "@/utils/convertSecondsToHMS";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type TimerState = {
    pauseStatus: boolean;
    setPauseStatus: (value: boolean) => void;
    pauseCount: number;
    setPauseCount: () => void;
    resetPasuseCount: () => void;
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
    showInputs: boolean,
    setShowInputs: (showInputs: boolean) => void,
}

export const useTimerStore = create<TimerState>()(devtools(
    (set, get) => ({
        showInputs: true,
        setShowInputs: (showInputs) => { set((state) => ({ ...state, showInputs })) },
        reset: () => { set(() => ({ hour: null, minute: null, second: null, startTimer: false, lops: [], clocks: [], pauseLocalTime: '', pauseCount: 0, pauseStatus: false ,showInputs:true})) },
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
        setPauseCount: () => { set((state) => ({ ...state, pauseCount: state.pauseCount + 1 })) },
        resetPasuseCount: () => { set((state) => ({ ...state, pauseCount: 0 })) },
        pauseLocalTime: "",
        setPauseLocalTime: (pauseLocalTime) => { set((state) => ({ ...state, pauseLocalTime })) }
    })));