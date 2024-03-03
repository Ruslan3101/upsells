import {BsInputGroupText} from "./BsInputGroupText.tsx";
import {BsInput} from "./BsInput.tsx";
import {CloseButton} from "react-bootstrap";

export const AddTechRate = ({handleRemoveTechClick, id}) => {
 return (
  <div
      className="d-flex mt-3"
      style={{width: "51%"}}>
            <BsInputGroupText
                text="Ext. Tech"
                className="d-flex justify-content-center"
                style={{width:"140px"}}
            />
            <BsInput
                className="ms-2 me-1"
                text="$65"
               />
            <CloseButton
                className="small"
                onClick={() =>handleRemoveTechClick(id)}/>
  </div>
 )
}
