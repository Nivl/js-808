import {Step, IStepOptions} from './step';

export default class Sequence {
  bpm: number = 60;
  steps: Step[] = [];
  isPlaying: boolean = false;

  constructor(bpm: number = 60) {
    this.bpm = bpm;
  }

  setSteps(steps: IStepOptions[]) {
    this.steps = [];

    for (let elem of steps) {
      this.steps.push(new Step(elem));
    }
  }

  isValid(): boolean {
    return ((this.steps.length) > 0 && (this.steps.length % 4 === 0));
  }

  play() {
    if (this.isPlaying === false && this.isValid()) {
      this.isPlaying = true;
      this.playNext(0);
    }
  }

  stop() {
    this.isPlaying = false;
  }

  private playNext(i) {
    if (this.isPlaying) {
      const waitTime = ((60 / this.bpm) / 4) * 1000;
      this.steps[i].play();

      setTimeout(() => {
        const nextIndex = (i + 1 === this.steps.length) ? (0) : (i + 1);
        this.steps[i].isPlaying = false;
        this.playNext(nextIndex);
      }, waitTime);
    }
  }
}
