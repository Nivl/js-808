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

  updateBpm(value: number) {
    if (value >= 60 && value <= 240) {
      this.currentSequence.bpm = value;
    }
  }

  switchSequence(num: string) {
    if (this.sequenceList.indexOf(num) > -1) {
      this.stop();

      const sequenceOne = require(`../../sequences/${num}.json`).sequence;
      this.currentSequence = new Sequence();
      this.currentSequence.setSteps(sequenceOne);
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
}
