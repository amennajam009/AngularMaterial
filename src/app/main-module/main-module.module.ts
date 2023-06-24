import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainModuleComponent } from './main-module.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './header/header/header.component';


@NgModule({
  declarations: [
    MainModuleComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule,
    MatSlideToggleModule,
    MatSidenavModule,
    NgIf,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class MainModuleModule { }
