import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvHomeComponent } from './ev-home/ev-home.component';
import { FormAngularComponent } from './form-angular/form-angular.component';
import { FormPlantillaComponent } from './form-plantilla/form-plantilla.component';
import { PadreInputComponent } from './padre-input/padre-input.component';
import { PadreOutputComponent } from './padre-output/padre-output.component';
import { ValidatorFormComponent } from './validator-form/validator-form.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: EvHomeComponent},
  { path: 'form-angular', component: FormAngularComponent},
  { path: 'form-plantilla', component: FormPlantillaComponent},
  { path: 'validator-form', component: ValidatorFormComponent},
  { path: 'padre-input', component: PadreInputComponent},
  { path: 'padre-output', component: PadreOutputComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
