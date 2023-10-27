import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  date: Date;

  primaryColor: string = 'blue';
  boldTextEnabled: boolean = true;

  router: Router;

  constructor(router: Router) {
    this.date = new Date();
    this.router = router;
  }


  ngOnInit(): void {

    // this.router.navigate(['configuration']);
    // this.router.navigate(['posts', '1', 'settings']);
    // location.replace('/configuration');

  }

}
