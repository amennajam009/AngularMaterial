import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {NgIf} from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';

import { MatToolbarModule } from '@angular/material/toolbar';
import { LisstComponent } from './MainModule/sidelist/ide/lisst/lisst.component';
import { TestcomComponent } from './MainModule/testcom/testcom/testcom.component';
@NgModule({
  declarations: [
    AppComponent,
    LisstComponent,
    TestcomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSidenavModule,
    NgIf,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatExpansionModule,
    MatButtonModule,
    CommonModule  
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
