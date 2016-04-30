import { Step } from './step';
import { Kick, Snare, HhOpen, HhClose } from './instruments';
import Sequence from './sequence';

describe('Sequence', () => {
  it('has default options', () => {
    const seq: Sequence = new Sequence();
    expect(seq.isPlaying).toEqual(false);
    expect(seq.bpm).toEqual(60);
    expect(seq.steps.length).toEqual(0);
    expect(seq.currentStep).toEqual(-1);
  });

});
