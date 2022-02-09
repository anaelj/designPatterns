import { randomCarAlagorithm } from './main/random-vehicle-algorithm';
import { randomNumbers } from './utils/random-numbers';
import { CarFactory } from './factories/car-factory';

const customerNames = ['Ana', 'Maria', 'Helena', 'Janaina', 'Tereza'];
const carFactory = new CarFactory();

for (let i = 0; i < 10; i++) {
  const name = customerNames[randomNumbers(customerNames.length)];
  const car = carFactory.pickup(name, `Carro ${randomNumbers(1000)}`);
  car.stop();
  console.log('---');
}
