import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cubo } from 'src/app/models/cubomodel';
import { CuboService } from 'src/app/services/cuboservice';
import { Comentario } from 'src/app/models/comentariomodel';

@Component({
  selector: 'app-cubosdetalle',
  templateUrl: './cubosdetalle.component.html',

})
export class CubosDetalle implements OnInit {
  public cubo!: Cubo;
  public idCubo!: string;
  public comentarios!: Array<Comentario>;
  constructor(private _service: CuboService, private _activeRouter: ActivatedRoute) { }

  ngOnInit(): void {

    this._activeRouter.params.subscribe(params => {
        if (params['idcubo']) {
            this.idCubo = params['idcubo'];
            this._service.getCubo(this.idCubo).subscribe(res => {
                this.cubo = res;
                this._service.getComentarios(this.idCubo).subscribe(res => {
                    this.comentarios = res;
                    });

            });
        }
    }); 

  }

}
