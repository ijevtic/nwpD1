import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private configComponentVisits: number;

  private token: string;

  constructor() {
    this.configComponentVisits = 0;
    this.token = '';
  }

  incrementConfigComponentVisits(): void {
    this.configComponentVisits++;
  }

  getConfigComponentVisits(): number {
    return this.configComponentVisits;
  }

  setToken(token: string): void {
    localStorage.setItem('api_token', token);
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }
}
