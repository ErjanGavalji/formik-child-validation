import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import "../styles/fruit-editor.css";
export default function FruitEditor({
  name,
  color,
}: {
  name: string;
  color: string;
}) {
  const validationResult = "This should come from formik";
  return (
    <Card className="fruit-editor-main">
      <Card.Header>
        An editor for a {color} {name}
      </Card.Header>
      <Card.Body>
        <Form.Group controlId={`fruiteditor-${name}-name`}>
          <Form.Label>Name</Form.Label>
          <Form.Control name={`${name}-name`} />
          <Form.Control.Feedback type="invalid">
            {validationResult}
          </Form.Control.Feedback>
          <Form.Text className="muted">The name of the {name} fruit</Form.Text>
        </Form.Group>
      </Card.Body>
    </Card>
  );
}
