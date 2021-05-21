import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstQuestionComponent } from './components/first-question/first-question.component';
import { SecondQuestionComponent } from './components/second-question/second-question.component';
import { ThirdQuestionComponent } from './components/third-question/third-question.component';
import { FourthQuestionComponent } from './components/fourth-question/fourth-question.component';
import { LeftTopComponent } from './components/fourth-question/left-top/left-top.component';
import { RightTopComponent } from './components/fourth-question/right-top/right-top.component';
import { RightBottomComponent } from './components/fourth-question/right-bottom/right-bottom.component';
import { LeftBottomComponent } from './components/fourth-question/left-bottom/left-bottom.component';
import { CenterComponent } from './components/fourth-question/center/center.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstQuestionComponent,
    SecondQuestionComponent,
    ThirdQuestionComponent,
    FourthQuestionComponent,
    LeftTopComponent,
    RightTopComponent,
    RightBottomComponent,
    LeftBottomComponent,
    CenterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
