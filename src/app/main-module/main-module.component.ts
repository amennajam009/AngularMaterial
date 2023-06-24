import { Component } from '@angular/core';

@Component({
  selector: 'app-main-module',
  templateUrl: './main-module.component.html',
  styleUrls: ['./main-module.component.css']
})
export class MainModuleComponent {

  showFiller: boolean = true;
  title = 'AngularMaterial';

  toggleSidenav() {
    this.showFiller = !this.showFiller;
  }
}
