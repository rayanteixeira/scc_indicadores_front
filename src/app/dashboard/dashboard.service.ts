import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';

import * as moment from 'moment';


export class DashboardFilter {
    dataLancamento: Date;
}


@Injectable()
export class DashboardService {

    constructor(private http: Http) {

    }

    public buscarPorData(filter: DashboardFilter): Promise<any[]> {
        const params = new URLSearchParams();

        if (filter.dataLancamento) {
            params.set('dataLancamento', moment(filter.dataLancamento).format('YYYY-MM-DD'))
        }

        return this.http.get(`${environment.base_url}/dashboard/mes`,
        {search: params})
        .toPromise()    
        .then(resposta => 
            {
               const lancamento = resposta.json()
               return lancamento;
            }
        );
    }
    
}
