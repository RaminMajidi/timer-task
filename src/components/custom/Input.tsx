'use client';
import React from 'react'

type TProps = {
  placeholder: string;
  label: string;
  name: string;
  type: "number" | "text";
  changeHandler: () => void;
  className: string;
}

const Input: React.FC<TProps> = ({
  placeholder,
  label,
  type,
  name,
  changeHandler,
  className,
  ...rest
}) => {
  return (
    <>
      <label className={``}>
        {label}
      </label>
      <input
        name={name}
        className={className}
        placeholder={placeholder}
        type={type}
        onChange={changeHandler}
        {...rest}
      />
    </>
  )
}

export default Input