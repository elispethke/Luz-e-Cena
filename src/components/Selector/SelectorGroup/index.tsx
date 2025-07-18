import React from 'react'
import styles from './Selector.module.css';

interface SelectorGroupProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    icon?: React.ReactNode;
}

const SelectorGroup = ({ id, icon, children, ...rest }: SelectorGroupProps) => {
  return (
    <div className={styles.container}>
      {icon && <div className={styles.icone}>{icon}</div>}
      <select id={id} className={styles.selector} {...rest}>
        {children}
      </select>
    </div>
  );
}

export default SelectorGroup;
