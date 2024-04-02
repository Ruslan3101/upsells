import { activate } from "firebase/remote-config";
import { useAddEstimate } from "../../../../app/providers/AddEstimateProvider/lib/EstimateContext";

import { Card, Button, Form, InputGroup, ListGroup } from "react-bootstrap";
import { FormattedDate } from "../../../../shared/lib/FormattedDate/FormattedDate";

export const AccountingSettings = () => {
  const {
    AccountingSettingsHandlerSubmit,
    setProfitInPercent,
    setCompanyOverhead,
    setSalesTax,
    handlerInputChange,
    isButtonDisabled,
    accountingSettings,
  } = useAddEstimate();

  type dbData = {
    id: string;
    overhead: number;
    sales_tax: number;
    profit_in_percent: number;
    lastUpdated: string;
  };
  const style = {
    fontWeight: "bold",
  };
  return (
    <>
      <div>
        <Form.Label>Desire Profit</Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text>%</InputGroup.Text>
          <Form.Control
            type="number"
            aria-label="Profit in Percent"
            placeholder="Enter Profit"
            onChange={(event) => handlerInputChange(event, setProfitInPercent)}
          />
          <Button variant="light" id="button-addon2">
            ?
          </Button>
        </InputGroup>
        <Form.Label>Local Sales Tax</Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text>%</InputGroup.Text>
          <Form.Control
            type="number"
            aria-label="Sales Tax in Percent"
            placeholder="Enter Tax"
            onChange={(event) => handlerInputChange(event, setSalesTax)}
          />
          <Button variant="light" id="button-addon2">
            ?
          </Button>
        </InputGroup>
        <Form.Label>Overhead</Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text>%</InputGroup.Text>
          <Form.Control
            type="number"
            aria-label="Overhead in Percent"
            placeholder="Enter Overhead"
            onChange={(event) => handlerInputChange(event, setCompanyOverhead)}
          />
          <Button variant="light" id="button-addon2">
            ?
          </Button>
        </InputGroup>
        {accountingSettings &&
          accountingSettings.map((data: dbData) => (
            <Card className="text-center">
              <Card.Header>Account Settings List</Card.Header>
              <Card.Body>
                {/* <Card.Title>Special title treatment</Card.Title> */}
                <ListGroup>
                  <div
                    style={{
                      fontSize: "20px",
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "space-around",
                    }}
                  >
                    <div>
                      <span>Profit:</span>
                      <span style={style}> {`${data.profit_in_percent}%`}</span>
                    </div>
                    <div>
                      <span>Sales Tax: </span>
                      <span style={style}> {`${data.sales_tax}%`}</span>
                    </div>
                    <div>
                      <span>Overhead: </span>
                      <span style={style}> {`${data.overhead}%`}</span>
                    </div>
                  </div>
                </ListGroup>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
              <Card.Footer className="text-muted">
                {`Last update: ${FormattedDate(data.lastUpdated)}`}
                {/* {console.log(data.lastUpdated.toDate())} */}
              </Card.Footer>
            </Card>
          ))}
      </div>
      <Button
        disabled={isButtonDisabled}
        onClick={(event) => AccountingSettingsHandlerSubmit(event)}
      >
        Save
      </Button>
    </>
  );
};
