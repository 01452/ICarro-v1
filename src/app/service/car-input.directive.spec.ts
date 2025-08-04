import {CarInputDirective} from './car-input.directive';
import {Component, ElementRef} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {CarsModule} from '../cars/cars.module';

@Component({
  template: `<div class="input-container"><label for="testInput" class="input-label" #testLabel>Price</label>
    <input type="text" id="testInput" carInput [label]="testLabel"></div>`,
  styleUrls: ['forms.scss']
})
class TestComponent {
  constructor() {
  }
}

export class MockElementRef extends ElementRef {
}

describe('CarInputDirective', () => {

  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, CarInputDirective]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should add class dirty to label when input focused', () => {
    const input: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    input.focus();
    fixture.detectChanges();
    const label: HTMLLabelElement = fixture.debugElement.query(By.css('label')).nativeElement;
    expect(label.classList.contains('dirty')).toBeTrue();
  });

  it('should remove class dirty from label when input empty and blur', () => {
    const input: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    const label: HTMLLabelElement = fixture.debugElement.query(By.css('label')).nativeElement;
    input.focus();
    input.blur();
    fixture.detectChanges();
    expect(label.classList.contains('dirty')).toBeFalse();
  });

  it('should not remove class dirty from label when input full and blur', () => {
    const input: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    input.focus();
    input.value = 'test value';
    input.blur();
    fixture.detectChanges();
    const label: HTMLLabelElement = fixture.debugElement.query(By.css('label')).nativeElement;
    expect(label.classList.contains('dirty')).toBeTrue();
  });


});
