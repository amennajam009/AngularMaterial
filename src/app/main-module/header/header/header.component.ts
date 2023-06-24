import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showFiller: boolean = true;

  toggleSidenav() {
    this.showFiller = !this.showFiller;
  }
}
