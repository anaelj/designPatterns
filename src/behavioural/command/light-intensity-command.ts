import { SmartHouseLight } from './smart-house-light';
import { SmartHouseCommand } from './command';
export class LightIntensityCommand implements SmartHouseCommand {
  constructor(private readonly light: SmartHouseLight) {}
  execute(): void {
    const intensity = this.light.increseIntensity();
    console.log(`Intensidade de ${this.light.name} é ${intensity}`);
  }
  undo(): void {
    const intensity = this.light.decreseIntensity();
    console.log(`Intensidade de ${this.light.name} é ${intensity}`);
  }
}
