import { SetStateAction, Dispatch } from "react";
import Button from "react-bootstrap/button";
import { FruitVariety, Cart } from "../models/fruit";

export default function VarietiesEditor({cart, setCart}: {cart: Cart, setCart: Dispatch<SetStateAction<Cart>> }) {
  return <div>Varieties Editor
  <div>
    <Button onClick={(e) => {

      setCart(prevCart => {

        const newCart = {...prevCart};
        newCart.singleFruits[0].availableVarieties = [];

        return newCart;
      })

    }}>AAA</Button>

  </div></div>;
}
