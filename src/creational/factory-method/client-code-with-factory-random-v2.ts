import { randomCarAlagorithm } from './main/random-vehicle-algorithm';
import { randomNumbers } from './utils/random-numbers';

const customerNames = ['Ana', 'Maria', 'Helena', 'Janaina', 'Tereza'];

for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlagorithm();
  const name = customerNames[randomNumbers(customerNames.length)];
  vehicle.pickup(name);
  vehicle.stop();
  console.log('---');
}
