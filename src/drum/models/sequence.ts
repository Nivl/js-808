import {Step, IStepOptions} from './step';

export default class Sequence {
  bpm: Number = 60;
  steps: Step[] = [];

  constructor(bpm: Number = 60) {
    this.bpm = bpm;
  }

  setSteps(steps: IStepOptions[]) {
    this.steps = [];

    for (let elem of steps) {
      this.steps.push(new Step(elem));
    }
  }
}
