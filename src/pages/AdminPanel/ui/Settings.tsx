import {
  Accordion,
  Button,
  Card,
  Col,
  Container,
  Figure,
  Form,
  Row,
} from "react-bootstrap";
import {
  AccountingSettings,
  CompanyLogo,
  ProfileForm,
} from "../../../widgets/settings/ui/index";

export function Settings() {
  return (
    <div>
      <h1>Settings</h1>
      <Container fluid>
        <Row>
          <Col sm={8}>
            <Card>
              <Accordion
              //  defaultActiveKey={["0"]}
              >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Profile</Accordion.Header>
                  <Accordion.Body>
                    {/* My Account Card */}
                    <ProfileForm />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accounting Settings</Accordion.Header>
                  <Accordion.Body>
                    {/* Account Settings Card */}
                    <AccountingSettings />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </Col>
          <Col sm={4}>
            {" "}
            <CompanyLogo />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
