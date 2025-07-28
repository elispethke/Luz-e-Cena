import React from "react";
import styles from  './FildSet.module.css';

type FieldsetProps = {
    variant?: "primary" | "secudary"
} & React.FieldsetHTMLAttributes<HTMLFieldSetElement>;

const Fieldset = ({children, variant ="primary"}: FieldsetProps) => {
 return ( 
 <fieldset className={`${styles.inputWrapper} ${variant === "primary" ?
    styles.primary : styles.secundary
 }`}>
  {children}
 </fieldset>
);
};

export default Fieldset;