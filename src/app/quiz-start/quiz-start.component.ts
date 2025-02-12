import {Component} from '@angular/core';
import {ScannerComponent} from '../scanner/scanner.component';
import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-quiz-start',
  imports: [
    ScannerComponent,
    FormsModule
  ],
  templateUrl: './quiz-start.component.html',
  styleUrl: './quiz-start.component.scss'
})
export class QuizStartComponent {
  playername = '';
  players: Set<string> = new Set<string>();


  onSubmit() {
    this.players.add(this.playername);
    this.playername = '';
  }
}
