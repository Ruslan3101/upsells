import {
  Button,
  Card,
  DropdownButton,
  InputGroup,
  ListGroup,
} from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import {
  BsAddTechRate,
  Input,
  InputGroupText,
} from "../../../components/CreateForm/EstimateForm";
import { useAddWorker } from "../../../app/providers/AddWorkerProvider/AddWorkerContext";
import { useAddEstimate } from "../../../app/providers/AddEstimateProvider/lib/EstimateContext";

// const { estimateNumb, setEstimateNumb, handleSubmit } = CreateEstimate;

export function EstimateInputForm(): JSX.Element {
  // const { handleAddTechClick, handleRemoveTechClick, addTech }: AddWorkerProps =
  //   AddWorker();
  const {
    estimateNumb,
    setEstimateNumb,
    estimateDescription,
    estimateHandlerSubmit,
    handlerInputChange,
    setHourlyRate,
    setEstimateDescription,
    setMaterialCost,
    setTimeRequired,
    hourlyRate,
    timeRequired,
    materialCost,
  } = useAddEstimate();
  const { handleAddTechClick, handleRemoveTechClick, addTech } = useAddWorker();

  return (
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
            <Form.Control
              value={estimateNumb}
              placeholder="Optional"
              aria-label="invoice Id"
              style={{ width: "200px", height: "40px" }}
              onChange={(event: any) =>
                handlerInputChange(event, setEstimateNumb)
              }
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
            <Form.Control
              value={hourlyRate}
              placeholder="$65"
              type="number"
              aria-label="Technician an hour"
              onChange={(event: any) =>
                handlerInputChange(event, setHourlyRate)
              }
            />

            {/*Workload Text*/}
            <InputGroupText text="Workload" ariaLabel="" className="ms-2" />

            {/*Workload Input */}
            <Form.Control
              value={timeRequired}
              placeholder="2 hours"
              type="number"
              aria-label="Time required to complete the job"
              onChange={(event: any) =>
                handlerInputChange(event, setTimeRequired)
              }
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
            <Form.Control
              value={materialCost}
              type="number"
              placeholder="Amount"
              aria-label="Amount (to the nearest dollar)"
              onChange={(event: any) =>
                handlerInputChange(event, setMaterialCost)
              }
            />
            <InputGroupText text="Materials" />
          </InputGroup>

          {/*Description Text*/}
          <InputGroup className="d-flex">
            <InputGroupText text="Description" />

            {/*Description Input */}
            <Form.Control
              value={estimateDescription}
              as="textarea"
              placeholder="What has to be done?"
              aria-label="With textarea"
              onChange={(event: any) =>
                handlerInputChange(event, setEstimateDescription)
              }
            />
          </InputGroup>
          <Button
            className="mt-3"
            variant="primary"
            onClick={(event) => {
              // event.preventDefault();
              estimateHandlerSubmit(event);
              // fetchDataAndUpdateState();
            }}
          >
            Calculate
          </Button>
        </Card>
      </h1>
    </div>
  );
}
