import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from 'rxjs';
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";
import { Token } from "../models/tokenmodel";

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

    getCubos(): Observable<any>{
        var request = "api/cubos";
        var url = environment.urlCubos + request;
        return this._http.get(url);
    }

    getCubosMarca(marca: string): Observable<any>{
        var request= "api/cubos/cubosmarca/"+marca;
        var url = environment.urlCubos + request;
        return this._http.get(url);
    }

    getCubo(idcubo: string): Observable<any>{
        var request= "api/cubos/"+idcubo;
        var url = environment.urlCubos + request;
        return this._http.get(url);

    }

    getComentarios(idcubo: string): Observable<any>{
        var request = "api/comentarioscubo/getcomentarioscubo/"+idcubo;
        var url = environment.urlCubos + request;
        return this._http.get(url);

    }


    validarUsuario(email: string, password: string): Observable<any>{
        var json = JSON.stringify({email: email, password: password});
        var header = new HttpHeaders().set('Content-Type', 'application/json');
        var request= "api/manage/login";
        var url = environment.urlCubos + request;
        console.log(url);
        console.log(json);
        return this._http.post(url, json, {headers: header});
    }

    setToken(token: Token){
        
        localStorage.setItem("token", token.response)
      }

    getToken(): string | null{
        let token = localStorage.getItem("token");
        if(token != null){
          return token;
        }
        return null;
    }


    registrarUsuario(nombre: string, email: string, password: string): Observable<any>{
        var request = "api/manage/registrousuario";
        var url = environment.urlCubos + request;
        var json = JSON.stringify({idUsuario: 0, nombre: nombre, email: email, password: password});
        var header = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(url, json, {headers: header});
    }

    getUsuario(): Observable<any>{
        var token = this.getToken()?.toString();
    
        var request = "/api/manage/perfilusuario";
        var url = environment.urlCubos + request;
        var header = new HttpHeaders().set("Authorization", "bearer "+ token);

        
        return this._http.get(url, {headers: header});
    }


    getCompras(): Observable<any>{

        var token = this.getToken()?.toString();
        var request = "/api/compra/comprasusuario";
        var url = environment.urlCubos + request;
        var header = new HttpHeaders().set("Authorization", "bearer "+ token);
        return this._http.get(url, {headers: header});

    }


    insertCompra(idcubo: number): Observable<any>{
        var token = this.getToken()?.toString();
        var request = "api/compra/insertarpedido/"+idcubo;
        var url = environment.urlCubos + request;
        var header = new HttpHeaders().set("Authorization", "bearer "+ token);
        console.log(url);
        console.log(header);
        return this._http.post(url, "", {headers: header});
    }
    


    

}