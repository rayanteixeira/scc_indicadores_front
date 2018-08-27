import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Response } from '@angular/http';
import { environment } from '../../environments/environment';

import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';
import { Lancamento, ResumoDiario } from './resumo-diario.model';
import { ErrorHandler } from '../errorHandler';



export class Filtro {
  dataLancamento: Date;
}

@Injectable()
export class ResumoDiarioService {

  resumoUrl = environment.base_url;

  constructor(
    private http: Http
  ) { }

  public adicionar(resumoDiario: any): Observable<any> {
    // const headers: Headers = new Headers();
    // headers.append('Content-type', 'application/json')
    return this.http.post(
      `${this.resumoUrl}/salva-resumo`,
      resumoDiario);
  }

  public listar(): Promise<any> {
    return this.http.get(`${this.resumoUrl}/lista-resumo`)
      .toPromise()
      .then(response => response.json())
      .catch(erro => {
        Promise.reject(`Erro ao acessar base de dados.`)
      })
  }

  public buscarPorData(filter: Filtro): Observable<ResumoDiario[]> {
    const params = new URLSearchParams();

    if (filter.dataLancamento) {
        params.set('dataLancamento', moment(filter.dataLancamento).format('YYYY-MM-DD'))
    }

    return this.http.get(`${this.resumoUrl}/busca-por-data`, {search: params})
        .map((resposta: Response) => resposta.json())
        .catch(ErrorHandler.handlerError);
  }

  public pesquisar(filtro: Filtro): Promise<Lancamento[]> {

    const params = new URLSearchParams();

    if (filtro.dataLancamento) {
      params.set('dataLancamento',
        moment(filtro.dataLancamento).format('YYYY-MM-DD'));
    }

    return this.http.get(`${this.resumoUrl}/busca-por-data`,
      { search: params })
      .toPromise()
      .then(response => {
        const lancamentos = response.json() as Lancamento[];
        return lancamentos;
      });

  }

  public getResumoDiario(): Observable<ResumoDiario[]> {
    return this.http.get(`${this.resumoUrl}/resumo-do-dia`)
        .map((resposta: Response) => resposta.json())
        .catch(ErrorHandler.handlerError);
}
}

