import { Component, OnInit } from '@angular/core';
import { Crime } from '../model/crime';
import { TopCrimesService } from '../services/top-crimes.service';
import { Subscription } from 'rxjs';
import { DatePickerService } from '../services/date-picker.service';
import { DatePicked } from '../model/datePicked';

@Component({
  selector: 'app-top-crimes',
  templateUrl: './top-crimes.component.html',
  styleUrls: ['./top-crimes.component.css']
})
export class TopCrimesComponent implements OnInit {
  dates: DatePicked;
  subscription: Subscription;
  displayedColumns: string[] = ['Category', 'arrest_count'];
  dataSource:Crime[] = [];
  smaller=null;
  bigger=null;
  // mode 0=no filer, mode= 1 bigger, mode 2= smaller, mode3 = both
  mode=0;

  constructor(private crimeService:TopCrimesService,
    private datePickerService: DatePickerService) { 
      this.subscription= this.datePickerService.getDates().subscribe(dates => {
        console.log(JSON.stringify(dates))
        this.dates = dates; });
    }

  ngOnInit() {
    // getting the crimes
    this.crimeService.getTopCrimes().then(
      res=>this.dataSource=res
    )
  }

  filterBigger(){
    if (this.bigger==null){
      if (this.smaller!=null)
        this.mode=2
      else 
        this.mode=0
    }
    else{
      if (this.smaller!=null)
        this.mode=3
      else
        this.mode=1 
    }
  }

  filterSmaller(){
    console.log(this.smaller)
    if (this.smaller==null){
      if (this.bigger!=null)
        this.mode=1
      else
        this.mode=0
    } else {
      if (this.bigger!=null)
        this.mode=3
      else
        this.mode=2 
      }
    }

    ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }

}
