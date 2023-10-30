import { Injectable } from '@angular/core';
import {Stack} from "../../util/Stack";
import {IStack} from "../../util/IStack";
import { HttpParams } from '@angular/common/http';
import { HistoryEntry } from 'src/app/util/types';

@Injectable({
  providedIn: 'root'
})
export class HistoryService{

  commands: IStack<HistoryEntry> = new Stack();

  constructor() {}

  addRecord(url: string, parameters: HttpParams): void {
    const timestamp = new Date();
    const requestUrl = `${url}?${parameters.toString()}`;
    this.commands.push(new HistoryEntry(timestamp, requestUrl));
    console.log("dodo", this.commands)
  }

  getRecords(): HistoryEntry[] {
    return this.commands.print();
  }

  // getCommands(): IStack<HistoryEntry> {
  //   return this.commands;
  // }
}