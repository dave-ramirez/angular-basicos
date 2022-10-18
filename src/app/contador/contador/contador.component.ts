import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html'
})
export class ContadorComponent {

  heroes: string[] = ['Spiderman', 'Thor', 'Ironman'];
  heroeBorrado: string = '';

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
