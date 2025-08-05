'use client';

type TProps = {
  placeholder: string;
  label: string;
  name: string;
  value: number | string ;
  type: "number" | "text";
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
  defaultValue?: string | number;
}

const Input: React.FC<TProps> = ({
  placeholder,
  label,
  type,
  value,
  name,
  changeHandler,
  className,
  defaultValue,
  ...rest
}) => {
  return (
    <div className={`flex flex-col w-full max-w-[200px] gap-1`}>
      <label className={``}>
        {label}
      </label>
      <input
        defaultValue={defaultValue}
        name={name}
        className={className}
        placeholder={placeholder}
        type={type}
        value={value || ""}
        onChange={changeHandler}
        {...rest}
      />
    </div>
  )
}

export default Input;