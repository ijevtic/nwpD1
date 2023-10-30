import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import { EntityExtractionResponse, LanguageDetectionResponse, SentimentAnalysisResponse, TextSimilarityResponse } from 'src/app/model';
import { ConfigService } from '../config/config.service';
import { HistoryService } from '../history/history.service';

@Injectable({
  providedIn: 'root'
})
export class DandelionService {

  private readonly entityExtractionApi = environment.entityExtractionApi
  private readonly textSimilarityApi = environment.textSimilarityApi;
  private readonly languageDetectionApi = environment.languageDetectionApi;
  private readonly sentimentAnalysisApi = environment.sentimentAnalysisApi;

  constructor(private httpClient: HttpClient, private historyService: HistoryService) { }

  getEntityExtraction(text: string, minConfidence: number, include: string[], token: string): Observable<EntityExtractionResponse> {
    let params = new HttpParams();
    params = params.append('text', text.replace(/ /g, "+"));
    params = params.append('min_confidence', minConfidence);
    params = params.append('include', include.join(','));
    params = params.append('lang', 'en');
    params = params.append('token', token);
    this.historyService.addRecord(this.entityExtractionApi, params);

    return this.httpClient.get<EntityExtractionResponse>(this.entityExtractionApi, { params });
  }

  getTextSimilarity(text1: string, text2: string, token: string): Observable<TextSimilarityResponse> {
    let params = new HttpParams();
    params = params.append('text1', text1.replace(/ /g, "+"));
    params = params.append('text2', text2.replace(/ /g, "+"));
    params = params.append('token', token);
    this.historyService.addRecord(this.entityExtractionApi, params);

    return this.httpClient.get<TextSimilarityResponse>(this.textSimilarityApi, { params })
  }

  getLanguageDetection(text: string, clean: boolean, token: string): Observable<LanguageDetectionResponse> {
    let params = new HttpParams();
    params = params.append('text', text.replace(/ /g, "+"));
    params = params.append('clean', clean.toString());
    params = params.append('token', token);
    this.historyService.addRecord(this.entityExtractionApi, params);

    return this.httpClient.get<LanguageDetectionResponse>(this.languageDetectionApi, { params });
  }

  getSentimentAnalysis(text: string, token: string, lang: string): Observable<SentimentAnalysisResponse> {
    let params = new HttpParams();
    params = params.append('text', text.replace(/ /g, "+"));
    params = params.append('lang', lang);
    params = params.append('token', token);
    this.historyService.addRecord(this.entityExtractionApi, params);

    return this.httpClient.get<SentimentAnalysisResponse>(this.sentimentAnalysisApi, { params });
  }
}
