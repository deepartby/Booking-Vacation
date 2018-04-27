import {Component, Input, OnInit} from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: 'week.component.html',
    styleUrls:['week.component.scss'],
    selector:'week',
})

export class WeekComponent implements OnInit {
    @Input() week: number;
    @Input() year: number;
    @Input() month: number;

    constructor() {
    }

    ngOnInit() {
    }
}
