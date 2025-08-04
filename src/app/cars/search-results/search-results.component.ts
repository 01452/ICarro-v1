import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {Car, CarsHttpService, SearchCarRequest, SearchResults} from '../cars-http.service';
import {PageEvent} from '@angular/material/paginator';
import {Title} from '@angular/platform-browser';
import {ConnectionError} from '../../errors';
import {DialogBuilder} from '../../service/dialog/dialog-builder';
import {MatDialog} from '@angular/material/dialog';
import {compareCars} from '../../tools';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  cars: Car[];
  city: string;
  startDate: string;
  endDate: string;
  private minPrice: number;
  private maxPrice: number;
  private sortByPriceFromLowToHigh = true;
  private params: SearchCarRequest;
  page = 0;
  length = 0;
  pageSize = 10;

  constructor(private httpService: CarsHttpService, private router: Router, private route: ActivatedRoute, private title: Title,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    /**
     * Get query params for for search request
     */
    this.route.queryParams.subscribe(params => {
      this.city = params.city;
      this.startDate = params.startDate;
      this.endDate = params.endDate;
      this.minPrice = params.minPrice;
      this.maxPrice = params.maxPrice;
      this.sortByPriceFromLowToHigh = params.ascending === undefined ? true : params.ascending === 'true';
      this.page = params.currentPage;
      this.pageSize = params.itemsOnPage;
      this.title.setTitle(`Cars in ${this.city}`);
      this.params = Object.assign({}, params);
      this.search();
    });
  }

  /**
   * Change page:
   * On change page click receive
   * @param event - param with data about changed page
   * and change current page by navigating
   */
  changePage(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.page = event.pageIndex;
    this.params.currentPage = this.page;
    this.params.itemsOnPage = this.pageSize;
    const searchParams: NavigationExtras = {
      queryParams: this.params
    };
    this.router.navigate(['/search/results'], searchParams).then();
  }

  /**
   * Get cars from server with params
   */
  search() {
    const cars = this.cars;
    this.cars = undefined;
    this.httpService.searchCarsByFilters(this.params)
      .subscribe(results => this.onSearchSuccess (results), error => this.onSearchError(error, cars));
  }

  private onSearchError(error: any, cars: Car[]) {
    this.cars = cars;
    if (error instanceof ConnectionError) {
      new DialogBuilder(this.dialog)
        .title('Connection error')
        .message('Check your connection and try again')
        .negativeBtn('Close')
        .positiveBtn('Try again', this.search.bind(this))
        .show();
    } else {
      new DialogBuilder(this.dialog)
        .title('Something goes wrong')
        .positiveBtn('Try again', this.search.bind(this))
        .negativeBtn('Close')
        .show();
    }
  }

  private onSearchSuccess(searchResults: SearchResults) {
    this.length = searchResults.items_total;
    this.cars = searchResults.cars.sort((car1, car2) => compareCars(car1, car2, this.sortByPriceFromLowToHigh));
  }
}
