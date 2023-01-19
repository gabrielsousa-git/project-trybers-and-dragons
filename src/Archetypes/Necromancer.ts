import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  static instances = 0;
  constructor(name: string, energyType: EnergyType = 'mana') {
    super(name);
    this._energyType = energyType;
    Necromancer.instances += 1;
  }

  get energyType(): EnergyType { return this._energyType; }

  static createdArchetypeInstances(): number {
    return Necromancer.instances;
  }
}