export interface IStackEntry {
    print(): string;
}


export class HistoryEntry implements IStackEntry{
    timestamp: Date;
    requestUrl: string;
  
    constructor(timestamp: Date, requestUrl: string) {
      this.timestamp = timestamp;
      this.requestUrl = requestUrl;
    }

    print(): string {
        return `${this.timestamp.toLocaleString()} - ${this.requestUrl}`;
    }
}