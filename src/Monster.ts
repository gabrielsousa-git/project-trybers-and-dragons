import Fighter, { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;

  constructor(lifePoints = 85, strength = 63) {
    this._lifePoints = lifePoints;
    this._strength = strength;
  }

  get lifePoints(): number { return this._lifePoints; }
  get strength(): number { return this._strength; }

  receiveDamage = (attackPoints: number) => {
    const damage = attackPoints - this._lifePoints;

    if (damage > 0) { this._lifePoints -= damage; }
    if (damage <= 0) { this._lifePoints -= 1; }
    if (this._lifePoints <= 0) { this._lifePoints = -1; }

    return this._lifePoints;
  };

  attack = (enemy: Fighter | SimpleFighter) => enemy
    .receiveDamage(this.strength);
}