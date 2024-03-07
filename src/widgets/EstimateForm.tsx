import { Button, Card, DropdownButton, InputGroup } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import {
  BsAddTechRate,
  Input,
  InputGroupText,
} from "../components/CreateForm/EstimateForm";
import { AddWorker, AddWorkerProps } from "../features/AddWorker";

export function FormBuilder(): JSX.Element {
  const { handleAddTechClick, handleRemoveTechClick, addTech }: AddWorkerProps =
    AddWorker();

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
              <Input
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
                title="Hourly Rate"
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
              <Input text="$65" ariaLabel="Technician an hour" />

              {/*Workload Text*/}
              <InputGroupText text="Workload" ariaLabel="" className="ms-2" />

              {/*Workload Input */}
              <Input
                text="2 hours"
                ariaLabel="Time required to complete the job"
              />
            </InputGroup>
            {addTech.map((tech) => (
              <BsAddTechRate
                key={tech.id}
                handleRemoveTechClick={handleRemoveTechClick}
                id={tech.id}
              />
            ))}
            {/*Amount Text */}
            <InputGroup className="mb-3 mt-3">
              <InputGroupText text="$" />

              {/*Amount Input*/}
              <Input text="Amount" ariaLabel="Amount (to the nearest dollar)" />
              <InputGroupText text="Materials" />
            </InputGroup>

            {/*Description Text*/}
            <InputGroup className="d-flex">
              <InputGroupText text="Description" />

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
