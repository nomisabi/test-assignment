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

  constructor(private crimeService:TopCrimesService) { }

  ngOnInit() {
    // getting the crimes
    this.crimeService.getTopCrimes().then(
      res=>this.dataSource=res
    )
  }

}
