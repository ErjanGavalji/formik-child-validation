export interface Fruit {
  name: string,
  color: string,
  availableVarieties: FruitVariety[]
}

export interface Basket {
  contents: Fruit[];
  weight: number;
}

export interface Cart {
  singleFruits: Fruit[];
  baskets?: Basket[];
  theWaterMelon?: Fruit;
}


export enum FruitVariety {
  // For simplicuty, we will have the same set of varieties for each fruit:
  Mrun = "mrun",
  Prun = "prun",
  Brun = "brun",
  Vrun = "vrun",
}
