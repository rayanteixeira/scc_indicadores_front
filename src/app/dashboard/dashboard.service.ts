import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';

import * as moment from 'moment';

export class DashboardFilter {
    dataLancamento: Date;
}

@Injectable()
export class DashboardService {

    constructor(private http: Http) { }

    public buscarPorData(filter: DashboardFilter): Promise<any[]> {
        const params = new URLSearchParams();

        if (filter.dataLancamento) {
            params.set('dataLancamento', moment(filter.dataLancamento).format('YYYY-MM-DD'))
        }

        return this.http.get(`${environment.base_url}/dashboard/mes`,
            { search: params })
            .toPromise()
            .then(resposta => {
                const lancamento = resposta.json();
                console.log(lancamento);
                return lancamento;
            }
            );
    }

}
