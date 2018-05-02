import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import Apoiador from '../models/apoiador.model';

@Injectable()
export class ApoiadorService {

  private _api_url = 'http://localhost:3000';
  private _apoiadorUrl = `${this._api_url}/apoiador/`;
  private _ano = new Date().getFullYear().toString();
  private _mes = new Date().getUTCMonth().toString();

  constructor(private http: HttpClient) { }

  // Read todo, takes no arguments
  getApoiadores(ano?: string, mes?: string): Observable<Apoiador[]> {
    let url = '';
    if (ano == null || mes == null) {
      url = this._apoiadorUrl + `${this._ano}/${this._mes}`;
    } else {
      url = this._apoiadorUrl + `${ano}/${mes}`;
    }

    return this.http.get(url)
    .map(res  => {
      // Maps the response object sent from the server
      return res as Apoiador[];
    });
  }
}
