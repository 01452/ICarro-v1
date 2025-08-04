import {
  AfterViewChecked,
  Directive,
  ElementRef,
  HostListener,
  Input
} from '@angular/core';

@Directive({
  selector: '[carInput]'
})
export class CarInputDirective implements AfterViewChecked {

  @Input('carInput') label: HTMLLabelElement;

  constructor(public el1: ElementRef) {
  }

  @HostListener('focusin') onMouseEnter() {
    this.label.classList.add('dirty');
  }

  @HostListener('focusout') onMouseLeave() {
    if (!this.el1.nativeElement.value) {
      this.label.classList.remove('dirty');
    }
  }

  ngAfterViewChecked(): void {
    if (this.el1.nativeElement.value) {
      this.label.classList.add('dirty');
    }
  }
}
