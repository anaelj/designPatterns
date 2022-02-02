import { TShit } from './product/t-shirt';
import { ProductStampDecorator } from './product/product-stamp-decorator';
import { ProductCustomDecorator } from './product/product-custom-decorator';

const tshirt = new TShit();
const stampedTshirt = new ProductStampDecorator(tshirt);
const twoStampTshirt = new ProductStampDecorator(stampedTshirt);
const customTshirt = new ProductCustomDecorator(tshirt);

console.log(tshirt.getName(), tshirt.getPrice());
console.log(stampedTshirt.getName(), stampedTshirt.getPrice());
console.log(twoStampTshirt.getName(), twoStampTshirt.getPrice());
console.log(customTshirt.getName(), customTshirt.getPrice());
