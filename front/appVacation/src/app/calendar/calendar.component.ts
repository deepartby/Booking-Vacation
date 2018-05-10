import {Component, OnInit} from "@angular/core";
import * as moment from 'moment';
import {Vacation} from "../models/vacation";

@Component({
    moduleId: module.id,
    templateUrl: 'calendar.component.html',
    styleUrls:['calendar.component.scss'],
    selector: 'calendar'
})

export class CalendarComponent implements OnInit {

    year: number = 2018;
    vacations: Vacation[] = [new Vacation(moment('2018-04-01'), moment('2018-05-11'), '#03436A'),
                            new Vacation(moment('2018-05-01'), moment('2018-05-12'), '#7279D8'),
                            new Vacation(moment('2018-04-01'), moment('2018-05-13'), '#4C57D8')];
    constructor() {
    }

    ngOnInit() {
    }
}
