import {Component} from 'angular2/core';
import {NgClass} from 'angular2/common';

import Sequence from '../../models/sequence';
import DrumService from '../../services/drum';

import './sequence.scss';

@Component({
    selector: 'ml-drum-sequence',
    directives: [NgClass],
    template: require('./sequence.html'),
})
export default class SequenceComponent {
  currentSequence: Sequence;
  sequenceList: string[] = ['one', 'two', 'three'];

  constructor(drumService: DrumService) {
    this.switchSequence('one');

    drumService.onPlay(this.play.bind(this));
    drumService.onPause(this.pause.bind(this));
    drumService.onStop(this.stop.bind(this));
  }

  addSteps() {
    this.currentSequence.addEmptySteps();
  }

  removeSteps() {
    this.currentSequence.removeSteps();
  }

  updateBpm(value: number) {
    this.currentSequence.bpm = value;
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
