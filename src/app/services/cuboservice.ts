import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from 'rxjs';
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class CuboService {

    constructor(private _http: HttpClient) { }


    getMarcas(): Observable<any>{
      var request = "api/cubos/marcas";
      var url = environment.urlCubos + request;
      return this._http.get(url);
    }

    getCubosMarca(marca: string): Observable<any>{
        var request= "api/cubos/cubosmarca/"+marca;
        var url = environment.urlCubos + request;
        return this._http.get(url);
    }

}