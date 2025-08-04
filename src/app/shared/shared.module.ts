import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LogoutComponent} from './logout/logout.component';
import {NavigatorComponent} from './navigator/navigator.component';
import {TermsOfUseComponent} from './terms-of-use/terms-of-use.component';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {SearchComponent} from '../cars/search/search.component';
import {LetCarWorkComponent} from '../cars/let-car-work/let-car-work.component';
import {CarsModule} from '../cars/cars.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SearchResultsComponent} from '../cars/search-results/search-results.component';
import {CarDetailsComponent} from '../cars/car-details/car-details.component';
import {ServiceModule} from '../service/service.module';
import {LoginRegistrationComponent} from './login-registration/login-registration.component';
import {PrivacyPoliceComponent} from './privacy-police/privacy-police.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';

const routes: Routes = [
  {path: 'registration', component: LoginRegistrationComponent},
  {path: 'login', component: LoginRegistrationComponent},
  {path: 'search', component: SearchComponent},
  {path: 'let-car-work', component: LetCarWorkComponent},
  {path: 'terms-of-use', component: TermsOfUseComponent},
  {path: 'privacy-police', component: PrivacyPoliceComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'search/:city/:startDate/:endDate', component: SearchResultsComponent},
  {
    path: 'search/:city/:startDate/:endDate/:minPrice/:maxPrice/:sortByPriceFromLowToHigh',
    component: SearchResultsComponent
  },
  {path: 'search/results', component: SearchResultsComponent},
  {path: 'car/:id', component: CarDetailsComponent},
  {path: '', redirectTo: 'search', pathMatch: 'full'}
];

@NgModule({
  declarations: [LogoutComponent, NavigatorComponent, TermsOfUseComponent, LoginRegistrationComponent, PrivacyPoliceComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      preloadingStrategy: PreloadAllModules
    }),
    CarsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ServiceModule,
    MatProgressBarModule
  ],
  exports: [
    NavigatorComponent
  ]
})
export class SharedModule {
}
