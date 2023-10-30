import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/services/history/history.service';
import { IStack } from 'src/app/util/IStack';
import { Stack } from 'src/app/util/Stack';
import { HistoryEntry } from 'src/app/util/types';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit{
  historyEntries: HistoryEntry[];

  constructor(private historyService: HistoryService) {
    this.historyEntries = historyService.getRecords();
  }

  // getHistory() {
  //   this.historyEntries = this.historyService.getRecords();
  // }

  ngOnInit() {
    // this.getHistory();
  }
}
