'use client';

type TProps = {
    text: string;
    className: string;
    isPending: boolean;
    type: "button" | "submit"
}

const Buttom: React.FC<TProps> = ({
    className,
    isPending,
    text,
    type = "button",
    ...rest
}) => {
    return (
        <button
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