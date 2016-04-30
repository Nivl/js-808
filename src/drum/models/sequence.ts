import {Step, IStepOptions} from './step';

export default class Sequence {
  private _steps: Step[] = [];
  private _isPlaying: boolean = false;
  private _bpm: number = 60;
  private _currentStep: number = -1;

  get steps(): Step[] {
    return this._steps;
  }

  get currentStep(): number {
    return this._currentStep;
  }

  get isPlaying(): boolean {
    return this._isPlaying;
  }

  get maxNumberOfSteps(): number {
    return 32;
  }

  get bpm(): number {
    return this._bpm;
  }

  set bpm(value: number) {
    if (value >= 60 && value <= 240) {
      this._bpm = value;
    }
  }

  /**
   * Create a new Sequence.
   * @param  [IStepOptions[]]  steps Steps of the sequence
   *                                 Default to 4 * 4 if not provided
   *                                 Throw an error if the sequence is not valid
   */
  constructor(steps: IStepOptions[] = []) {
    if (steps.length === 0) {
      for (let i = 0; i < 4 * 4; i++) {
        this._steps.push(new Step());
      }
    } else if (this.isValid(steps)) {
      for (let elem of steps) {
        this._steps.push(new Step(elem));
      }
    } else {
      throw new Error('The sequence provided has the wrong format');
    }
  }

  addEmptySteps() {
    if (this._steps.length / 4 < this.maxNumberOfSteps) {
      const numberToAdd = this._steps.length;

      for (let i = 0; i < numberToAdd; i++) {
        this._steps.push(new Step());
      }
    }
  }

  removeSteps() {
    if (this._steps.length / 4 > 4) {
      this._steps.splice(-(this._steps.length/2));
    }
  }

  isValid(steps: IStepOptions[] = null): boolean {
    const toCheck: IStepOptions[] = steps || this._steps;

    return (
      (toCheck.length >= 4 * 4) &&
      (toCheck.length / 4 <= this.maxNumberOfSteps) &&
      (toCheck.length % 4 === 0)
    );
  }

  play() {
    if (this._isPlaying === false && this.isValid()) {
      this._isPlaying = true;
      // We clean the UI to clear the Pause mark
      this.cleanStepUI();
      // We bump the step to avoid replaying the same beat on pause/play
      this.bumpCurrentStep();
      this.playNextStep();
    }
  }

  stop() {
    this._isPlaying = false;
    this.cleanStepUI();
    this._currentStep = -1;
  }

  pause() {
    this._isPlaying = false;
  }

  private bumpCurrentStep() {
    this._currentStep = (this._currentStep + 1 < this._steps.length) ? (this._currentStep + 1) : (0);
  }

  private cleanStepUI() {
    if (this._currentStep >= 0 && this._currentStep < this._steps.length) {
      this._steps[this._currentStep].isPlaying = false;
    }
  }

  private playNextStep() {
    const waitTime = ((60 / this.bpm) / 4) * 1000;
    this._steps[this._currentStep].play();

    setTimeout(() => {
      if (this._isPlaying) {
        this.cleanStepUI();
        this.bumpCurrentStep();
        this.playNextStep();
      }
    }, waitTime);
  }
}
