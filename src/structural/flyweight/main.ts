import { DeliveryFactory } from './delivery/delivery-factory';
import { deliveeryContext } from './delivery/delivery-context';
const factory = new DeliveryFactory();
deliveeryContext(factory, 'Luis', '20s', 'Av Brasil', 'Campo Grande');

console.log(factory.getLocations());
