import {Component} from 'angular2/core';
import {NgClass} from 'angular2/common';

import Sequence from '../../models/sequence';
import { IStepOptions } from '../../models/step';
import DrumService from '../../services/drum';

import './sequence.scss';

@Component({
    selector: 'ml-drum-sequence',
    directives: [NgClass],
    template: require('./sequence.html'),
})
export default class SequenceComponent {
  private _currentSequence: Sequence = new Sequence();

  get currentSequence(): Sequence {
    return this._currentSequence;
  }

  constructor(drumService: DrumService) {
    drumService.onPlay(this.play.bind(this));
    drumService.onPause(this.pause.bind(this));
    drumService.onStop(this.stop.bind(this));
    drumService.onAddSteps(this.addSteps.bind(this));
    drumService.onRemoveSteps(this.removeSteps.bind(this));
    drumService.onSwitchSequence(this.switchSequence.bind(this));
  }

  addSteps() {
    this._currentSequence.addEmptySteps();
  }

  removeSteps() {
    this._currentSequence.removeSteps();
  }

  updateBpm(value: number) {
    this._currentSequence.bpm = value;
  }

  switchSequence(sequence: IStepOptions[]) {
    this._currentSequence = new Sequence(sequence);
  }

  stop() {
    this._currentSequence.stop();
  }

  pause() {
    this.currentSequence.pause();
  }

  play() {
    this.currentSequence.play();
  }
}
