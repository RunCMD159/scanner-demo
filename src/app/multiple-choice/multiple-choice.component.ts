import { Component } from '@angular/core';

@Component({
  selector: 'app-multiple-choice',
  imports: [],
  templateUrl: './multiple-choice.component.html',
  styleUrl: './multiple-choice.component.scss'
})
export class MultipleChoiceComponent {
  quizData = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      answer: 'Paris'
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
      answer: 'Mars'
    }
    // Add more questions as needed
  ];
  currentQuestionIndex = 0;
  selectedOption: string | null = null;
  score = 0;

  selectOption(option: string) {
    this.selectedOption = option;
  }

  submitAnswer() {
    if (this.selectedOption === this.quizData[this.currentQuestionIndex].answer) {
      this.score++;
    }
    this.currentQuestionIndex++;
    this.selectedOption = null;
  }

  restartQuiz() {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.selectedOption = null;
  }
}
