import {Component} from 'angular2/core';
import Sequence from '../../models/sequence';

import './drum.scss';

@Component({
    selector: 'ml-drum',
    template: require('./drum.html'),
})
export default class DrumComponent {
  currentSequence: Sequence;

  constructor() {
    this.useSequenceOne();
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
