import {Component, EventEmitter, Output} from '@angular/core';
import {TimeInterval} from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  @Output() generateIntervalEvent = new EventEmitter<number>();
  counter = 0;
  interval = null;

  startGame() {
    this.interval = setInterval(() => this.generateIntervalEvent.emit(this.counter++), 1000);
  }

  stopGame() {
    clearInterval(this.interval);
  }
}

