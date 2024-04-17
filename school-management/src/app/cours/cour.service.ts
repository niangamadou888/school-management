import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cour } from './cour';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourService {

  private baseURL = "http://localhost:8080/api/v1/cours";

  constructor(private httpClient: HttpClient) { }

  getCourList():Observable<Cour[]>{
    return this.httpClient.get<Cour[]>(`${this.baseURL}`);
  }

  createCour(cour: Cour):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, cour);
  }

  getCourById(id: number): Observable<Cour>{
    return this.httpClient.get<Cour>(`${this.baseURL}/${id}`);
  }

  updateCour(id: number, cour: Cour): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, cour);
  }

  deleteCour(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
