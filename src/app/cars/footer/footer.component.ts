import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {LocalStoreService} from '../../local-store.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  height = 280;

  constructor(private cd: ChangeDetectorRef, private localStore: LocalStoreService) {
  }

  ngOnInit() {
  }

  get loggedInFlag() {
    return this.localStore.getToken();
  }

  showTitle(height: number) {
    if (this.height !== height) {
      this.height = height;
      this.cd.detectChanges();
    }
  }
}
