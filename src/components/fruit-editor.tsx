import { useField } from "formik";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import {Fruit} from "../models/fruit";
import "../styles/fruit-editor.css";
export default function FruitEditor({
  initial,
  nameBase,
}: {
  initial: Fruit;
  nameBase: string;
}) {
  const validationResult = "This should come from formik";
  const nameFieldName = `${nameBase}-name`;
  const colorFieldName = `${nameBase}-color`;
  const [nameField, nameMeta, nameHelpers] = useField({ name: nameFieldName });
  const [colorField, colorMeta, colorHelpers] = useField({ name: colorFieldName });
  return (
      <Card className="fruit-editor-main">
        <Card.Header>
          An editor for a {initial.color} {initial.name}
        </Card.Header>
        <Card.Body>
          <Form.Group controlId={nameFieldName}>
            <Form.Label>Name</Form.Label>
            <Form.Control name={nameFieldName} />
            <Form.Control.Feedback type="invalid">
              {validationResult}
            </Form.Control.Feedback>
            <Form.Text className="muted" {...nameField}>
              The name of the {initial.name} fruit
            </Form.Text>
          </Form.Group>

          <Form.Group controlId={colorFieldName}>
            <Form.Label>Color</Form.Label>
            <Form.Control name={colorFieldName} />
            <Form.Control.Feedback type="invalid" {...colorField}>
              {validationResult}
            </Form.Control.Feedback>
            <Form.Text className="muted">
              The color of the {initial.name} fruit
            </Form.Text>
          </Form.Group>
        </Card.Body>
      </Card>
  );
}
