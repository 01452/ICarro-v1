import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {

  @ViewChild('sliderContainer', {static: true}) sliderContainer: ElementRef;

  @Input('photos') photoUrls: string[] = [];
  @Input('slideTimeout') slideTimeout = 5;

  containerHeight = '100%';

  private _currentPhoto = 0;
  private interval;
  private timeout;

  constructor() {
  }

  ngOnInit(): void {
    this.containerHeight = `${this.sliderContainer.nativeElement.offsetWidth * 9 / 16}px`;
    this.setSlideInterval();
  }

  set currentPhoto(n: number) {
    const sliderLength = this.photoUrls.length;
    if (n < 0)
      this.currentPhoto = n + sliderLength;
    else if (n >= sliderLength)
      this.currentPhoto = n - sliderLength;
    else {
      this._currentPhoto = n;
    }
  }

  get currentPhoto(): number {
    return this._currentPhoto;
  }

  minusClick() {
    this.currentPhoto--;
    this.setSlideInterval();

  }

  plusClick() {
    this.currentPhoto++
    this.setSlideInterval();
  }

  private setSlideInterval() {
    clearTimeout(this.timeout);
    clearInterval(this.interval);
    this.timeout = setTimeout(() =>
        this.interval = setInterval(() =>
          this.currentPhoto++, this.slideTimeout * 1000),
      this.slideTimeout * 1000);
  }
}
