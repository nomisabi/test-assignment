import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrimeTimeLineService {

  private api="http://nflarrest.com/api/v1/crime/timeline/"

  constructor(private http: HttpClient) {
  }

  // getting timeline
  getTimeline(crimeId:string){
    return this.http.get(this.api+crimeId)
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
