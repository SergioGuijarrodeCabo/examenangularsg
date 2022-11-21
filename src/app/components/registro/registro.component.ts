import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/models/usuariomodel';

import { CuboService } from 'src/app/services/cuboservice';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',

})
export class Registro implements OnInit {
public usuario!: Usuario;
public token!: string;
public logeo!: boolean;

@ViewChild('cajanombre') cajanombre!: ElementRef;
@ViewChild('cajaemail') cajaemail!: ElementRef;
@ViewChild('cajapassword') cajapassword!: ElementRef;
@ViewChild('cajarepetirpassword') cajarepetirpassword!: ElementRef;


  constructor(private _service: CuboService, private _activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
   
  }


  registro(){
    var nombre = this.cajanombre.nativeElement.value;
    var email = this.cajaemail.nativeElement.value;
    var password = this.cajapassword.nativeElement.value;
    var repetirpassword = this.cajarepetirpassword.nativeElement.value;

    if (password != repetirpassword) {
        alert("Las contraseñas no coinciden, introdúzcalas de nuevo");
    }else{

      this._service.registrarUsuario(nombre, email, password).subscribe(res => {

        console.log(res);
      


      });

    }


  }

}
