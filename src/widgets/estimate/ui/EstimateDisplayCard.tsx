import React, { useState } from "react";
import { Button, Card, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { SellsPriceCard } from "./SellsPriceCard";

export type Tabs = {
  activeTab: string;
};

export function EstimateDisplayCard() {
  const [activeTab, setActiveTab] = useState<Tabs>({ activeTab: "customer" });

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Card>
        <Card.Header className="bg-white shadow-sm mb-3 ">
          <Nav
            variant="tab"
            className="d-flex justify-content-space-around "
            defaultActiveKey="#customer"
            onSelect={handleTabChange}
          >
            <Nav.Item className="d-flex justify-content-space-around">
              <Nav.Link
                eventKey="customer"
                as={NavLink}
                to="#customer-sells-card"
              >
                Customer
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="pro" as={NavLink} to="#pro">
                Pro
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="settings" as={NavLink} to="#settings">
                Settings
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          {/* {activeTab === "customer" && <CustomerCard  activeTab={activeTab}/>} */}
          {<SellsPriceCard activeTab={activeTab} />}

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "30px",
            }}
          >
            <Button variant="danger">dislike Logo</Button>
            <Button variant="warning">Thinking</Button>
            <Button variant="success">like Logo</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
