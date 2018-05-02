import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import Campanha from '../models/campanha.model';

@Injectable()
export class CampanhaService {

  private _api_url = 'http://localhost:3000';
  private _campanhaUrl = `${this._api_url}/campanha/`;
  private _ano = new Date().getFullYear().toString();
  private _mes = new Date().getUTCMonth().toString();

  constructor(private http: HttpClient) { }

  // Read todo, takes no arguments
  getCampanhas(ano?: string, mes?: string): Observable<Campanha[]> {
    let url = '';
    if (ano == null || mes == null) {
      url = this._campanhaUrl + `${this._ano}/${this._mes}`;
    } else {
      url = this._campanhaUrl + `${ano}/${mes}`;
    }

    return this.http.get(url)
    .map(res  => {
      // Maps the response object sent from the server
      return res as Campanha[];
    });
  }
}
