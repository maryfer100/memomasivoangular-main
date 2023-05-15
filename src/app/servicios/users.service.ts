import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  login(usuario:any):Observable<Number>
  {
      console.log(usuario.numemp);
      console.log(usuario.pass);

    return this.http.get<Number>("http://localhost:8081/apilogin/user?numemp="+usuario.numemp+"&passw="+usuario.pass);
  }
}
