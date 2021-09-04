import React, { InputHTMLAttributes } from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string | JSX.Element;
}

export default function Input({ ...props }: IInputProps): JSX.Element {
  return (
    <>
      <label className="label" htmlFor={props.id}>
        {props.label}
      </label>
      <input
        id={props.id}
        type={props.type}
        className={props.className}
        maxLength={props.maxLength}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
    </>
  );
}
