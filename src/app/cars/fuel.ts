export class FuelType {
    static readonly DIESEL = new FuelType('Diesel', 'Diesel');
    static readonly PETROL = new FuelType('Petrol', 'Petrol');
    static readonly HYBRID = new FuelType('Hybrid', 'Hybrid');
    static readonly ELECTRIC = new FuelType('Electric', 'Electric');
    static readonly GAS = new FuelType('Gas', 'Gas');

    private constructor(public readonly value: string, public readonly name) {
    }

    static getFuels(): FuelType[] {
      return [FuelType.DIESEL, FuelType.PETROL, FuelType.HYBRID, FuelType.ELECTRIC, FuelType.GAS];
    }
}
