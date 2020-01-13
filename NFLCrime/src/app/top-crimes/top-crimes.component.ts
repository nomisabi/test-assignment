import { Component, OnInit } from '@angular/core';
import { Crime } from '../model/crime';
import { TopCrimesService } from '../services/top-crimes.service';

@Component({
  selector: 'app-top-crimes',
  templateUrl: './top-crimes.component.html',
  styleUrls: ['./top-crimes.component.css']
})
export class TopCrimesComponent implements OnInit {

  displayedColumns: string[] = ['Category', 'arrest_count'];
  dataSource:Crime[] = [];
  smaller=null;
  bigger=null;
  // mode 0=no filer, mode= 1 bigger, mode 2= smaller, mode3 = both
  mode=0;

  constructor(private crimeService:TopCrimesService) { }

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

}
