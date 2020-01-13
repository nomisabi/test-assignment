import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopCrimesService } from './services/top-crimes.service';
import { TopPlayersForCrimeService } from './services/top-players-for-crime.service';
import { TopTeamsForCrimeService } from './services/top-teams-for-crime.service';
import { TopCrimesComponent } from './top-crimes/top-crimes.component';
import { TopPlayersComponent } from './top-players/top-players.component';
import { TopTeamsComponent } from './top-teams/top-teams.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule, MatDatepickerModule,MatFormFieldModule,MatInputModule } from "@angular/material";
import { FormsModule } from '@angular/forms';
import { SmallerPipe } from './pipes/smaller.pipe';
import { BiggerPipe } from './pipes/bigger.pipe';
import { CrimeTimeLineComponent } from './crime-time-line/crime-time-line.component';
import { CrimeTimeLineService } from './services/crime-time-line.service';

@NgModule({
  declarations: [
    AppComponent,
    TopCrimesComponent,
    TopPlayersComponent,
    TopTeamsComponent,
    SmallerPipe,
    BiggerPipe,
    CrimeTimeLineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule, 
    MatSelectModule,
    FormsModule,
    MatFormFieldModule
  ],
  providers: [
    TopCrimesService,
    MatDatepickerModule,
    TopPlayersForCrimeService,
    TopTeamsForCrimeService,
    CrimeTimeLineService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
