import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Response } from '@angular/http';
import { environment } from '../../environments/environment';

import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';
import { Lancamento, TabelaResumosDiarios } from './resumo-diario.model';
import { ErrorHandler } from '../errorHandler';
import { HttpParams, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


export class Filtro {
  dataLancamento: Date;
}

@Injectable()
export class ResumoDiarioService {

  resumoUrl = environment.base_url;

  constructor(
    private http: HttpClient
  ) { }

  salvarResumo(resumoDiario: any): Observable<any> {
    return this.http.post<any>(`${this.resumoUrl}/salva-resumo`,  resumoDiario);
  }

  buscarResumoPorData(filter: Filtro): Observable<TabelaResumosDiarios> {

    const option = filter.dataLancamento ? { params: new HttpParams().set('dataLancamento', moment(filter.dataLancamento).format('YYYY-MM-DD')) } : {}

    return this.http.get<any>(`${this.resumoUrl}/resumo-diario`, option)
      .map((resposta) => resposta)
      //.catch(ErrorHandler.handlerError);
  }

 
  destinatarios(): Observable<any> {
    return this.http.get<any>(`${this.resumoUrl}/destinatario`)
      .map((resposta) => resposta)
      //.catch(ErrorHandler.handlerError);
  }

  removeDestinatario(element): Observable<any> {
    return this.http.delete(`${this.resumoUrl}/destinatario/${element.id}`);
  }

  salvarDestinatario(destinatario): Observable<any> {
    return this.http.post(`${this.resumoUrl}/destinatario`, destinatario)
      .map((resposta) => resposta)
      //.catch(ErrorHandler.handlerError);
  }

}


