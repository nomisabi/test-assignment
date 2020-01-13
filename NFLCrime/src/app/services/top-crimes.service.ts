import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopCrimesService {

  private api="http://nflarrest.com/api/v1/crime"

  constructor(private http: HttpClient) {
  }

  // getting top crimes
  getTopCrimes(){
    return this.http.get(this.api)
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
