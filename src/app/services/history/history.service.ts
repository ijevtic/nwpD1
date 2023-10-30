import { Injectable } from '@angular/core';
import {Stack} from "../../util/Stack";
import {IStack} from "../../util/IStack";
import { HttpParams } from '@angular/common/http';
import { HistoryEntry, IStackEntry } from 'src/app/util/types';

@Injectable({
  providedIn: 'root'
})
export class HistoryService{

  commands: IStack<IStackEntry> = new Stack();

  constructor() {}

  addRecord(url: string, parameters: HttpParams): void {
    const timestamp = new Date();
    const requestUrl = `${url}?${parameters.toString()}`;
    this.commands.push(new HistoryEntry(timestamp, requestUrl));
    console.log("dodo", this.commands)
  }

  getRecords(): string[] {
    return this.commands.print();
  }

  // getCommands(): IStack<IStackEntry> {
  //   return this.commands;
  // }
}