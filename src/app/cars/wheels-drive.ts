export class WheelsDriveTypes {

  static readonly RWD = new WheelsDriveTypes('RWD', 'RWD');
  static readonly AWD = new WheelsDriveTypes('AWD', 'AWD');
  static readonly FWD = new WheelsDriveTypes('FWD', 'FWD');

  private constructor(public readonly value: string, public readonly name) {
  }

  static getWheelsDrives(): WheelsDriveTypes[] {
    return [
      this.RWD, this.AWD, this.FWD
    ];
  }
}
