import { Customer } from './../customer/customer';
import { Vehicle } from './../vehicle/vehicle';
import { EnterpriseCustomer } from './../customer/enterprice-customer';
import { EnterpriseCar } from './../vehicle/enterprise-car';

export class EnterpriseCreateVehicleCustomerFactory {
  createCustomer(customerName: string): Customer {
    return new EnterpriseCustomer(customerName);
  }

  createVehicle(vehicleName: string, customerName: string): Vehicle {
    const customer = this.createCustomer(customerName);
    return new EnterpriseCar(vehicleName, customer);
  }
}
