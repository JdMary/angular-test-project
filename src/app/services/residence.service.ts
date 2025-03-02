import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Residence} from "../core/models/Residence";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ResidenceService {
  url: string="/api/residences";
  constructor(private http: HttpClient) { }

  getAll():Observable<Residence[]> {
    return this.http.get<Residence[]>(this.url);
  }
  getResidenceById(id: string):Observable<Residence>{
    return this.http.get<Residence>(this.url+"?id="+ id);
  }

}
