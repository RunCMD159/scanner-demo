import {Routes} from '@angular/router';
import {QuizStartComponent} from "./quiz-start/quiz-start.component";
import {LeaderboardComponent} from "./leaderboard/leaderboard.component";

export const routes: Routes = [
  {
    path: '',
    component: QuizStartComponent
  },
  {
    path: 'leaderboard',
    component: LeaderboardComponent
  }
];
