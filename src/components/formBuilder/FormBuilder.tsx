import {Card, DropdownButton, InputGroup} from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import {BsInputGroupText} from "./BsInputGroupText.tsx";
import {BsInput} from "./BsInput.tsx";

export function FormBuilder() {
    return (
        <div>
            <h1>

                <Card className='p-2 border-1 shadow-sm'>

                    <Form.Label htmlFor="basic-url" className="d-flex align-items-center fs-2 ">Estimate#
                        <BsInput text=" "
                                 ariaLabel="invoice Id"
                                 style={{width: "200px", height: "40px"}}
                                 className="ms-2"/>
                    </Form.Label>

                    <InputGroup>
                        <DropdownButton
                            variant="outline-primary"
                            title="Houry Rate"
                            id="input-group-dropdown-1"
                            className="bg-primary"
                        >
                            <Dropdown.Item href="#">Add Tech</Dropdown.Item>
                        </DropdownButton>
                        <BsInput
                            text="$65"
                            ariaLabel="Technician an hour"/>
                        <BsInputGroupText
                            text="Workload"
                            ariaLabel=""
                            className="ms-2"/>
                        <BsInput
                            text="2 hours"
                            ariaLabel="Time required to complete the job"/>
                    </InputGroup>

                    <InputGroup className="mb-3 mt-3">
                        <BsInputGroupText text="$"/>
                        <BsInput
                            text="Amount"
                            ariaLabel="Amount (to the nearest dollar)"/>
                        <BsInputGroupText text="Materials"/>
                    </InputGroup>

                    <InputGroup className="d-flex">
                        <InputGroup.Text>Description</InputGroup.Text>
                        <Form.Control
                            as="textarea"
                            placeholder="What has to be done?"
                            aria-label="With textarea"/>
                    </InputGroup>
                </Card>

            </h1>
        </div>
    )
}
