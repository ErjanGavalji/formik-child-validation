import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import logo from './logo.svg';
import './App.css';

interface Fruit {
  name: string
  color: string
}

interface Basket {
  contents: Fruit[],
  weight: number,
}

interface Cart {
  singleFruits: Fruit[],
  baskets?: Basket[],
}

function App() {
  const initialCart: Cart = {
    singleFruits: [
      {
        "name": "Pineapple",
        "color": "green-yellow",
      },
      {
        "name": "Watermelon",
        "color": "green",
      }
    ]
  }

  function handleFormSubmit(values: Cart, errors: any)  {
  }

  const formik = useFormik<Cart>({
    initialValues: initialCart,
    onSubmit: handleFormSubmit,
  });

  return (
    <div className="App">
      <header className="App-header">
        <a href="https://www.anjack.io"><img src={logo} className="App-logo" alt="Anjack Logo" /></a>
      </header>
      <div>
        <Form noValidate>

        </Form>
      </div>
    </div>
  );
}

export default App;
