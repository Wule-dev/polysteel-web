import React from 'react';
import { BreadcrumbProps } from '../../../types';
import styles from './Breadcrumb.module.css';
import { MyButton } from '../..';

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  children,
}: BreadcrumbProps) => {
  return (
    <div className={`container ${styles.breadcrumb}`}>
      <MyButton to="/">Home</MyButton>
      {children}
    </div>
  );
};

export default Breadcrumb;
