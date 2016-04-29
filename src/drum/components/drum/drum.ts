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

  constructor() {
    this.useSequenceOne();
  }

  updateBpm(value: number) {
    if (value >= 60 && value <= 240) {
      this.currentSequence.bpm = value;
    }
  }

  stop() {
    if (this.currentSequence) {
      this.currentSequence.stop();
    }
  }

  play() {
    if (this.currentSequence) {
      this.currentSequence.play();
    }
  }

  useSequenceOne() {
    this.stop();

    const sequenceOne = require('../../sequences/one.json').sequence;
    this.currentSequence = new Sequence();
    this.currentSequence.setSteps(sequenceOne);
  }
}
