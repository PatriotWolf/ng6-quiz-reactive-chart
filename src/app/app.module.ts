import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileStatusComponent } from './profile-status/profile-status.component';
import { QuizContainerComponent } from './quiz-container/quiz-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileStatusComponent,
    QuizContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
