import Form from "react-bootstrap/Form";
import {TextAreaProps} from "../types/types.tsx";
import React from "react";
export const BsInput: React.FC<TextAreaProps> = ({ text, ariaLabel })  => {
 return (
     <Form.Control
         placeholder={text}
         aria-label={ariaLabel}
     />
 )
}
