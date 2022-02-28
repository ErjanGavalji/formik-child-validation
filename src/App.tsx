import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import logo from "./logo.svg";
import "./App.css";
import FruitEditor from "./components/fruit-editor";

interface Fruit {
  name: string;
  color: string;
}

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

  function handleFormSubmit(values: Cart, errors: any) {}

  const formik = useFormik<Cart>({
    initialValues: cart,
    onSubmit: handleFormSubmit,
  });

  return (
    <div className="App">
      <header className="App-header">
        <a href="https://www.anjack.io">
          <img src={logo} className="App-logo" alt="Anjack Logo" />
        </a>
      </header>
      <div>
        <Form noValidate>
          {cart.singleFruits.map((f) => (
            <FruitEditor name={f.name} color={f.color} />
          ))}

          <Button>Submit</Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
