import { DeviceImplementation } from './device-implementation';
export class Radio implements DeviceImplementation {
  private volume = 10;

  setPower(powerStatus: boolean): void {
    this.power = powerStatus;
  }

  getName(): string {
    return this.name;
  }
  getPower(): boolean {
    return this.power;
  }
  setVolume(volume: number): void {
    if (volume < 0) return;
    if (volume > 100) return;
    this.volume = volume;
  }
  getVolume(): number {
    return this.volume;
  }
  private power = false;
  private name = 'Radio';
}
