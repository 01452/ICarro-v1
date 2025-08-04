import {ValidatorFn} from '@angular/forms';

export class DatesRangeValidator {

  constructor() {
  }

  public static get validator(): ValidatorFn {
    return control => {
      const value = control?.value;
      const dateStart: Date = new Date(value?.begin);
      const dateEnd: Date = new Date(value?.end);
      if (dateEnd?.getTime() - dateStart?.getTime() < 86400000) {
        return {
          minRange: 'Range mast be more than 1 day'
        }
      }
      return null;
    }
  }
}
