import { Formik, FormikHelpers } from "formik";
import Form from "react-bootstrap/Form";
import * as yup from "yup";
import { Fruit } from "./models/fruit";
import Button from "react-bootstrap/Button";
import logo from "./logo.svg";
import "./App.css";
import FruitEditor from "./components/fruit-editor";

interface Basket {
  contents: Fruit[];
  weight: number;
}

interface Cart {
  singleFruits: Fruit[];
  baskets?: Basket[];
  theWaterMelon?: Fruit;
}

function App() {
  const cart: Cart = {
    singleFruits: [
      {
        name: "Pineapple",
        color: "green-yellow",
      },
      {
        name: "Strawberries",
        color: "red",
      },
    ],
  };

  function handleFormikFormSubmit(values: Cart, { setErrors, setSubmitting }: FormikHelpers<Cart>) {
    console.log(`Values: ${values.singleFruits.length}`)
    setSubmitting(false);
    //    return false;
  }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.stopPropagation();
    e.preventDefault();
    console.log('Stopped form submit propagation');
  }

  return (
    <div className="App">
      <header className="App-header">
        <a href="https://www.anjack.io">
          <img src={logo} className="App-logo" alt="Anjack Logo" />
        </a>
      </header>
      <div>
        <Formik initialValues={cart} validationSchema={yup.object({
          singleFruits: yup.array()
        })} onSubmit={handleFormikFormSubmit}>{({handleSubmit }) => (
        <Form noValidate onSubmit={handleSubmit} >
          {cart.singleFruits.map((f) => (
            <FruitEditor key={`editor-${f.name}`} nameBase={f.name} initial={f} />
          ))}

          <Button type="submit">Submit</Button>
        </Form>)}
</Formik>
      </div>
    </div>
  );
}

export default App;
