import Pizza from './pizza';
import { Common } from './flavors';

interface PizzaCommon extends Pizza {
  flavor: Common;
}

export default PizzaCommon;
