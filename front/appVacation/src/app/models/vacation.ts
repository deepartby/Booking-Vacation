import { Moment } from 'moment';

export class Vacation {
  constructor(dateFrom: Moment, dateTo: Moment, color: string) {
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;
    this.color = color;
  }

  dateFrom: Moment;
  dateTo: Moment;
  color: string;
}
