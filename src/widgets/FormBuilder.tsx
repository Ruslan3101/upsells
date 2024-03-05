import { Button, Card, DropdownButton, InputGroup } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import {
  AddTechRate,
  BsInput,
  BsInputGroupText,
} from "../components/FormBuilder/EstimateForm";
// import { BsInputGroupText } from "../components/FormBuilder/Estimate/BsInputGroupText.tsx";
// import { BsInput } from "../components/FormBuilder/Estimate/BsInput.tsx";
import { useState } from "react";
// import { AddTechRate } from "../components/FormBuilder/Estimate/AddTechRate.tsx";
import { idGenerator } from "components/utils/idGenerator.tsx";
// import { BsCalculationForm } from "../components/FormBuilder/Estimate/BsCalculationForm.tsx";

// interface AddTechRate {
//     handleAddTechClick: (id: number) => void;
//     handleRemoveTechClick: (id: number) => void;
// }

interface InputId {
  id: number;
  text: string;
}

export function FormBuilder() {
  const [addTech, setAddTech] = useState<InputId[]>([]);

  const handleAddTechClick = () => {
    setAddTech((originalTech) => [
      ...originalTech,
      {
        id: originalTech.length + 1,
        text: "Extra Tech in count $65",
      },
    ]);
  };

  const handleRemoveTechClick = (id: number) => {
    const updatedTechList = addTech.filter((tech) => tech.id !== id);
    setAddTech([...updatedTechList]);
  };
  return (
    <div>
      <div>
        <h1>
          <Card className="p-2 border-0 shadow-sm">
            {/*Estimate*/}
            <Form.Label
              htmlFor="basic-url"
              className="d-flex align-items-center fs-2 "
            >
              Estimate#
              {/*Invoice Input*/}
              <BsInput
                text=" "
                ariaLabel="invoice Id"
                style={{ width: "200px", height: "40px" }}
                className="ms-2"
              />
            </Form.Label>

            {/*Hourly Rate Dropdown*/}
            <InputGroup>
              <DropdownButton
                variant="outline-primary"
                title="Houry Rate"
                id="input-group-dropdown-1"
                className="bg-primary"
                style={{ width: "130px" }}
              >
                {/*Dropdown Item*/}
                <Dropdown.Item href="#" onClick={handleAddTechClick}>
                  Add Tech
                </Dropdown.Item>
              </DropdownButton>

              {/*Hourly rate Input*/}
              <BsInput text="$65" ariaLabel="Technician an hour" />

              {/*Workload Text*/}
              <BsInputGroupText text="Workload" ariaLabel="" className="ms-2" />

              {/*Workload Input */}
              <BsInput
                text="2 hours"
                ariaLabel="Time required to complete the job"
              />
            </InputGroup>
            {addTech.map((tech) => (
              <AddTechRate
                key={tech.id}
                handleRemoveTechClick={handleRemoveTechClick}
                id={tech.id}
              />
            ))}
            {/*Amount Text */}
            <InputGroup className="mb-3 mt-3">
              <BsInputGroupText text="$" />

              {/*Amount Input*/}
              <BsInput
                text="Amount"
                ariaLabel="Amount (to the nearest dollar)"
              />
              <BsInputGroupText text="Materials" />
            </InputGroup>

            {/*Description Text*/}
            <InputGroup className="d-flex">
              <BsInputGroupText text="Description" />

              {/*Description Input */}
              <Form.Control
                as="textarea"
                placeholder="What has to be done?"
                aria-label="With textarea"
              />
            </InputGroup>
            <Button className="mt-3" variant="primary">
              Calculate
            </Button>
          </Card>
        </h1>
      </div>

      <div>{/* <BsCalculationForm /> */}</div>
    </div>
  );
}
