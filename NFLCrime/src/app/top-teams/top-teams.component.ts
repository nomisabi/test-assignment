import { Component, OnInit } from '@angular/core';
import { Crime } from '../model/crime';
import { Team } from '../model/team';
import { TopTeamsForCrimeService } from '../services/top-teams-for-crime.service';
import { TopCrimesService } from '../services/top-crimes.service';

@Component({
  selector: 'app-top-teams',
  templateUrl: './top-teams.component.html',
  styleUrls: ['./top-teams.component.css']
})
export class TopTeamsComponent implements OnInit {

  selected:any={}
  crimes:Crime[]=[]
  displayedColumns: string[] = ['Team', 'Team_name', 'Team_city', 'arrest_count'];
  dataSource:Team[] = [];
  smaller=null;
  bigger=null;
  // mode 0=no filer, mode= 1 bigger, mode 2= smaller, mode3 = both
  mode=0

  constructor(private teamService:TopTeamsForCrimeService,
    private crimeService:TopCrimesService) { }

  ngOnInit() {
    // getting the crimes to choose
    this.crimeService.getTopCrimes().then(
      res=>this.crimes=res
    )
  
  }

  select(){
    // when the crime is chosen, get top teams
    console.log(this.selected)
    this.teamService.getTopTeamsForCrime(this.selected.Category).then(
      res=> this.dataSource=res
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
