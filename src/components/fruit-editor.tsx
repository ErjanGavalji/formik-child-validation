import { useField } from "formik";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import {Fruit, FruitVariety} from "../models/fruit";
import "../styles/fruit-editor.css";
export default function FruitEditor({
  initial,
  nameBase
}: {
  initial: Fruit;
  nameBase: string;
}) {
  const nameFieldName = `${nameBase}.name`;
  const colorFieldName = `${nameBase}.color`;
  const varietyFieldName = `${nameBase}.availableVarieties`;
  const [nameField, nameMeta, nameHelpers] = useField({ name: nameFieldName});
  const [colorField, colorMeta, colorHelpers] = useField({
    name: colorFieldName,
  });
  const [varietyField, varietyMeta, varietyHelpers] = useField({
    name: varietyFieldName
  })
  return (
    <Card className="fruit-editor-main">
      <Card.Header>
        An editor for a {initial.color} {initial.name}
      </Card.Header>
      <Card.Body>
        <Form.Group controlId={nameFieldName}>
          <Form.Label>Name</Form.Label>
          <Form.Control
            name={`${nameBase}.name`}
            value={nameField.value}
            onChange={nameField.onChange}
            isValid={
              nameMeta.touched &&
              (nameMeta.error === undefined || nameMeta.error === "")
            }
            isInvalid={
              nameMeta.touched &&
              nameMeta.error !== undefined &&
              nameMeta.error !== ""
            }
          />
          <Form.Control.Feedback type="invalid">
            {nameMeta.error}
          </Form.Control.Feedback>
          <Form.Text className="muted" {...nameField}>
            The name of the {initial.name} fruit
          </Form.Text>
        </Form.Group>

        <Form.Group controlId={colorFieldName}>
          <Form.Label>Color</Form.Label>
          <Form.Control
            name={colorFieldName}
            value={colorField.value}
            onChange={colorField.onChange}
            isValid={
              colorMeta.touched &&
              (colorMeta.error === undefined || colorMeta.error === "")
            }
            isInvalid={
              colorMeta.touched &&
              colorMeta.error !== undefined &&
              colorMeta.error !== ""
            }
          />
          <Form.Control.Feedback type="invalid">
            {colorMeta.error}
          </Form.Control.Feedback>
          <Form.Text className="muted">
            The color of the {initial.name} fruit
          </Form.Text>
        </Form.Group>
        <div className="variety-holder">
          Varieties:
          { varietyField.value.map((v:any) => <div>{v}</div>) }
          <div>{varietyMeta.error}</div>
          {/*Object.keys(FruitVariety).map(k => (
            <>{k}</>
        ))*/}
        {/*Object.values(FruitVariety).map(k => (
            <>{k}</>
        ))*/}
        
        </div>
      </Card.Body>
    </Card>
  );
}
