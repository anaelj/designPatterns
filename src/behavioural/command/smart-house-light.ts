export class SmartHouseLight {
  private isOn = false;
  private intensity = 50;

  constructor(public name: string) {}

  getPowerStatus(): string {
    return this.isOn ? 'ON' : 'OFF';
  }

  on(): boolean {
    this.isOn = true;
    console.log(`Luz ${this.name} ligada...`);
    return this.isOn;
  }
  off(): boolean {
    this.isOn = false;
    console.log(`Luz ${this.name} desligada...`);
    return this.isOn;
  }
  increseIntensity(): number {
    if (this.intensity >= 100) return this.intensity;
    this.intensity += 1;
    return this.intensity;
  }
  decreseIntensity(): number {
    if (this.intensity <= 0) return this.intensity;
    this.intensity -= 1;
    return this.intensity;
  }
}
