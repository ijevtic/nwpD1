import { Component } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { Annotation } from 'src/app/model';
import { ConfigService } from 'src/app/services/config/config.service';
import { DandelionService } from 'src/app/services/dandelion/dandelion.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css']
})
export class EntityExtractionComponent {
  
  sliderValue: number;
  text: string;

  includeCheckBox: boolean;
  imageCheckBox: boolean;
  abstractCheckBox: boolean;
  categoriesCheckBox: boolean;

  annotations: Annotation[];

  constructor(private dandelionService: DandelionService, private configService: ConfigService) {
    this.sliderValue = 5;
    this.text = '';
    this.includeCheckBox = false;
    this.imageCheckBox = false;
    this.abstractCheckBox = false;
    this.categoriesCheckBox = false;
    this.annotations = [];
  }

  extractEntities() {
    var include: string[] = [];
    if(this.includeCheckBox === true) {
      if(this.imageCheckBox === true) {
        include.push('image');
      }
      if(this.abstractCheckBox === true) {
        include.push('abstract');
      }
      if(this.categoriesCheckBox === true) {
        include.push('categories');
      }
    }

    console.log(this.includeCheckBox, this.imageCheckBox, this.abstractCheckBox, this.categoriesCheckBox);

    console.log(this.configService.getToken());

    this.dandelionService.getEntityExtraction(this.text, this.sliderValue/10.0, include, this.configService.getToken()).subscribe((response) => {
        this.annotations = response.annotations;
    });
  }
}
