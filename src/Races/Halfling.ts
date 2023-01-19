import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints;
  static instances = 0;
  constructor(name: string, dexterity: number, maxLifePoints = 60) {
    super(name, dexterity);
    this._maxLifePoints = maxLifePoints;
    Halfling.instances += 1;
  }

  get maxLifePoints(): number { return this._maxLifePoints; }

  static createdRacesInstances(): number {
    return Halfling.instances;
  }
}