export class GearTypes {
  static readonly AT = new GearTypes('AT', 'AT');
  static readonly MT = new GearTypes('MT', 'MT');
  static readonly SMT = new GearTypes('SMT', 'SMT');

  private constructor(public readonly value: string, public readonly name) {
  }

  static getGears(): GearTypes[] {
    return [
      this.AT, this.MT, this.SMT
    ];
  }
}
