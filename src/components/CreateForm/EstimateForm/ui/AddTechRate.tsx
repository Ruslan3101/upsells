import { InputGroupText } from "./InputGroupText.tsx";
import { Input } from "./Input.tsx";
import { CloseButton } from "react-bootstrap";

export const BsAddTechRate = ({ handleRemoveTechClick, id }) => {
  return (
    <div className="d-flex mt-3 " style={{ width: "50%" }}>
      <InputGroupText
        text="Ext. Tech"
        className="d-flex justify-content-center"
        style={{ width: "140px" }}
      />
      <Input className="ms-2 me-1 " text="$65" />
      <div>
        <CloseButton
          className="d-flex justify-content-center"
          style={{ width: "10px", height: "10px" }}
          onClick={() => handleRemoveTechClick(id)}
        />
      </div>
    </div>
  );
};
