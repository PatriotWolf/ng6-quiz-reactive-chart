import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import angular-fusioncharts
import { FusionChartsModule } from 'angular-fusioncharts';

// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as Widgets from 'fusioncharts/fusioncharts.widgets';
import * as PowerChart from 'fusioncharts/fusioncharts.powercharts';

import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, PowerChart, Widgets, FusionTheme);

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
    BrowserModule,
    FusionChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
