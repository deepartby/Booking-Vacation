import {Component, Input, OnInit} from "@angular/core";
import * as moment from 'moment';


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

    firstDayWeek: any = null;
    lastDayWeek: any = null;

    vacations: any[] = [];

    colors: any[] = ['#03436A','#4C57D8','#7279D8','#F96F99','#FFDA73'];

    constructor() {
    }

    ngOnInit() {
      this.initDays();
    }

    initDays() {
      this.firstDayWeek = moment().year(this.year).isoWeek(this.week).day(1);
      this.lastDayWeek = moment().year(this.year).isoWeek(this.week).day(7);

      if (this.week == moment().year(this.year).month(this.month).date(1).isoWeek()) {
        this.firstDayWeek = moment().year(this.year).month(this.month).date(1);
      }

      if (this.week == moment().year(this.year).month(this.month + 1).date(0).isoWeek()) {
        this.lastDayWeek = moment().year(this.year).month(this.month + 1).date(0);
      }
    }

}
