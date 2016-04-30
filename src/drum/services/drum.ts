import { EventEmitter, Injectable } from 'angular2/core';
import { IStepOptions } from '../models/step';

@Injectable()
export default class DrumService {
  private _play: EventEmitter<boolean> = new EventEmitter();
  private _pause: EventEmitter<boolean> = new EventEmitter();
  private _stop: EventEmitter<boolean> = new EventEmitter();
  private _addSteps: EventEmitter<boolean> = new EventEmitter();
  private _removeSteps: EventEmitter<boolean> = new EventEmitter();
  private _switchSequence: EventEmitter<IStepOptions[]> = new EventEmitter();

  play() {
    this._play.emit(true);
  }

  onPlay(callback) {
    this._play.subscribe(callback);
  }

  pause() {
    this._pause.emit(true);
  }

  onPause(callback) {
    this._pause.subscribe(callback);
  }

  stop() {
    this._stop.emit(true);
  }

  onStop(callback) {
    this._stop.subscribe(callback);
  }

  addSteps() {
    this._addSteps.emit(true);
  }

  onAddSteps(callback) {
    this._addSteps.subscribe(callback);
  }

  removeSteps() {
    this._removeSteps.emit(true);
  }

  onRemoveSteps(callback) {
    this._removeSteps.subscribe(callback);
  }

  switchSequence(sequence: IStepOptions[]) {
    this._switchSequence.emit(sequence);
  }

  onSwitchSequence(callback) {
    this._switchSequence.subscribe(callback);
  }
}
