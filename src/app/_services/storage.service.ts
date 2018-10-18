import { Injectable } from '@angular/core';
import { UserAccess } from '../user/user.model';

const TOKEN_KEY: string = 'access'

@Injectable()
export class StorageService {

    constructor() { } 


    getToken() {
    console.log("Token recuperado: "+localStorage.getItem(TOKEN_KEY));
      return localStorage.getItem(TOKEN_KEY);
    }

    saveToken(userAccess: string) {
     
        localStorage.removeItem(TOKEN_KEY);
    
        const token = userAccess.substring(7)
        localStorage.setItem(TOKEN_KEY, token);
    }
    
    removeToken(){
        localStorage.removeItem(TOKEN_KEY);
        localStorage.clear();
    }
    
}