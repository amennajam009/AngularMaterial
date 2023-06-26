import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lisst',
  templateUrl: './lisst.component.html',
  styleUrls: ['./lisst.component.css']
})
export class LisstComponent {
  @ViewChild('menuButton') menuButton:any| ElementRef;
  isSidenavClosed = false;
  panelOpenState = false;
  onSidenavClose() {
    this.isSidenavClosed = true;
    this.menuButton.nativeElement.classList.toggle('active');
  }
}
