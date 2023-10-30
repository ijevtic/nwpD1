import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntityExtractionComponent } from './components/entity-extraction/entity-extraction.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { TextSimilarityComponent } from './components/text-similarity/text-similarity.component';
import { LanguageDetectionComponent } from './components/language-detection/language-detection.component';
import { PercentagePipe } from './pipes/percentage/percentage.pipe';
import { HistoryComponent } from './components/history/history.component';
import { CustomDateFormatPipe } from './pipes/custom-date-format/custom-date-format.pipe';
import { SentimentAnalysisComponent } from './components/sentiment-analysis/sentiment-analysis.component';
import {MatInputModule} from '@angular/material/input';
// import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  declarations: [
    AppComponent,
    ConfigurationComponent,
    EntityExtractionComponent,
    TextSimilarityComponent,
    LanguageDetectionComponent,
    PercentagePipe,
    HistoryComponent,
    CustomDateFormatPipe,
    SentimentAnalysisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
