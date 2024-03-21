import {GuiController} from "./GuiController.js"
import {AppController  } from "./AppController.js"

let appInstance = new AppController;


appInstance.setGuiController(new GuiController());


export {appInstance};