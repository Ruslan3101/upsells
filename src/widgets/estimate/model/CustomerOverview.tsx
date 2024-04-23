import { useAddEstimate } from "../../../app/providers/AddEstimateProvider/lib/EstimateContext";
import { Card, Nav, Placeholder } from "react-bootstrap";

import { Estimate } from "../../../components/types/types";
type LastAddedEstimate = {
  lastAdded: Estimate[];
};
export function CustomerOverview() {
  const { estimate, toggle, toggleHandler, estimateId, lastEstimate } =
    useAddEstimate();
  const lastAdded = estimate.find((element) => estimateId === element.id);

  return (
    <div>
      {lastAdded ? (
        <div key={lastAdded.id}>
          <Card.Title className="fs-2">
            Total: {`$${lastAdded.selling_price}`}
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
              <p>Part: {`$${lastAdded.material_cost}`}</p>
              <div className="headerDivider"></div>
              <p>Labor: {`$${lastAdded.labor_cost}`}</p>
            </div>
          )}
        </div>
      ) : (
        <div>
          <Placeholder as={Card.Title} animation="wave">
            <Placeholder xs={2} size="lg" style={{ borderRadius: "5px" }} />
          </Placeholder>
        </div>
      )}

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
