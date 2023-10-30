import { Injectable } from '@angular/core';

export interface IStack<T> {
    push(item: T): void;
    pop(): void;
    top(): T | undefined;
    size(): number;
    print(): string[];
  }
  
  