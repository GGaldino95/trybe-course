import Pizza from './pizza';
import { Sugar } from './flavors';

interface PizzaSugar extends Pizza {
  flavor: Sugar;
  slices: 4;
}

export default PizzaSugar;
