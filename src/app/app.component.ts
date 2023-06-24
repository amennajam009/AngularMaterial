import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showFiller: boolean = true;
  title = 'AngularMaterial';

  toggleSidenav() {
    this.showFiller = !this.showFiller;
  }
}
