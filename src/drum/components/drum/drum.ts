import {Component} from 'angular2/core';
import {NgClass} from 'angular2/common';

import SequenceComponent from '../sequence/sequence';

import './drum.scss';

@Component({
    selector: 'ml-drum',
    directives: [NgClass, SequenceComponent],
    providers: [],
    template: require('./drum.html'),
})
export default class DrumComponent {

}
