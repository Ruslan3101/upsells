import { Col } from "react-bootstrap";
import history from "../../../data/data.json";
import { HistoryItem } from "../../../components/CreateForm/HistoryForm";

export function History() {
  return (
    <>
      <h1>History</h1>
      {/*<Row>*/}
      {history.map((data) => (
        <Col key={data.id}>
          <HistoryItem {...data} />
        </Col>
      ))}
      {/*</Row>*/}
    </>
  );
}
