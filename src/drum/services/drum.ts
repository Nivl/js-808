import { EventEmitter, Injectable } from 'angular2/core';

@Injectable()
export default class DrumService {
  private _play: EventEmitter<boolean> = new EventEmitter();
  private _pause: EventEmitter<boolean> = new EventEmitter();
  private _stop: EventEmitter<boolean> = new EventEmitter();

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
}
