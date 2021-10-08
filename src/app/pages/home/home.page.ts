import { Component, OnInit } from '@angular/core';
import { ComidasService } from '../../services/comidas.service';
import { Category } from '../../interfaces/categorias';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

categorias:Category[]=[];

  constructor(private comidaservice:ComidasService) {}

  ngOnInit()
  {
    this.comidaservice.getCategorias().subscribe(resp=>
      {
        //console.log('categorias',resp.categories);
        this.categorias.push(...resp.categories);
        console.log("Mi arreglo: ", this.categorias);
       
      });
  }

}
