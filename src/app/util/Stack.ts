import { NgModule } from '@angular/core';
import { IStack } from './IStack';
import { HistoryEntry } from './types';
export class Stack implements IStack<HistoryEntry> {
    private storage: HistoryEntry[] = [];
    private length: number = 0;
  
    constructor() {}
  
    push(item: HistoryEntry): void {
      if(this.storage.length == this.length) {
        this.storage.push(item);
      }
      else {
        this.storage[this.length] = item;
      }
      this.length++;
    }
  
    pop(): void{
      this.length--;
    }
  
    top(): HistoryEntry | undefined {
      if(this.length == 0) {
        return undefined;
      }
      return this.storage[this.length-1];
    }
  
    size(): number {
      return this.length;
    }

    print(): HistoryEntry[] {
        let returnValue: HistoryEntry[] = this.storage.reverse();

        return returnValue;
    }
  }