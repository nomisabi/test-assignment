import { Component, OnInit } from '@angular/core';
import { DatePickerService } from '../services/date-picker.service';
import { DatePicked } from '../model/datePicked';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  dateFrom;
  dateTo;
  constructor(private datePickerService: DatePickerService) { }

  ngOnInit() {
  }

  set(){
    console.log(this.dateFrom, this.dateTo)
    let date:DatePicked={from:this.dateFrom, to:this.dateTo}
    this.datePickerService.setDates(date)
  }

  clear(){
    this.datePickerService.clearDates();
    this.dateFrom=null;
    this.dateTo=null;
  }

}
