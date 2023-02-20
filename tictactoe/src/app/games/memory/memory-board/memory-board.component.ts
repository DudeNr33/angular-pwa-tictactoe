import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tile } from '../tile';

@Component({
  selector: 'app-memory-board',
  templateUrl: './memory-board.component.html',
  styleUrls: ['./memory-board.component.scss']
})
export class MemoryBoardComponent implements OnInit {
  private _numTiles = 16;
  private _numMoves = 0;
  rows: Array<Array<Tile>> = [];

  @Input() set numTiles(value: number) {
    this._numTiles = value;
    this.createBoard();
  }

  get numTiles(): number {
    return this._numTiles;
  }

  @Output() gameWonEvent = new EventEmitter<number>();

  createBoard() {
    this.rows = [];
    this._numMoves = 0;
    const numRowsCols = Math.sqrt(this.numTiles);
    let values: Array<string> = [];
    for (let n = 0; n < this.numTiles / 2; n++) {
      let value = Math.floor(Math.random() * 100).toString();
      values.push(value);
      values.push(value);
    }
    this.shuffleArray(values);
    for (let i = 0; i < numRowsCols; i++) {
      let row: Array<Tile> = [];
      for (let j = 0; j < numRowsCols; j++) {
        row.push({ value: values.pop()!, shown: false, matched: false });
      }
      this.rows.push(row);
    }
  }

  private shuffleArray(array: Array<string>) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

  onCardFlipped() {
    this._numMoves++;
    let flippedCards: Array<Tile> = [];
    let matchedCards: Array<Tile> = [];
    for (let row of this.rows) {
      for (let tile of row) {
        if (tile.matched) {
          matchedCards.push(tile);
        }
        else if (tile.shown) {
          flippedCards.push(tile);
        }
      }
    }
    if (flippedCards.length < 2) {
      return;
    } else {
      if (flippedCards[0].value != flippedCards[1].value) {
        setTimeout(() => {
          flippedCards[0].shown = false;
          flippedCards[1].shown = false;
        }, 1000);
      } else {
        flippedCards[0].matched = true;
        flippedCards[1].matched = true;
        if (matchedCards.length == this.numTiles - 2) {
          this.gameWonEvent.emit(this._numMoves);
        }
      }
    }

  }

  ngOnInit() {
    this.createBoard();
  }
}
