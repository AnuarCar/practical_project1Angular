import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personas } from '../Modelo/Personas';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

 
  constructor(private http:HttpClient) { }

  Url='http//://localhost:8080/ejemplo01/personas';


  getPersonas(){
    return this.http.get<Personas[]>(this.Url);
  }
}
