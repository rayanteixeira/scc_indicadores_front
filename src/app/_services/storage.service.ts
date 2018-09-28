import { Injectable } from '@angular/core';
import { LocalUser } from '../user/local_user.model';
import { STORAGE_KEYS } from '../_guards/storage_keys.config';

@Injectable()
export class StorageService {

    constructor() { } 

    getLocalUser(): LocalUser {
        const usr = localStorage.getItem(STORAGE_KEYS.localUser);
        if (usr == null) {
            return null;
        } else {
            return JSON.parse(usr);
        }
    }

    setLocalUser(obj: LocalUser) {
        if (obj == null) {
            localStorage.removeItem(STORAGE_KEYS.localUser);
        } else {
            localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
        }
    }
}