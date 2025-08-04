import { DatesRangeValidator } from './dates-range-validator';
import {FormControl} from '@angular/forms';

describe('DatesRangeValidator', () => {
  it('should create an instance', () => {
    expect(new DatesRangeValidator()).toBeTruthy();
  });

  it('should return valid', () => {
    const control = new FormControl({
      begin: new Date('12/12/2020'),
      end: new Date('13/12/2020')
    })
    expect(DatesRangeValidator.validator(control)).toBeNull();
  });
  it('should return invalid', () => {
    const control = new FormControl({
      begin: new Date('12/12/2020'),
      end: new Date('12/12/2020')
    })
    expect(DatesRangeValidator.validator(control)).not.toBeNull();
  });
});
