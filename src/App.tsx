import { useState } from "react";
import { Formik, FormikHelpers } from "formik";
import Form from "react-bootstrap/Form";
import * as yup from "yup";
import { Cart, FruitVariety } from "./models/fruit";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "./logo.svg";
import "./App.css";
import FruitEditor from "./components/fruit-editor";
import VarietiesEditor from "./components/varieties-editor";

function App() {

  const defaultCart: Cart = {
    singleFruits: [
      {
        name: "Pineapple",
        color: "green-yellow",
        availableVarieties: [FruitVariety.Mrun, FruitVariety.Prun],
      },
      {
        name: "Strawberries",
        color: "red",
        availableVarieties: [FruitVariety.Brun, FruitVariety.Vrun],
      },
    ],
  };

  const [cart, setCart] = useState(defaultCart);

  const fruitSchema = yup.object({
    name: yup.string().required("Fruit Name is required"),
    color: yup.string().required("Fruit color is required"),
    availableVarieties: yup.array().min(1, "At least one variety must be selected"),
  });
  const validationSchema=yup.object({
          singleFruits: yup.array().min(1).of(fruitSchema)
        });

  function handleFormikFormSubmit(values: Cart, { setErrors, setSubmitting }: FormikHelpers<Cart>) {
    //console.log(`Values: ${values.singleFruits.length}`)
    //    setSubmitting(false);
    //    return false;
  }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    //     e.stopPropagation();
    //     e.preventDefault();
    //     console.log('Stopped form submit propagation');
  }

  return (
    <div className="App">
      <header className="App-header">
        <a href="https://www.anjack.io">
          <img src={logo} className="App-logo" alt="Anjack Logo" />
        </a>
      </header>
      <Container fluid>
        <Row>
          <Col>
            <Formik
              initialValues={cart}
              validationSchema={validationSchema}
              onSubmit={handleFormikFormSubmit}
            >
              {({ handleSubmit }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  {cart.singleFruits.map((f, idx) => (
                    <FruitEditor
                      key={`editor-${f.name}`}
                      nameBase={`singleFruits[${idx}]`}
                      initial={f}
                    />
                  ))}

                  <Button type="submit">Submit</Button>
                </Form>
              )}
            </Formik>
          </Col>
          <Col>
            <VarietiesEditor cart={cart} setCart={setCart} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
