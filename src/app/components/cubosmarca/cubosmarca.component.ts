import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cubo } from 'src/app/models/cubomodel';
import { CuboService } from 'src/app/services/cuboservice';


@Component({
  selector: 'app-cubos',
  templateUrl: './cubosmarca.component.html',

})
export class CubosMarca implements OnInit {
  public cubos!: Array<Cubo>;
  public marca!: string;
  constructor(private _service: CuboService, private _activeRouter: ActivatedRoute) { }

  ngOnInit(): void {

    this._activeRouter.params.subscribe(params => {
        if (params['marca']) {
            this.marca = params['marca'];
            this._service.getCubosMarca(this.marca).subscribe(res => {
                this.cubos = res;
            });
        }
    });

  }

}
