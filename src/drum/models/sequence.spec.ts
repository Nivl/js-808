import { Step } from './step';
import { Kick, Snare, HhOpen, HhClose } from './instruments';
import Sequence from './sequence';

describe('Sequence', () => {
  it('has default options', () => {
    const seq: Sequence = new Sequence();
    expect(seq.isPlaying).toEqual(false);
    expect(seq.bpm).toEqual(60);
    expect(seq.steps.length).toEqual(4*4);
  });

  it('can parse sequence', () => {
    const seq: Sequence = new Sequence(require('../sequences/one.json').sequence);
    expect(seq.isPlaying).toEqual(false);
    expect(seq.bpm).toEqual(60);
    expect(seq.steps.length).toEqual(4*4);
  });

  it('throw on badly formated sequence', () => {
    expect(() => { new Sequence(require('../sequences/test.should-fail.json')); })
    .toThrow(new Error('The sequence provided has the wrong format'));
  });
});
