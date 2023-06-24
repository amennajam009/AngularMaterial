import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainModuleComponent } from './main-module.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
    MainModuleComponent
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule,
    MatSlideToggleModule,
    MatSidenavModule,
    NgIf,
    MatButtonModule
  ]
})
export class MainModuleModule { }
