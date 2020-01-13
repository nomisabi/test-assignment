import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopTeamsForCrimeService {

  private api="http://nflarrest.com/api/v1/crimes/topTeams/"

  constructor(private http: HttpClient) {
  }

  getTopTeamsForCrime(crimeID:string){
    return this.http.get(this.api+crimeID)
    .toPromise()
    .then(res=>res)
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error("Error... ", error);
    return Promise.reject(error.message || error);
  }
}
