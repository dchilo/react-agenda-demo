import React from 'react';
import styles from './Button.module.css';

const Button = ({ color, onClick, text }) => {
  const buttonStyle = {
    backgroundColor: color,
  };

  return (
    <button className={styles.button} style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
