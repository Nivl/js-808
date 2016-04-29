import {Howl} from 'howler';

import { INote, INoteOptions } from './inote';

class Note implements INoteOptions {
  isEnabled: boolean = false;
  velocity: number = 1;

  constructor(data: INoteOptions) {
    this.isEnabled = data.isEnabled || false;
    this.velocity = data.velocity || 1;
  }

  playSound(fileName: string) {
    if (fileName && fileName.length && this.isEnabled && this.velocity > 0) {
      new Howl({
        urls: [require(`../sounds/pack_1/${fileName}`)],
        loop: false,
        volume: this.velocity,
      }).play();
    }
  }
}

export class Kick extends Note implements INote {
  sound: string = 'kick.wav';

  play() {
    this.playSound(this.sound);
  }
}

export class Snare extends Note implements INote {
  sound: string = 'snare.wav';

  play() {
    this.playSound(this.sound);
  }
}

export class HhOpen extends Note implements INote {
  sound: string = 'hh_open.wav';

  play() {
    this.playSound(this.sound);
  }
}

export class HhClose extends Note implements INote {
  sound: string = 'hh_close.wav';

  play() {
    this.playSound(this.sound);
  }
}
