import {Component, Input, OnInit} from "@angular/core";
import * as moment from 'moment';
import {Day} from "../../models/day";
import {Vacation} from "../../models/vacation";


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
    @Input() vacations: Vacation[];

    dayVacations: {[day: number]: Vacation[]; } = {};

    firstDayWeek: any = null;
    lastDayWeek: any = null;

    days: Day[] = [];
    colors: any[] = ['#03436A','#4C57D8','#7279D8','#F96F99','#FFDA73'];

    constructor() {
    }

    ngOnInit() {
      this.initFirstAndLastDayWeek();
      this.initDays();
      this.initVacations();
    }

    initFirstAndLastDayWeek() {
      this.firstDayWeek = moment().year(this.year).isoWeek(this.week).day(1);
      this.lastDayWeek = moment().year(this.year).isoWeek(this.week).day(7);

      if (this.week == moment().year(this.year).month(this.month).date(1).isoWeek()) {
        this.firstDayWeek = moment().year(this.year).month(this.month).date(1);
      }

      if (this.week == moment().year(this.year).month(this.month + 1).date(0).isoWeek()) {
        this.lastDayWeek = moment().year(this.year).month(this.month + 1).date(0);
      }
    }

    isFirstWeek() {
      return this.week == moment().year(this.year).month(this.month).date(1).isoWeek();
    }

    initDays() {
      for (let i = 0; i < this.lastDayWeek.diff(this.firstDayWeek, 'days') + 1; i++) {
        this.days.push(new Day(moment(this.firstDayWeek).add(i,'days')));
      }
    }

    initVacations() {
      for (let day of this.days) {
        this.dayVacations[day.date.isoWeekday()] = this.filterVacations(day);
      }
    }

    filterVacations(day) {
      return this.vacations.filter((vacation) =>
        day.date.isBetween(vacation.dateFrom, moment(vacation.dateTo).add(1, 'days')))
    }

}
