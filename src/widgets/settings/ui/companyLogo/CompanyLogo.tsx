import { Figure, Form } from "react-bootstrap";

export const CompanyLogo = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Figure className="mt-3 d-flex flex-column align-items-center">
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src="src/Logo.png"
          className="mb-3"
        />
        <Form.Control type="file" size="sm" />
        <Figure.Caption className="text-center mt-3">
          Company name State
        </Figure.Caption>
      </Figure>
    </div>
  );
};
