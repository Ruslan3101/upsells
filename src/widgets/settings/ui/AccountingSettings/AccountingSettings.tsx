import { activate } from "firebase/remote-config";
import { useAddEstimate } from "../../../../app/providers/AddEstimateProvider/lib/EstimateContext";

import { Card, Button, Form, InputGroup, ListGroup } from "react-bootstrap";
import { FormattedDate } from "../../../../shared/lib/FormattedDate/FormattedDate";
import { useEffect } from "react";

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
        <InputGroup className="mb-3" id="profitInPercent">
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
        <InputGroup className="mb-3" id="salesTax">
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
        <InputGroup className="mb-3" id="companyOverhead">
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
            <Card key={data.id} className="text-center">
              <Card.Header>Account Settings List</Card.Header>
              <Card.Body>
                <div
                  key={data.id}
                  style={{
                    fontSize: "20px",
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "space-around",
                  }}
                >
                  <div key={data.profit_in_percent}>
                    <span>Profit:</span>
                    <span style={style}> {`${data.profit_in_percent}%`}</span>
                  </div>
                  <div key={data.sales_tax}>
                    <span>Sales Tax: </span>
                    <span style={style}> {`${data.sales_tax}%`}</span>
                  </div>
                  <div key={data.overhead}>
                    <span>Overhead: </span>
                    <span style={style}> {`${data.overhead}%`}</span>
                  </div>
                </div>
              </Card.Body>
              <Card.Footer className="text-muted">
                {`Last update: ${FormattedDate(data.lastUpdated)}`}
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
