import { INote, INoteOptions } from './inote';

class Note implements INoteOptions {
  isEnabled: boolean = false;
  velocity: Number = 1;

  constructor(data: INoteOptions) {
    this.isEnabled = data.isEnabled || false;
    this.velocity = data.velocity || 1;
  }
}

export class Kick extends Note implements INote {
  sound: String = 'kick.wav';
}

export class Snare extends Note implements INote {
  sound: String = 'snare.wav';
}

export class HhOpen extends Note implements INote {
  sound: String = 'hh_open.wav';
}

export class HhClose extends Note implements INote {
  sound: String = 'hh_close.wav';
}
