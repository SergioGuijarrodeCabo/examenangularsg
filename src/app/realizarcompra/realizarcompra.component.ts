import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/models/usuariomodel';
import { Cubo } from '../models/cubomodel';
import { CuboService } from 'src/app/services/cuboservice';


@Component({
  selector: 'app-realizarcompra',
  templateUrl: './realizarcompra.component.html',

})
export class RealizarCompra implements OnInit {
public usuario!: Usuario;
public logeo!: boolean;
public cubos!: Array<Cubo>;


  constructor(private _service: CuboService, private _activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
   // this.usuario = new Usuario(0, "", "user1@mail.com", "12345");

    if (localStorage.getItem("token")) {
      
        console.log("Ya hay token");
      this.logeo = true;

        this._service.getCubos().subscribe(res => {
            this.cubos = res;

        });


    } else {
        console.log("No estás logueado, loguéate para poder comprar");
      this.logeo = false;
    }
}


comprar(idCubo: number) {

    var id = idCubo;
    console.log(id);
    this._service.insertCompra(idCubo).subscribe(res => {
        console.log(res);
    });


}



}
