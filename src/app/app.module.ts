import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormAngularComponent } from './form-angular/form-angular.component';
import { FormPlantillaComponent } from './form-plantilla/form-plantilla.component';
import { FormsModule } from '@angular/forms';
import { ValidatorFormComponent } from './validator-form/validator-form.component';
import { PadreInputComponent } from './padre-input/padre-input.component';
import { HijoInputComponent } from './hijo-input/hijo-input.component';
import { PadreOutputComponent } from './padre-output/padre-output.component';
import { HijoOutputComponent } from './hijo-output/hijo-output.component';
import { EvHomeComponent } from './ev-home/ev-home.component';

@NgModule({
  declarations: [
    AppComponent,
    FormAngularComponent,
    FormPlantillaComponent,
    ValidatorFormComponent,
    PadreInputComponent,
    HijoInputComponent,
    PadreOutputComponent,
    HijoOutputComponent,
    EvHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
