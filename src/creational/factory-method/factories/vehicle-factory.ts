import { Vehicle } from '../vehicle/vehicle';

export abstract class VehicleFactory {
  abstract getVehicle(vehicleName: string): Vehicle;

  pickup(customerName: string, vehicleName: string): Vehicle {
    const car = this.getVehicle(vehicleName);
    car.pickup(customerName);
    return car;
  }
}
