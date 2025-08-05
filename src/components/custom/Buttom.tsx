'use client';

type TProps = {
    text: string;
    className: string;
    isPending: boolean;
    type: "button" | "submit";
    onClickHandler: () => void;
}

const Buttom: React.FC<TProps> = ({
    className,
    onClickHandler,
    isPending,
    text,
    type = "button",
    ...rest
}) => {
    return (
        <button
            onClick={onClickHandler}
            type={type}
            className={className}
            disabled={isPending}
            {...rest}
        >
            {
                isPending ? "Loading..." : text
            }
        </button >
    )
}

export default Buttom