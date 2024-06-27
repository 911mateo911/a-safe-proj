import clsx from 'clsx';
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export const Button = (props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={clsx(props.className)}
    >
      {props.children}
    </button>
  )
}
