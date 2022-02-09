import { Vehicle } from './../vehicle/vehicle';
import { CarFactory } from './../factories/car-factory';
import { BicycleFactory } from '../factories/bicycle-factory';
import { randomNumbers } from './../utils/random-numbers';

export function randomCarAlagorithm(): Vehicle {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();
  const fusca = carFactory.getVehicle('Fusca');
  const celta = carFactory.getVehicle('Celta');
  const caloi = bicycleFactory.getVehicle('Caloi 10');

  const vehicles = [fusca, celta, caloi];

  return vehicles[randomNumbers(vehicles.length)];
}
