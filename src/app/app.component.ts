import { Component, OnInit } from '@angular/core';
import { Persona } from './clases/persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'P2';
  show_list = false
  show_details = false
  public personas:Array<Persona>
  persona:Persona 
  public doSomething(e:Persona):void{
    this.persona = e
    this.show_details = true
    console.log("persona seleccionada", e)
    console.log("persona de clase", this.persona)
  }
  ngOnInit():void{
    this.personas = [
      {
        'nombre':'Alex',
        'sexo':'Masculino',
        'edad':19
      },
      {
        'nombre':'Gustavo',
        'sexo':'Masculino',
        'edad':19
      },
      {
        'nombre':'Humberto',
        'sexo':'Masculino',
        'edad':19
      },
      {
        'nombre':'Lissete',
        'sexo':'Femenino',
        'edad':20
      },
      {
        'nombre':'Eduardo',
        'sexo':'Masculino',
        'edad':20
      },
      {
        'nombre':'Erick',
        'sexo':'Masculino',
        'edad':19
      },
      {
        'nombre':'Jonathan',
        'sexo':'Masculino',
        'edad':19
      },
      {
        'nombre':'Yerasmin',
        'sexo':'Femenino',
        'edad':19
      },
      {
        'nombre':'Joana',
        'sexo':'Femenino',
        'edad':19
      },
    ]
  }
}
