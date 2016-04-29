import {Step, IStepOptions} from './step';

export default class Sequence {
  bpm: number = 60;
  steps: Step[] = [];
  isPlaying: boolean = false;
  currentStep: number = -1;

  constructor(bpm: number = 60) {
    this.bpm = bpm;
  }

  setSteps(steps: IStepOptions[]) {
    this.steps = [];

    for (let elem of steps) {
      this.steps.push(new Step(elem));
    }
  }

  addEmptySteps() {
    const emptyStep = {
      kick: {},
      snare: {},
      hhOpen: {},
      hhClose: {},
    };

    if (this.steps.length / 4 < 32) {
      console.log(`adding ${this.steps.length / 4}(${this.steps.length}) more steps`);

      const numberToAdd = this.steps.length;

      for (let i = 0; i < numberToAdd; i++) {
        console.log(i);
        this.steps.push(new Step(emptyStep));
      }
    }
  }

  removeSteps() {
    if (this.steps.length / 4 > 4) {
      this.steps.splice(-(this.steps.length/2));
    }
  }

  isValid(): boolean {
    return ((this.steps.length) > 0 && (this.steps.length % 4 === 0));
  }

  play() {
    if (this.isPlaying === false && this.isValid()) {
      this.isPlaying = true;
      // We clean the UI to clear the Pause mark
      this.cleanStepUI();
      // We bump the step to avoid replaying the same beat on pause/play
      this.bumpCurrentStep();
      this.playNextStep();
    }
  }

  stop() {
    this.isPlaying = false;
    this.cleanStepUI();
    this.currentStep = -1;
  }

  pause() {
    this.isPlaying = false;
  }

  private bumpCurrentStep() {
    this.currentStep = (this.currentStep + 1 < this.steps.length) ? (this.currentStep + 1) : (0);
  }

  private cleanStepUI() {
    if (this.currentStep >= 0 && this.currentStep < this.steps.length) {
      this.steps[this.currentStep].isPlaying = false;
    }
  }

  private playNextStep() {
    const waitTime = ((60 / this.bpm) / 4) * 1000;
    this.steps[this.currentStep].play();

    setTimeout(() => {
      if (this.isPlaying) {
        this.cleanStepUI();
        this.bumpCurrentStep();
        this.playNextStep();
      }
    }, waitTime);
  }
}
