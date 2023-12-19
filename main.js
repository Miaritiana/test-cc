import promptSync from 'prompt-sync';
import {displayMenu} from "./menu.js";
const prompt = promptSync();

export const riceCooker = {
  ricePresent: false,
  riceCooked: false,
  steamingInProgress: false,
  heatingInProgress: false,

  addRice() {
    if (!this.ricePresent) {
      this.ricePresent = true;
      console.log('Rice has been added.');
    }
    console.log('There\'s already rice in the rice cooker.');
  },

  cookRice() {
    if (this.ricePresent) {
      if(this.riceCooked){
        console.log('Cooking rice...');
        this.delaySync(1500);
        this.riceCooked = true;
        console.log('The rice has been cooked!');
      }
      console.log('The rice is already cooked.');
    }
    console.log('Cannot cook. The rice cooker is empty.');
  },

  steam() {
    if (this.ricePresent) {
      if(!this.steamingInProgress){
        console.log('Steaming in progress...');
        this.steamingInProgress = true;
        this.delaySync(1500);
        this.steamingInProgress = false;
        console.log('Steaming completed!');
      }
      console.log('Steaming is already in progress.');
    }
    console.log('Cannot steam. The rice cooker is empty.');
  },

  keepWarm() {
    if (this.ricePresent) {
      if(this.riceCooked ){
        if(!this.heatingInProgress){
            console.log('The rice is now being kept warm.');
            this.heatingInProgress = true;
        }
      }
      console.log('Cannot keep warm. The rice is not cooked.');
    } else {
      console.log('Cannot keep warm. The rice cooker is empty.');
    }
    console.log('Keeping warm is already in progress.');
  },

  removeRice() {
    if (this.ricePresent && (this.riceCooked || this.heatingInProgress)) {
      this.ricePresent = false;
      this.riceCooked = false;
      this.steamingInProgress = false;
      this.heatingInProgress = false;
      console.log('The rice has been removed from the rice cooker.');
    } else {
      console.log('There\'s no rice to remove or it is not cooked yet.');
    }
  },

  delaySync(ms) {
    const start = Date.now();
    while (Date.now() - start < ms) {
    }
  },
};


export function simulateRiceCooker() {
  let input;
  const condition = true;

  while (condition) {
    displayMenu();
    input = prompt('Enter your choice: ');
    const choice = parseInt(input);

    switch (choice) {
        case 1:
            riceCooker.addRice();
        case 2:
            riceCooker.cookRice();
        case 3:
            riceCooker.steam();
        case 4:
            riceCooker.keepWarm();
        case 5:
            riceCooker.removeRice();
        case 6:
            console.log('Thank you for using the Rice Cooker Simulator. Goodbye!');
            break;    
        default:
            console.log('Invalid input. Please enter a valid number.');
    }    
  }
}   

simulateRiceCooker();