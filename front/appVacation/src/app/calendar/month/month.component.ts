import {Component, Input, OnInit} from "@angular/core";
import * as moment from 'moment';
import {Vacation} from "../../models/vacation";

@Component({
    moduleId: module.id,
    templateUrl: 'month.component.html',
    styleUrls:['month.component.scss'],
    selector:'month',
})

export class MonthComponent implements OnInit {
    @Input() month: number;
    @Input() year:number;
    @Input() vacations: Vacation[];

    weeks: any[] = Array();
      constructor() {
    }

    ngOnInit() {
      this.initWeeks();
    }

    initWeeks() {
      let firstWeek = moment().year(this.year).month(this.month).date(1).isoWeek();
      for(let i = firstWeek; moment().year(this.year).month(this.month).isoWeek(i).isoWeekday(1) < moment().year(this.year).month(this.month + 1).date(1); i++) {
        this.weeks.push(i);
      }
    }
}
