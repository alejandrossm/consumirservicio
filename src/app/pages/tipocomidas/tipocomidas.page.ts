import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/app/interfaces/categorias';
import { ComidasService } from '../../services/comidas.service';

@Component({
  selector: 'app-tipocomidas',
  templateUrl: './tipocomidas.page.html',
  styleUrls: ['./tipocomidas.page.scss'],
})
export class TipocomidasPage implements OnInit {

  comidas:Meal[]=[];

  constructor(private srvcomidas:ComidasService) { }

  ngOnInit() {
    this.srvcomidas.getComidasxTipo("Beef").subscribe(datos=>
      {
        this.comidas.push(...datos.meals);
       
      });
  }

  //forma 1
  //Navigation extras

  //forma 2
  //componente @input
}
