import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RegistrationComponent} from './registration/registration.component';
import {CarCardComponent} from './car-card/car-card.component';
import {CarDetailsComponent} from './car-details/car-details.component';
import {LoginRegistrationModalComponent} from './login-registration-modal/login-registration-modal.component';
import {ReserveModalComponent} from './reserve-modal/reserve-modal.component';
import {CarPriceLabelComponent} from './car-price-label/car-price-label.component';
import {CarInputDirective} from './car-input.directive';
import {DialogComponent} from './dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {ImageSliderComponent} from './image-slider/image-slider.component';

@NgModule({
  declarations: [LoginComponent, RegistrationComponent, CarCardComponent, CarDetailsComponent,
    LoginRegistrationModalComponent, ReserveModalComponent, CarPriceLabelComponent, CarInputDirective, DialogComponent,
    ImageSliderComponent],
  exports: [
    LoginComponent,
    RegistrationComponent,
    CarCardComponent,
    CarDetailsComponent,
    LoginRegistrationModalComponent,
    ReserveModalComponent,
    CarPriceLabelComponent,
    CarInputDirective,
    ImageSliderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatProgressBarModule
  ]
})
export class ServiceModule {
}
