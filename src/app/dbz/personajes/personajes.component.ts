import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  //@Input() personajesDesdeElPadre: Personaje[] = [];
  constructor(private _dbzService: DbzService) { }

  get personaje() {
    return this._dbzService.personajes;
  }


}
