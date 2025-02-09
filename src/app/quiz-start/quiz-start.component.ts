import {Component} from '@angular/core';
import {ScannerComponent} from "../scanner/scanner.component";
import {FormControl, FormGroup, FormsModule, NgForm} from "@angular/forms";

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
  playername ='';

  onSubmit(playerForm: NgForm) {
    console.log(playerForm)
  }
}
