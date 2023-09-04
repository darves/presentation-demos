import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsExampleComponent } from './forms-example/forms-example.component';

const routes: Routes = [{
  path: '',
  component: FormsExampleComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
