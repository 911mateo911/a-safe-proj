import clsx from 'clsx';
import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';

interface TextInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string;
}

export const TextInput = ({
  label,
  ...props
}: TextInputProps) => {
  return (
    <div>
      <label
        htmlFor={props.id}
      >
        {label}
      </label>
      <input
        {...props}
        className={clsx(
          'border-none outline-none appearance-none',
          props.className
        )}
      />
    </div>
  )
}
