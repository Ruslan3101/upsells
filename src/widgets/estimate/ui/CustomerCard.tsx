import { Card } from "react-bootstrap";
import {
  CustomerOverview,
  ProOverview,
  SettingsOverview,
} from "../model/index";

export function CustomerCard({ activeTab }) {
  const overviewCard = () => {
    if (activeTab === "customer") {
      return <CustomerOverview />;
    } else if (activeTab === "pro") {
      return <ProOverview />;
    } else if (activeTab === "settings") {
      return <SettingsOverview />;
    }
  };
  return (
    <div>
      <Card className="text-center ">
        <Card.Header
          style={{
            display: "flex",
            justifyContent: "center",
            color: "#249F02",
          }}
          className="fs-2"
        >
          Sells Price
        </Card.Header>

        <Card.Body>{overviewCard()}</Card.Body>

        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
}
