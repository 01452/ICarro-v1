import {NgModule} from '@angular/core';
import {CommonModule, DatePipe, DecimalPipe} from '@angular/common';
import {SearchComponent} from './search/search.component';
import {SubSearchComponent} from './sub-search/sub-search.component';
import {SearchNavigatorComponent} from './search-navigator/search-navigator.component';
import {FiltersComponent} from './filters/filters.component';
import {MapComponent} from './map/map.component';
import {CarDetailsComponent} from './car-details/car-details.component';
import {SearchResultsComponent} from './search-results/search-results.component';
import {LetCarWorkComponent} from './let-car-work/let-car-work.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SpecialOffersComponent} from './special-offers/special-offers.component';
import {FooterComponent} from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import {SatDatepickerModule, SatNativeDateModule} from 'saturn-datepicker';
import {ServiceModule} from '../service/service.module';
import {CarsHttpService} from './cars-http.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {NgxSliderModule} from '@m0t0r/ngx-slider';


@NgModule({
  declarations: [SearchComponent, SubSearchComponent, SearchNavigatorComponent, FiltersComponent, MapComponent, CarDetailsComponent,
    SearchResultsComponent, LetCarWorkComponent, SpecialOffersComponent, FooterComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxSliderModule,
    ReactiveFormsModule,
    SatDatepickerModule,
    SatNativeDateModule,
    MatPaginatorModule,
    ServiceModule,
    MatChipsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  exports: [
    SearchComponent,
    SpecialOffersComponent,
    FooterComponent
  ],
  providers: [
    DatePipe, DecimalPipe, CarsHttpService
  ]
})
export class CarsModule {
}
