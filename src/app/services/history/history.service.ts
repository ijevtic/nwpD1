import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  commands: string[] = [];

  constructor() { }

  addCommand(command: string): void {
    this.commands.push(command);
  }

  getCommands(): string[] {
    return this.commands;
  }
}
