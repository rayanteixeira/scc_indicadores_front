import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { LocalUser } from '../user/local_user.model';
import { StorageService } from './storage.service';

@Injectable()
export class AuthenticationService {
    url_login = environment.base_url_login;

    constructor(
        private http: HttpClient,
        private storage: StorageService
    ) { }

    login(credentials) {
        return this.http.post(this.url_login, credentials,
            {
                observe: 'response',
                responseType: 'text'
            });

    }

    successfulLogin(authorizationValue: string) {
        let tok = authorizationValue.substring(7); // pegar somente o token sem a palavra Bearer
        let user: LocalUser = {
            token: tok
        };

        this.storage.setLocalUser(user);

    }

    logout() {
        // remove user from local storage to log user out
        this.storage.setLocalUser(null);
    }
}
