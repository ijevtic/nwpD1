import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConfigurationComponent,
    EntityExtractionComponent,
    TextSimilarityComponent
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
    MatListModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
