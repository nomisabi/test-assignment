import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopPlayersForCrimeService {

  private api="http://nflarrest.com/api/v1/crime/topPlayers/"

  constructor(private http: HttpClient) {
  }

  //getting the top players for a crime by crime id
  getTopPlayersForCrime(crimeID:string){
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
