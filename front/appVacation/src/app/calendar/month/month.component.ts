import {Component, Input, OnInit} from "@angular/core";
import * as moment from 'moment';

@Component({
    moduleId: module.id,
    templateUrl: 'month.component.html',
    styleUrls:['month.component.scss'],
    selector:'month',
})

export class MonthComponent implements OnInit {
    @Input() month: number;
    @Input() year:number;

    weeks: any[] = Array();
    constructor() {
    }

    ngOnInit() {
      let firstWeek = moment().year(this.year).month(this.month).date(1).isoWeek();
      for(let i = firstWeek; moment().year(this.year).month(this.month).isoWeek(i).isoWeekday(1) < moment().year(this.year).month(this.month + 1).date(1); i++) {
        this.weeks.push(i);
      }
    }

    _getWidth(week: number) {
      if (week == this.weeks[0]) {
        let day = moment().year(this.year).month(this.month).date(1).isoWeekday() - 1;
        return 13.25 * (7 - day) + '%';
      }

      if (week == this.weeks[this.weeks.length - 1]) {
        let day= moment().year(this.year).month(this.month + 1).date(0).isoWeekday();
        return 13.25 * (day) + '%';
      }
    }

    _getOffset(week:number) {
      if (week == this.weeks[0]) {
       let day = moment().year(this.year).month(this.month).date(1).isoWeekday() - 1;
        if (day != 0) {
          return 96 - 13.25 * (7 - day) + '%';
        }
      }
    }
}
