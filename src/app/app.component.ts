import { Component, EventEmitter, Output } from '@angular/core';
import { ThemeService } from './MainModule/theme/theme.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() { }
  darkModeEnabled = false;
  title = 'AngularMaterial';


  ngOnInit() {

  }




}
