import styles from './InputText.module.css';

import React from 'react';


const InputText = ({...props}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input className={styles.input} {...props} />
  )
};

export default InputText;