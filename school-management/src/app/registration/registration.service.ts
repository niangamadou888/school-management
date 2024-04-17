import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registration } from './registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private baseURL = "http://localhost:8080/api/v1/registrations";

  constructor(private httpClient: HttpClient) { }

  getRegistrationList():Observable<Registration[]>{
    return this.httpClient.get<Registration[]>(`${this.baseURL}`);
  }

  createRegistration(registration: Registration):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, registration);
  }

  getRegistrationById(id: number): Observable<Registration>{
    return this.httpClient.get<Registration>(`${this.baseURL}/${id}`);
  }

  updateRegistration(id: number, registration: Registration): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, registration);
  }

  deleteRegistration(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
