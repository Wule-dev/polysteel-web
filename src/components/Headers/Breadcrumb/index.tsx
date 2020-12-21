import React from 'react';
import { BreadcrumbProps } from '../../../types';
import styles from './Breadcrumb.module.css';

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  children,
}: BreadcrumbProps) => {
  return (
    <div className={`container ${styles.breadcrumb}`}>
      <a href="/">Home</a>
      {children}
    </div>
  );
};

export default Breadcrumb;
