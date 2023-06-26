import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestcomComponent } from './MainModule/testcom/testcom/testcom.component';

const routes: Routes = [
{path:'testcom', component:TestcomComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

