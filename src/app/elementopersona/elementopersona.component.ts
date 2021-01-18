import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { Persona } from "../clases/persona";

@Component({
  selector: 'app-elementopersona',
  templateUrl: './elementopersona.component.html',
  styleUrls: ['./elementopersona.component.css']
})
export class ElementopersonaComponent implements OnInit {
  @Input() persona:Persona
  @Output() onPersonSelected: EventEmitter<Persona> = new EventEmitter<Persona>();
  constructor() { 
    console.log('constructor')
  }
  public selectPerson(nombre, edad, sexo):void{
    this.onPersonSelected.emit({'nombre':nombre, 'edad':edad, 'sexo':sexo})
  }
  ngOnInit(): void {
    console.log('Datos', this.persona)
    console.log('ngOnInit')
  }

}
