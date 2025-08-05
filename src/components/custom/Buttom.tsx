'use client';

type TProps = {
    text: string;
    className: string;
    isPending?: boolean;
    type: "button" | "submit";
    onClickHandler: () => void;
    disabled?:boolean;
}

const Buttom: React.FC<TProps> = ({
    className,
    onClickHandler,
    isPending=false,
    disabled=false,
    text,
    type = "button",
    ...rest
}) => {
    return (
        <button
            onClick={onClickHandler}
            type={type}
            className={className}
            disabled={isPending || disabled}
            {...rest}
        >
            {
                isPending ? "Loading..." : text
            }
        </button >
    )
}

export default Buttom