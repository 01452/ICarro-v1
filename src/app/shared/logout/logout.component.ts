import {Component, OnInit} from '@angular/core';
import {SharedHttpService} from '../shared-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LocalStoreService} from '../../local-store.service';
import {parseParams} from '../../tools';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: []
})
export class LogoutComponent implements OnInit {

  private urlNavigate: string;

  constructor(private sharedService: SharedHttpService, private localStore: LocalStoreService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    /**
     * Get url params that contains url before logout
     */
    this.route.queryParams.subscribe(params => this.urlNavigate = params.url || '');
    this.localStore.deleteToken();
    this.localStore.deleteEmail();
    this.localStore.deletePhoneNumber();
    this.localStore.deleteLastName();
    this.localStore.deleteName();
    /**
     * Navigate to previous page
     */
    this.router.navigate([this.urlNavigate.split('?')[0]],
      {queryParams: parseParams(this.urlNavigate)}).then();
  }
}
