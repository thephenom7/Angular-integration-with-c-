import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getBooks(): Observable<any[]>{
    return this.http.get<any>('http://localhost:49952/api/book')
  }}
