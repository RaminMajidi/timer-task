import React from 'react'

type TProps = {
    value: string | number;
    calssName?: string;
}

export const TimerItem: React.FC<TProps> = ({
    value,
    calssName=""
}) => {
    return (
        <p className={`${calssName} flex justify-center items-center
        rounded-lg border p-1 w-[50px] h-[50px] font-bold text-sm`}>
            {(+value < 10) ? `0${value}` : value}
        </p>
    )
}
