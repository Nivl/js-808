import {Kick, Snare, HhOpen, HhClose} from './instruments';
import {INoteOptions} from './inote';

export interface IStepOptions {
  kick?: INoteOptions;
  snare?: INoteOptions;
  hhOpen?: INoteOptions;
  hhClose?: INoteOptions;
}

export class Step {
  isPlaying: boolean = false;
  kick: Kick;
  snare: Snare;
  hhOpen: HhOpen;
  hhClose: HhClose;

  constructor(data: IStepOptions = {}) {
    this.kick = new Kick(data.kick || {});
    this.snare = new Snare(data.snare || {});
    this.hhOpen = new HhOpen(data.hhOpen || {});
    this.hhClose = new HhClose(data.hhClose || {});
  }

  play() {
    this.isPlaying = true;
    this.kick.play();
    this.snare.play();
    this.hhOpen.play();
    this.hhClose.play();
  }
}
