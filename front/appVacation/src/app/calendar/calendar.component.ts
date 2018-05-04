import {Component, OnInit} from "@angular/core";
import * as moment from 'moment';

@Component({
    moduleId: module.id,
    templateUrl: 'calendar.component.html',
    styleUrls:['calendar.component.scss'],
    selector: 'calendar'
})

export class CalendarComponent implements OnInit {

    seasons: any[] = [0, 1, 2, 3];
    year: number = 2018;

    constructor() {
    }

    ngOnInit() {
    }
}
