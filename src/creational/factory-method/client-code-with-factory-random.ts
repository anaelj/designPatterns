import { randomCarAlagorithm } from './main/random-vehicle-algorithm';
for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlagorithm();
  console.log(vehicle);
}
