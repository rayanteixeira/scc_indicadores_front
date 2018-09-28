import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http, URLSearchParams, RequestOptions } from '@angular/http';

import * as moment from 'moment';
import { EventEmitter } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { LocalUser } from '../user/local_user.model';
import { HttpClient,
    HttpHeaders,
    HttpRequest,
    HttpResponse,
    HttpEvent,
    HttpEventType,
    HttpParams } from '@angular/common/http';



export class DashboardFilter {
    dataLancamento: Date;
}

@Injectable()
export class DashboardService {

    localUser: LocalUser;
    constructor(private http: Http,  private storage: StorageService) { }

    public buscarPorAno(filter: DashboardFilter): Promise<any[]> {
        const myParams = new URLSearchParams();
        
        if (filter.dataLancamento) {
            myParams.set('dataLancamento', moment(filter.dataLancamento).format('YYYY-MM-DD'))
        }

        this.localUser = this.storage.getLocalUser()
     
        let myHeaders = new Headers({
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${this.localUser.token}`,
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
        });

        let options = new RequestOptions({headers: myHeaders});
       
    

        return this.http.get(`${environment.base_url}/dashboard/ano`, options)
            .toPromise()
            .then(resposta => {
                const lancamento = resposta.json();
                return lancamento;
            }
            );
    }

    public buscarPorMes(filter: DashboardFilter): Promise<any[]> {
        const myParams = new URLSearchParams();

        if (filter.dataLancamento) {
            myParams.set('dataLancamento', moment(filter.dataLancamento).format('YYYY-MM-DD'))
        }

        return this.http.get(`${environment.base_url}/dashboard/mes`,
            { params: myParams })
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