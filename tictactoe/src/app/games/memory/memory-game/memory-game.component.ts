import { Component } from '@angular/core';

@Component({
  selector: 'app-memory-game',
  templateUrl: './memory-game.component.html',
  styleUrls: ['./memory-game.component.scss']
})
export class MemoryGameComponent {
  boardSizes = [16, 36]
  selectedBoardSize: number = 16;
  message: string | undefined;

  newGame() {
  }

  onGameWon(requiredMoves: number) {
    this.message = `You won after ${requiredMoves} moves!`;
  }

}
