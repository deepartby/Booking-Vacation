import { Moment } from 'moment';

export class Day {
  constructor(date: Moment) {
    this.date = date;
  }

  date: Moment;
}
