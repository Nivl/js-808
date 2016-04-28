import {Component} from 'angular2/core';
import DrumComponent from '../../../drum/components/drum/drum';

import './app.scss';
import 'font-awesome/css/font-awesome.min.css'

@Component({
    selector: 'my-app',
    template: require('./app.html'),
    directives: [DrumComponent],
})
export class AppComponent { }
