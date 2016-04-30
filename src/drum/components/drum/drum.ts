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
}
