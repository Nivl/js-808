import { Step } from './step';
import { Kick, Snare, HhOpen, HhClose } from './instruments';

describe('Step', () => {
  it('has default options', () => {
    const step: Step = new Step();
    expect(step.isPlaying).toEqual(false);
    expect(step.kick.isEnabled).toEqual(false);
    expect(step.snare.isEnabled).toEqual(false);
    expect(step.hhOpen.isEnabled).toEqual(false);
    expect(step.hhClose.isEnabled).toEqual(false);
  });

  it('has kick and snare', () => {
    const step: Step = new Step({
      kick: new Kick({isEnabled: true}),
      snare: new Snare({isEnabled: true}),
    });
    expect(step.kick.isEnabled).toEqual(true);
    expect(step.snare.isEnabled).toEqual(true);
    expect(step.hhOpen.isEnabled).toEqual(false);
    expect(step.hhClose.isEnabled).toEqual(false);
  });

  it('has everything', () => {
    const step: Step = new Step({
      kick: new Kick({isEnabled: true}),
      snare: new Snare({isEnabled: true}),
      hhOpen: new HhOpen({isEnabled: true}),
      hhClose: new HhClose({isEnabled: true}),
    });
    expect(step.kick.isEnabled).toEqual(true);
    expect(step.snare.isEnabled).toEqual(true);
    expect(step.hhOpen.isEnabled).toEqual(true);
    expect(step.hhClose.isEnabled).toEqual(true);
  });
});
