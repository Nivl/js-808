import { INote, INoteOptions } from './inote';
import { Kick, Snare, HhOpen, HhClose } from './instruments';

describe('Instruments', () => {
  it('has default options', () => {
    const kick: Kick = new Kick();
    expect(kick.isEnabled).toEqual(false);
    expect(kick.velocity).toEqual(1);
    expect(kick.sound).toEqual('kick.wav');
  });

  it('is enabled', () => {
    const kick: Kick = new Kick({isEnabled: true, velocity: 0.5});
    expect(kick.isEnabled).toEqual(true);
  });

  it('Has Velocity', () => {
    const kick: Kick = new Kick({isEnabled: true, velocity: 0.5});
    expect(kick.velocity).toEqual(0.5);
  });
});
