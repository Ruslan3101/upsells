import { useAddEstimate } from "../../../app/providers/AddEstimateProvider/lib/EstimateContext";
import { Card, Nav } from "react-bootstrap";

import { Estimate } from "../../../components/types/types";

export function CustomerOverview() {
  const { estimate, toggle, toggleHandler } = useAddEstimate();
  return (
    <div>
      {estimate.map((calculatedEstimate) => (
        <div key={calculatedEstimate.id}>
          <Card.Title className="fs-2">
            Total: {`$${calculatedEstimate.selling_price}`}
          </Card.Title>
          {toggle && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "30px",
                alignItems: "center",
              }}
              className="h5"
            >
              <p>Part: {`$${calculatedEstimate.material_cost}`}</p>
              <div className="headerDivider"></div>
              <p>Labor: {`$${calculatedEstimate.labor_cost}`}</p>
            </div>
          )}
        </div>
      ))}

      <Nav className="justify-content-center">
        <Nav.Item>
          <Nav.Link onClick={toggleHandler} eventKey="link-1">
            Show more
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
