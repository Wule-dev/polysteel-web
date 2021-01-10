import React from 'react';
import Link from 'next/link';
import { ButtonProps } from '../../types';

const MyButton = React.forwardRef(
  (
    { to, children, className, rel = '', target = '', ...props }: ButtonProps,
    ref: any,
  ) => {
    return (
      <Link href={to}>
        <a {...props} ref={ref} rel={rel} className={className} target={target}>
          {children}
        </a>
      </Link>
    );
  },
);

export default MyButton;
