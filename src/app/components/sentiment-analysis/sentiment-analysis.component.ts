import { Component } from '@angular/core';
import { ConfigService } from 'src/app/services/config/config.service';
import { DandelionService } from 'src/app/services/dandelion/dandelion.service';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent {
  text: string;
  options: string[] = ['en', 'it', 'auto'];
  selectedOption: string = this.options[2];
  
  score: number;
  sentimentType: string;
  result: boolean;

  constructor(private dandelionService: DandelionService, private configService: ConfigService) {
    this.text = '';
    this.score = 0;
    this.sentimentType = '';
    this.result = false;
  }

  analyzeSentiment() {
    this.dandelionService.getSentimentAnalysis(this.text, this.configService.getToken(), this.selectedOption).subscribe((response) => {
      this.result = true;
      this.score = response.sentiment.score;
      this.sentimentType = response.sentiment.type;
    });
  }

  getBackgroundColor(): string{

    //red color rgb
    var r1 = 255;
    var g1 = 0;
    var b1 = 0;

    //green color rgb
    var r2 = 0;
    var g2 = 255;
    var b2 = 0;

    var ratio = (this.score+1)/2;

    var r = Math.ceil((r2 - r1) * ratio + r1);
    var g = Math.ceil((g2 - g1) * ratio + g1);
    var b = Math.ceil((b2 - b1) * ratio + b1);

    return "rgb(" + r + "," + g + "," + b + ")";

  }

}
