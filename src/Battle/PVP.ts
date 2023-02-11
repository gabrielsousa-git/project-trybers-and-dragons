import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(private player1: Fighter, private player2: Fighter) {
    super(player1);
  }
  
  fighting(): void {
    let turn = 0;
    while (this.player1.lifePoints > 0 && this.player2.lifePoints > 0) {
      if (turn % 2 === 0) {
        this.player1.attack(this.player2);
      } else {
        this.player2.attack(this.player1);
      }
      turn += 1;
    }
  }

  fight(): number {
    this.fighting();
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}