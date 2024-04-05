import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";

function Output() {
  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col>
            <h1>Login Successfull!</h1>
            <p>Welcome aboard!</p>
            <Button href="/" variant="primary">
              Go to Login Page
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Output;
