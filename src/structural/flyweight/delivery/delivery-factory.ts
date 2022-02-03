import { DeliveryProtocol } from './delivery-protocol';
import { DeliveryLocation } from './delivery-location';
import {
  DeliveryLocationData,
  DeliveryLocationDictionary,
} from './delivery-types';

export class DeliveryFactory {
  private locations: DeliveryLocationDictionary = {};

  private createId(data: DeliveryLocationData): string {
    return Object.values(data)
      .map((item) => item.replace(/\s+/, '').toLowerCase())
      .join('_');
  }

  makeLocation(instrinsicState: DeliveryLocationData): DeliveryProtocol {
    const key = this.createId(instrinsicState);
    if (key in this.locations) return this.locations[key];
    this.locations[key] = new DeliveryLocation(instrinsicState);
    return this.locations[key];
  }

  getLocations(): DeliveryLocationDictionary {
    return this.locations;
  }
}
