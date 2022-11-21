import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/models/usuariomodel';
import { Token } from 'src/app/models/tokenmodel';
import { CuboService } from 'src/app/services/cuboservice';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

})
export class Login implements OnInit {
public usuario!: Usuario;
public token!: Token;
public logeo!: boolean;

@ViewChild('cajaemail') cajaemail!: ElementRef;
@ViewChild('cajapassword') cajapassword!: ElementRef;


  constructor(private _service: CuboService, private _activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
   // this.usuario = new Usuario(0, "", "user1@mail.com", "12345");

    if (this._service.getToken()) {
        console.log("Ya hay token");
       // localStorage.removeItem("token");
      this.logeo = true;
    } else {
        console.log("No hay token, haz loguin para obtenerlo");
      this.logeo = false;
    }
}


login(){
    var email = this.cajaemail.nativeElement.value;
    var password = this.cajapassword.nativeElement.value;
    console.log(email);
    console.log(password);

    this._service.validarUsuario(email, password).subscribe(res => {
        this.token = res;
        this._service.setToken(this.token);
        console.log(this._service.getToken());
  });




}

}
