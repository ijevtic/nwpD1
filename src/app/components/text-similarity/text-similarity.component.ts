import { Component } from '@angular/core';
import { ConfigService } from 'src/app/services/config/config.service';
import { DandelionService } from 'src/app/services/dandelion/dandelion.service';

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent {

  text1: string;
  text2: string;

  similarity: number;
  errorMessage: string;

  constructor(private dandelionService: DandelionService, private configService: ConfigService) {
    this.text1 = '';
    this.text2 = '';
    this.similarity = -1;
    this.errorMessage = '';
  }

  calculateSimilarity() {
    this.dandelionService.getTextSimilarity(this.text1, this.text2, this.configService.getToken()).subscribe((response) => {
      this.similarity = response.similarity;
    },
    (error: any) => {
      this.errorMessage = `There has been an error with the request.`;
    });
  }

}
