import { Component, OnInit } from '@angular/core';
import { Cubo } from 'src/app/models/cubomodel';
import { CuboService } from 'src/app/services/cuboservice';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',

})
export class MenuComponent implements OnInit {
  public marcas!: Array<string>;
  constructor(private _service: CuboService) { }

  ngOnInit(): void {

    this._service.getMarcas().subscribe(res=>{
        this.marcas = res;
    });


   /*  this._service.getSeries().subscribe(res=>{
      this.series = res;
    }) */
  }

}
