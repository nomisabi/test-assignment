import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopCrimesComponent } from './top-crimes/top-crimes.component';
import { TopPlayersForCrimeService } from './services/top-players-for-crime.service';
import { TopPlayersComponent } from './top-players/top-players.component';
import { TopTeamsForCrimeService } from './services/top-teams-for-crime.service';
import { TopTeamsComponent } from './top-teams/top-teams.component';
import { CrimeTimeLineComponent } from './crime-time-line/crime-time-line.component';


const routes: Routes = [
  {path:'crimes', component:TopCrimesComponent},
  {path:'players', component:TopPlayersComponent},
  {path:'teams', component:TopTeamsComponent},
  {path:'timeline', component:CrimeTimeLineComponent},
  {path:'**', redirectTo:'crimes'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
