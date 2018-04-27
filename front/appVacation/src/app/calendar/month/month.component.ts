import {Component, Input, OnInit} from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: 'month.component.html',
    styleUrls:['month.component.scss'],
    selector:'month',
})

export class MonthComponent implements OnInit {
    @Input() month: number;
    @Input() year:number;

    weeks: any[] = [1,2,3,4,5];
    constructor() {
    }

    ngOnInit() {
    }

    _getWidth(week: number) {
      if (week == 1) {
        let day = new Date(this.year, this.month - 1,1).getDay();
        day = day == 0 ? 6: day - 1;
        return 13.25 * (7 - day) + '%';
      }

      if (week == 5) {
        let day= new Date(this.year, this.month, 0).getDay();
        day = day == 0 ? 7: day;
        return 13.25 * (day) +'%';
      }
    }

    _getOffset(week:number) {
      if(week == 1) {
       let day = new Date(this.year, this.month - 1,1).getDay();
        day = day == 0 ? 6: day - 1;
        if (day != 0) {
          return 96 - 13.25 * (7 - day) + '%';
        }
      }
    }
}
