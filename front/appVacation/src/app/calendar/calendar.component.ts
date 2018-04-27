import {Component, OnInit} from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: 'calendar.component.html',
    selector: 'calendar'
})

export class CalendarComponent implements OnInit {

    months: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    year: number = 2018;

    constructor() {
    }

    ngOnInit() {
    }
}
