import { Component, ElementRef, ViewChild } from '@angular/core';
import { ThemeService } from 'src/app/MainModule/theme/theme.service';

@Component({
  selector: 'app-lisst',
  templateUrl: './lisst.component.html',
  styleUrls: ['./lisst.component.css']
})
export class LisstComponent {

  constructor() {}
  ngOnInit() {
  }

  @ViewChild('menuButton') menuButton:any| ElementRef;
  isSidenavClosed = false;
  panelOpenState = false;
  onSidenavClose() {
    this.isSidenavClosed = true;
    this.menuButton.nativeElement.classList.toggle('active');
  }
}
