import { DeliveryProtocol } from './delivery-protocol';

export type DeliveryLocationData = {
  readonly street: string;
  readonly city: string;
};

export type DeliveryLocationDictionary = { [R: string]: DeliveryProtocol };
