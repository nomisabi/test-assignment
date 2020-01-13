import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { DatePicked } from '../model/datePicked';

@Injectable({
  providedIn: 'root'
})
export class DatePickerService {
  private subject = new Subject<any>();

  setDates(date: DatePicked) {
      this.subject.next(date);
  }

  clearDates() {
      this.subject.next();
  }

  getDates(): Observable<any> {
      return this.subject.asObservable();
  }
}
