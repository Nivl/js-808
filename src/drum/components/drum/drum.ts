import {Component} from 'angular2/core';
import {NgClass} from 'angular2/common';

import Sequence from '../../models/sequence';

import './drum.scss';

@Component({
    selector: 'ml-drum',
    directives: [NgClass],
    template: require('./drum.html'),
})
export default class DrumComponent {
  currentSequence: Sequence;
  sequenceList: string[] = ['one', 'two', 'three'];

  constructor() {
    this.switchSequence('one');
  }

  addSteps() {
    this.currentSequence.addEmptySteps();
  }

  removeSteps() {
    this.currentSequence.removeSteps();
  }

  updateBpm(value: number) {
    if (value >= 60 && value <= 240) {
      this.currentSequence.bpm = value;
    }
  }

  switchSequence(num: string) {
    if (this.sequenceList.indexOf(num) > -1) {
      this.stop();

      const sequenceOne = require(`../../sequences/${num}.json`).sequence;
      this.currentSequence = new Sequence(sequenceOne);
    }
  }

  stop() {
    if (this.currentSequence) {
      this.currentSequence.stop();
    }
  }

  pause() {
    if (this.currentSequence) {
      this.currentSequence.pause();
    }
  }

  play() {
    if (this.currentSequence) {
      this.currentSequence.play();
    }
  }
}
