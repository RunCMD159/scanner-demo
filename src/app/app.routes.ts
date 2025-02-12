import {Routes} from '@angular/router';
import {QuizStartComponent} from "./quiz-start/quiz-start.component";
import {LeaderboardComponent} from "./leaderboard/leaderboard.component";
import {MultipleChoiceComponent} from './multiple-choice/multiple-choice.component';

export const routes: Routes = [
  {
    path: '',
    component: QuizStartComponent
  },
  {
    path: 'leaderboard',
    component: LeaderboardComponent
  },
  {
    path: 'choice-quiz',
    component: MultipleChoiceComponent
  }
];
