import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpenaiService {
  private apiUrl = 'http://127.0.0.1:8000/ask'; // ✅ corregido

  constructor(private http: HttpClient) {
    console.log('✅ OpenaiService inicializado');
  }

  sendPrompt(prompt: string): Observable<{ response: string }> {
    return this.http.post<{ response: string }>(this.apiUrl, { prompt });
  }
}