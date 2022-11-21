import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/models/usuariomodel';

import { CuboService } from 'src/app/services/cuboservice';


@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',

})
export class Compras implements OnInit {
public usuario!: Usuario;
public logeo!: boolean;
public compras!: any[];


  constructor(private _service: CuboService, private _activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    // this.usuario = new Usuario(0, "", "user1@mail.com", "12345");
 
     if (localStorage.getItem("token")) {
         console.log("Ya hay token");
       this.logeo = true;
 
         this._service.getUsuario().subscribe(res => {
             this.usuario = res;
             console.log(this.usuario);
           
             this._service.getCompras().subscribe(res => {
                    this.compras = res;
                    console.log(this.compras);
    

             });

         });
 
     } else {
         console.log("No estás logueado");
       this.logeo = false;
     }
 }
 
 



}
