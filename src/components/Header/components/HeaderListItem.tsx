import React from 'react'
import styles from '../Header.module.css';

const headerListItem =({children}:React.LiHTMLAttributes<HTMLLIElement>) => {
  return (
   <li className={styles.manuitem}>{children}</li>
  );
};

export default headerListItem