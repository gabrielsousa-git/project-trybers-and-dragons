import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints;
  static instances = 0;
  constructor(name: string, dexterity: number, maxLifePoints = 74) {
    super(name, dexterity);
    this._maxLifePoints = maxLifePoints;
    Orc.instances += 1;
  }

  get maxLifePoints(): number { return this._maxLifePoints; }

  static createdRacesInstances(): number {
    return Orc.instances;
  }
}