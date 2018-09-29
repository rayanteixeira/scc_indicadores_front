import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
//import { URLSearchParams, RequestOptions, Http } from '@angular/http';

import * as moment from 'moment';
import { EventEmitter } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { HttpClient, HttpParams } from '@angular/common/http';




export class DashboardFilter {
    dataLancamento: Date;
}

@Injectable()
export class DashboardService {

    constructor(private http: HttpClient, private storage: StorageService) { }

    public buscarPorAno(filter: DashboardFilter): Promise<any[]> {
        
        const option = filter.dataLancamento ? { params: new HttpParams().set('dataLancamento', moment(filter.dataLancamento).format('YYYY-MM-DD')) } : {}
        return this.http.get<any>(`${environment.base_url}/dashboard/ano`, option)
            .toPromise()
            .then(resposta => {
                // const lancamento = JSON.stringify(resposta) ;
                return resposta;
            }
            );
    }

    public buscarPorMes(filter: DashboardFilter): Promise<any[]> {
        const option = filter.dataLancamento ? { params: new HttpParams().set('dataLancamento', moment(filter.dataLancamento).format('YYYY-MM-DD')) } : {}
        return this.http.get<any>(`${environment.base_url}/dashboard/mes`, option)
            .toPromise()
            .then(resposta => {
                // const lancamento = resposta.json();
                return resposta;
            }
            );
    }

}

export class EventEmitterService {

    private static emitters: { [nomeEvento: string]: EventEmitter<any> } = {}

    static get(nomeEvento: string): EventEmitter<any> {
        if (!this.emitters[nomeEvento])
            this.emitters[nomeEvento] = new EventEmitter<any>();
        return this.emitters[nomeEvento];
    }

}