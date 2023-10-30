import { Component } from '@angular/core';
import { DetectedLang } from 'src/app/model';
import { ConfigService } from 'src/app/services/config/config.service';
import { DandelionService } from 'src/app/services/dandelion/dandelion.service';

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.css']
})
export class LanguageDetectionComponent {
  text: string;
  cleanCheckBox: boolean;
  detectedLanguages: DetectedLang[];

  constructor(private dandelionService: DandelionService, private configService: ConfigService) {
    this.text = '';
    this.cleanCheckBox = false;
    this.detectedLanguages = [];
  }

  detectLanguage() {
    console.log(this.text);
    console.log(this.cleanCheckBox);
    this.dandelionService.getLanguageDetection(this.text, this.cleanCheckBox, this.configService.getToken()).subscribe((response) => {
      this.detectedLanguages = response.detectedLangs;
    });
  }
}
