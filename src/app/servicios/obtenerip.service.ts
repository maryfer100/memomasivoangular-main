import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptionsPlain = {
  headers: new HttpHeaders({
    'Accept': 'text/plain',
    'Content-Type': 'text/plain'
  }),
  'responseType': 'text'
};
@Injectable({
  providedIn: 'root'
})
export class ObteneripService {

    constructor(private http:HttpClient) { }

  getIP():Observable<string>{
    return this.http.get<string>("http://localhost:8081/api/ip");
  }

}