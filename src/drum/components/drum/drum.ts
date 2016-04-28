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
  isPlaying: boolean = false;

  constructor() {
    this.useSequenceOne();
  }

  stop() {
    this.isPlaying = false;
  }

  play() {
    if (this.isPlaying === false) {
      if (this.currentSequence.steps.length === 0 || this.currentSequence.steps.length % 4) {
        console.error('Sequence not valid');
        return ;
      }

      this.isPlaying = true;
      this.playNext(0);
    }
  }

  private playNext(i) {
    if (this.isPlaying) {
      const waitTime = ((60 / ~~this.currentSequence.bpm) / 4) * 1000;
      this.currentSequence.steps[i].isPlaying = true;

      setTimeout(() => {
        const nextIndex = (i + 1 === this.currentSequence.steps.length) ? (0) : (i + 1);
        this.currentSequence.steps[i].isPlaying = false;
        this.playNext(nextIndex);
      }, waitTime);
    }
  }

  useSequenceOne() {
    const sequenceOne = require('../../sequences/one.json').sequence;
    console.log(sequenceOne);

    this.currentSequence = new Sequence();
    this.currentSequence.setSteps(sequenceOne);
  }
}
