import { NgModule } from '@angular/core';
import { IStack } from './IStack';
import { IStackEntry } from './types';
export class Stack implements IStack<IStackEntry> {
    private storage: IStackEntry[] = [];
    private length: number = 0;
  
    constructor() {}
  
    push(item: IStackEntry): void {
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
  
    top(): IStackEntry | undefined {
      if(this.length == 0) {
        return undefined;
      }
      return this.storage[this.length-1];
    }
  
    size(): number {
      return this.length;
    }

    print(): string[] {
        let returnValue: string[] = [];
        for (let i = this.length - 1; i >= 0; i--) {
            returnValue.push(this.storage[i].print());
        }

        return returnValue;
    }
  }