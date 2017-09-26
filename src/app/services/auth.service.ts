import { Headers, Http } from '@angular/http';
import { Injectable, Inject } from '@angular/core';
import { User,Auth } from "../domain";
import { Observable } from "rxjs/Observable";
import { BaseService } from "./base.service";


@Injectable()
export class AuthService {

    constructor(
        private http: Http, 
        @Inject('BASE_CONFIG') private config,
        private base: BaseService
    ) { }

    private headers = new Headers({
        'Content-Type': 'application/json',
        'token': this.base.getToken()
    })

    login(username: string, password: string): Observable<Auth> {
        const uri = `${this.config.uri}/token/app`;
        return this.http
            .post(uri, {'ac': username, 'se': password})
            .map(res => {
                this.base.setToken(res.json().token);
                return;
            }).catch(this.base.httpError)
    }

    verify(): Observable<void> {
        const token = this.base.getToken();
        if(token){
            console.log('有token');
            const uri = `${this.config.uri}/token/verify`;
            return this.http
                .post(uri, {'token': token})
                .map(res => {
                    if(!res.json().isValid){
                        return false;
                    }
                    return true;
                }).catch(this.base.httpError)
        }
    }
}