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

      console.log('start');
      this.isPlaying = true;
      this.playNext(0);
    }
  }

  private playNext(i) {
    if (this.isPlaying) {
      console.log(this.currentSequence.bpm, typeof this.currentSequence.bpm);

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
    this.currentSequence = new Sequence();
    this.currentSequence.setSteps([
      {
        kick: { isEnabled: true, },
        snare: { },
        hhOpen: { },
        hhClose: { isEnabled: true, },
      },
      {
        kick: { },
        snare: { },
        hhOpen: { },
        hhClose: { },
      },
      {
        kick: { },
        snare: { },
        hhOpen: { isEnabled: true, },
        hhClose: { },
      },
      {
        kick: { },
        snare: { },
        hhOpen: { },
        hhClose: { },
      },
      {
        kick: { isEnabled: true, },
        snare: { isEnabled: true, },
        hhOpen: { },
        hhClose: { isEnabled: true, },
      },
      {
        kick: { },
        snare: { },
        hhOpen: { },
        hhClose: { },
      },
      {
        kick: { },
        snare: { },
        hhOpen: { isEnabled: true, },
        hhClose: { },
      },
      {
        kick: { },
        snare: { },
        hhOpen: { },
        hhClose: { },
      },
      {
        kick: { isEnabled: true, },
        snare: { },
        hhOpen: { },
        hhClose: { isEnabled: true, },
      },
      {
        kick: { },
        snare: { },
        hhOpen: { },
        hhClose: { },
      },
      {
        kick: { },
        snare: { },
        hhOpen: { isEnabled: true, },
        hhClose: { },
      },
      {
        kick: { },
        snare: { },
        hhOpen: { },
        hhClose: { },
      },
      {
        kick: { isEnabled: true, },
        snare: { isEnabled: true, },
        hhOpen: { },
        hhClose: { isEnabled: true, },
      },
      {
        kick: { },
        snare: { },
        hhOpen: { },
        hhClose: { },
      },
      {
        kick: { },
        snare: { },
        hhOpen: { isEnabled: true, },
        hhClose: { },
      },
      {
        kick: { },
        snare: { },
        hhOpen: { },
        hhClose: { },
      }
    ]);
  }
}
