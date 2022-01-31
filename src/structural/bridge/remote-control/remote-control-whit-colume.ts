import { DeviceImplementation } from './../device/device-implementation';
import { RemoteControl } from './remote-control';
export class RemoteControlWithVolume extends RemoteControl {
  volumeUp(): void {
    const oldVolume = this.device.getVolume();
    this.device.setVolume(this.device.getVolume() + 2);
    console.log(
      `${this.device.getName()} thinha o volume ${oldVolume} agora tem ${this.device.getVolume()}`,
    );
  }
  volumeDown(): void {
    const oldVolume = this.device.getVolume();
    this.device.setVolume(this.device.getVolume() - 2);
    console.log(
      `${this.device.getName()} thinha o volume ${oldVolume} agora tem ${this.device.getVolume()}`,
    );
  }
}
