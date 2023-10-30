import { Component } from '@angular/core';
import {ConfigService} from "../../services/config/config.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private configService: ConfigService) {
  }

  getToken() {
    return this.configService.getToken();
  }
}
