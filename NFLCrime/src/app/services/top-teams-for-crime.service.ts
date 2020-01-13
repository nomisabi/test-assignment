import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopTeamsForCrimeService {

  private api="http://nflarrest.com/api/v1/crime/topTeams/"

  constructor(private http: HttpClient) {
  }

  //getting the top teams for a crime by crime id
  getTopTeamsForCrime(crimeID:string){
    return this.http.get(this.api+crimeID)
    .toPromise()
    .then(res=>res)
    .catch(this.handleError);
  }

  // error handling
  private handleError(error: any): Promise<any> {
    console.error("Error... ", error);
    return Promise.reject(error.message || error);
  }
}
