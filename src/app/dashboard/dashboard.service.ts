import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http, URLSearchParams } from '@angular/http';

import * as moment from 'moment';
import { EventEmitter } from '@angular/core';

export class DashboardFilter {
    dataLancamento: Date;
}

@Injectable()
export class DashboardService {

    constructor(private http: Http) { }

    public buscarPorAno(filter: DashboardFilter): Promise<any[]> {
        const params = new URLSearchParams();
        

        if (filter.dataLancamento) {
            params.set('dataLancamento', moment(filter.dataLancamento).format('YYYY-MM-DD'))
        }

        return this.http.get(`${environment.base_url}/dashboard/ano`,
            { search: params })
            .toPromise()
            .then(resposta => {
                const lancamento = resposta.json();
                return lancamento;
            }
            );
    }

    public buscarPorMes(filter: DashboardFilter): Promise<any[]> {
        const params = new URLSearchParams();

        if (filter.dataLancamento) {
            params.set('dataLancamento', moment(filter.dataLancamento).format('YYYY-MM-DD'))
        }

        return this.http.get(`${environment.base_url}/dashboard/mes`,
            { search: params })
            .toPromise()
            .then(resposta => {
                const lancamento = resposta.json();
                return lancamento;
            }
            );
    }

}

export class EventEmitterService {

    private static emitters: {[nomeEvento: string]: EventEmitter<any>} = {}

    static get(nomeEvento: string): EventEmitter<any> {
        if (!this.emitters[nomeEvento])
            this.emitters[nomeEvento] = new EventEmitter<any>();
        return this.emitters[nomeEvento];
    }

}