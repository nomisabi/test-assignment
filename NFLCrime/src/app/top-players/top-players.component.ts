import { Component, OnInit } from '@angular/core';
import { Player } from '../model/player';
import { TopPlayersForCrimeService } from '../services/top-players-for-crime.service';
import { ActivatedRoute } from '@angular/router';
import { TopCrimesService } from '../services/top-crimes.service';
import { Crime } from '../model/crime';

@Component({
  selector: 'app-top-players',
  templateUrl: './top-players.component.html',
  styleUrls: ['./top-players.component.css']
})
export class TopPlayersComponent implements OnInit {

  selected:any={}
  crimes:Crime[]=[]
  displayedColumns: string[] = ['Name', 'arrest_count'];
  dataSource:Player[] = [];
  bigger;
  smaller;

  constructor(private playerService:TopPlayersForCrimeService,
    private crimeService:TopCrimesService) { }

  ngOnInit() {
    //getting crimes
    this.crimeService.getTopCrimes().then(
      res=>this.crimes=res
    )
  
  }

  // when the crime is chosen, get top players
  select(){
    console.log(this.selected)
    this.playerService.getTopPlayersForCrime(this.selected.Category).then(
      res=> this.dataSource=res
    )
    this.smaller=NaN
    this.bigger=NaN
  }

  filterBigger(){
    if (this.bigger==null){
      this.playerService.getTopPlayersForCrime(this.selected.Category).then(
        res=> this.dataSource=res
      )
      if (this.smaller!=null)
        this.filterSmaller()
    }
    else{
      let filtered=[]
      for (let player of this.dataSource)
        if (player.arrest_count>this.bigger)
          filtered.push(player)

      this.dataSource=filtered    
    }
  }

  filterSmaller(){
    console.log(this.smaller)
    if (this.smaller==null){
      console.log('i am here')
      this.playerService.getTopPlayersForCrime(this.selected.Category).then(
        res=> this.dataSource=res
      )
      if (this.bigger!=null)
        this.filterBigger()
    } else {
        let filtered=[]
        for (let player of this.dataSource)
          if (player.arrest_count<this.smaller)
            filtered.push(player)
  
        this.dataSource=filtered    
      }
    }


}
