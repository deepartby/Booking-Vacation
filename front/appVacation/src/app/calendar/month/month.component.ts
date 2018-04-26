import {Component, Input, OnInit} from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: 'month.component.html',
    styleUrls:['month.component.scss'],
    selector:'month',
})

export class MonthComponent implements OnInit {
    @Input() month: number;
    constructor() {
    }

    ngOnInit() {
    }
}
