import { SmartHouseLight } from './smart-house-light';
import { LightPowerCommand } from './light-power-command';
import { SmartHouseApp } from './smart-house-app';
import { LightIntensityCommand } from './light-intensity-command';

//receiver
const bedroomLight = new SmartHouseLight('quarto');
const bathroomLight = new SmartHouseLight('banheiro');

//command
const bedroomLightPowerCommand = new LightPowerCommand(bedroomLight);
const bathroomLightPowerCommand = new LightPowerCommand(bathroomLight);
const bedroomLighIntensityCommand = new LightIntensityCommand(bedroomLight);

// invoker
const smartHouseApp = new SmartHouseApp();
smartHouseApp.addCommand('btn-1', bedroomLightPowerCommand);
smartHouseApp.addCommand('btn-2', bathroomLightPowerCommand);
smartHouseApp.addCommand('btn-3', bedroomLighIntensityCommand);

smartHouseApp.executeCommand('btn-1');
smartHouseApp.executeCommand('btn-2');
smartHouseApp.undoCommand('btn-2');
smartHouseApp.executeCommand('btn-3');
smartHouseApp.executeCommand('btn-3');
smartHouseApp.undoCommand('btn-3');
