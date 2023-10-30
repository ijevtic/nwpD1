import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import { EntityExtractionResponse, TextSimilarityResponse } from 'src/app/model';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class DandelionService {

  private readonly entityExtractionApi = environment.entityExtractionApi
  private readonly textSimilarityApi = environment.textSimilarityApi;

  constructor(private httpClient: HttpClient) { }

  getEntityExtraction(text: string, minConfidence: number, include: string[], token: string): Observable<EntityExtractionResponse> {
    let params = new HttpParams();
    params = params.append('text', text.replace(/ /g, "+"));
    params = params.append('min_confidence', minConfidence);
    params = params.append('include', include.join(','));
    params = params.append('lang', 'en');
    params = params.append('token', token);
    console.log(params);
    return this.httpClient.get<EntityExtractionResponse>(this.entityExtractionApi, { params });
    // return this.httpClient.get<EntityExtractionResponse[]>(`${this.apiUrl}/?text=${text}&min_confidence=${minConfidence}&include=${include.join(',')}&lang=en&token=${token}`);
  }

  getTextSimilarity(text1: string, text2: string, token: string): Observable<TextSimilarityResponse> {
    let params = new HttpParams();
    params = params.append('text1', text1.replace(/ /g, "+"));
    params = params.append('text2', text2.replace(/ /g, "+"));
    params = params.append('token', token);
    return this.httpClient.get<TextSimilarityResponse>(this.textSimilarityApi, { params });
  }

  // getPosts(): Observable<PostClass[]> {
  //   return this.httpClient.get<Post[]>(`${this.apiUrl}/posts`).pipe<PostClass[]>(map(posts => {
  //     const postInstances: PostClass[] = []
  //
  //     for(const post of posts){
  //       postInstances.push(new PostClass(post.userId, post.id, post.title, post.body));
  //     }
  //
  //     return postInstances;
  //   }));
  // }
}
