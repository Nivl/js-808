import { INote, INoteOptions } from './inote';

class Note implements INoteOptions {
  isEnabled: boolean = false;
  velocity: number = 1;

  constructor(data: INoteOptions) {
    this.isEnabled = data.isEnabled || false;
    this.velocity = data.velocity || 1;
  }
}

export class Kick extends Note implements INote {
  sound: string = 'kick.wav';
}

export class Snare extends Note implements INote {
  sound: string = 'snare.wav';
}

export class HhOpen extends Note implements INote {
  sound: string = 'hh_open.wav';
}

export class HhClose extends Note implements INote {
  sound: string = 'hh_close.wav';
}
