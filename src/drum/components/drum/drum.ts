import {Component} from 'angular2/core';
import {NgClass} from 'angular2/common';

import DrumService from '../../services/drum';

import SequenceComponent from '../sequence/sequence';

import './drum.scss';

@Component({
    selector: 'ml-drum',
    directives: [NgClass, SequenceComponent],
    providers: [DrumService],
    template: require('./drum.html'),
})
export default class DrumComponent {
  private drumService: DrumService;

  get sequenceList(): string[] {
    return ['one', 'two', 'three'];
  }

  constructor(drumService: DrumService) {
    this.drumService = drumService;
  }

  stop() {
    this.drumService.stop();
  }

  pause() {
      this.drumService.pause();
  }

  play() {
      this.drumService.play();
  }

  addSteps() {
    this.drumService.addSteps();
  }

  removeSteps() {
    this.drumService.removeSteps();
  }

  switchSequence(num: string) {
    if (this.sequenceList.indexOf(num) > -1) {
      this.stop();

      const sequence = require(`../../sequences/${num}.json`).sequence;
      this.drumService.switchSequence(sequence);
    }
  }
}
