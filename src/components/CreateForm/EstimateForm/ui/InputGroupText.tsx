import { InputGroup } from "react-bootstrap";
import React from "react";
import { TextAreaProps } from "../../../types/types.tsx";

// Explicitly specify the type of BsInputGroupText
export const InputGroupText: React.FC<TextAreaProps> = ({
  text,
  ariaLabel,
  className,
  style,
}) => {
  return (
    <InputGroup.Text aria-label={ariaLabel} className={className} style={style}>
      {text}
    </InputGroup.Text>
  );
};
