import Pizza from './pizza';
import { Vegetarian } from './flavors';

interface PizzaVegetarian extends Pizza {
  flavor: Vegetarian;
}

export default PizzaVegetarian;
