import { LightningElement } from "lwc";
export default class ProgressIndicator extends LightningElement {
    currentStep=0
    totalSteps=5;
    currentLabel="Upload Profile";
}