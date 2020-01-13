import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Crime } from '../model/crime';
import { TopCrimesService } from '../services/top-crimes.service';
import { CrimeTimeLineService } from '../services/crime-time-line.service';
import { Timeline } from '../model/timeline';

@Component({
  selector: 'app-crime-time-line',
  templateUrl: './crime-time-line.component.html',
  styleUrls: ['./crime-time-line.component.css']
})
export class CrimeTimeLineComponent implements OnInit {

  selected:any={}
  crimes:Crime[]=[]
  chart:Chart;
  constructor(private crimeService:TopCrimesService,
    private timelineService: CrimeTimeLineService) { }

  ngOnInit() {
    //getting crimes
    this.crimeService.getTopCrimes().then(
      res=>this.crimes=res)
  }

  //  getting and drawing the values from the timeline
  select(){
    let results:Timeline[];
    let labels=[]
    let data=[]
    this.timelineService.getTimeline(this.selected.Category).then(
      res=> {
        results=res
        
        for (let date of results){
          labels.push(date.Year+'-'+date.Month)
          data.push(date.arrest_count)
        }
          
        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: labels,
            datasets: [
              { 
                data: data,
                borderColor: "#3cba9f",
                fill: false
              }
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }],
            }
          }
      });
      }
    )
  }

}
