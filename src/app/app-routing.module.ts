import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstQuestionComponent } from './components/first-question/first-question.component';
import { FourthQuestionComponent } from './components/fourth-question/fourth-question.component';
import { SecondQuestionComponent } from './components/second-question/second-question.component';
import { ThirdQuestionComponent } from './components/third-question/third-question.component';

const routes: Routes = [
  {path:'first',component:FirstQuestionComponent},
  {path:'second',component:SecondQuestionComponent},
  {path:'third',component:ThirdQuestionComponent},
  {path:'fourth',component:FourthQuestionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
