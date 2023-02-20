import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tile } from '../tile';

@Component({
  selector: 'app-memory-card',
  templateUrl: './memory-card.component.html',
  styleUrls: ['./memory-card.component.scss']
})
export class MemoryCardComponent {
  @Input() tile?: Tile;
  @Output() cardFlippedEvent = new EventEmitter();

  onClick() {
    this.tile!.shown = true;
    this.cardFlippedEvent.emit();
  }
}
