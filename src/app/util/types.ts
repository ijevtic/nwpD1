export class HistoryEntry{
    timestamp: Date;
    requestUrl: string;
  
    constructor(timestamp: Date, requestUrl: string) {
      this.timestamp = timestamp;
      this.requestUrl = requestUrl;
    }
}