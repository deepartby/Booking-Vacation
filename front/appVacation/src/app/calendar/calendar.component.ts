import {Component, OnInit} from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: 'calendar.component.html',
    selector: 'calendar'
})

export class CalendarComponent implements OnInit {

    months: any[] = new Array(12);
    constructor() {
    }

    ngOnInit() {
    }
}
