import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {

  // URL = "http://localhost/servidor/";

  constructor(private http: HttpClient) { }

  // uploadFile(archivo: { /*nombre: string;*/ nombreArchivo: string; base64textString: string; })
  // {
  //   return this.http.post(`${this.URL}subirArchivo.php`, JSON.stringify(archivo));
  // }

  // readexcell(ruta:String)
  // {
  //   return this.http.post(`${this.URL}leerExcell.php`,JSON.stringify(ruta));
  // }
  uploadFile(formData: FormData): Observable<any> {
      return this.http.post('http://localhost:8081/media/upload',formData);
  }

}
