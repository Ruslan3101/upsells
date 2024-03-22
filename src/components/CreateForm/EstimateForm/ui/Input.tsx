import Form from "react-bootstrap/Form";
import { InputProps } from "../../../types/types.tsx";
import React from "react";
export const Input: React.FC<InputProps> = ({
  text,
  ariaLabel,
  className,
  style,
  value,
  // onChange,

}) => {
  return (
    <Form.Control
      placeholder={text}
      aria-label={ariaLabel}
      className={className}
      style={style}
      value={value}
      // onChange={onChange} 
    />
  );
};
