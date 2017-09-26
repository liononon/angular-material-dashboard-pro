import { Injectable } from '@angular/core';
import { Err } from "../domain/index";
import { Observable } from "rxjs/Observable";
import { showNotification } from '../utils/base.util';
import { LocalStorage } from '../utils/local.storage';


@Injectable()
export class BaseService{

    constructor(
       private ls: LocalStorage
    ){

    }

    httpError(error: any){
        const err = error.json();
        switch(err.error_code)
        {
            case 10004:
            err.msg = "用户名或密码错误";
            showNotification('top','right','danger',`${err.msg}`);
            break;
            default:
        }
        return Observable.throw(err as Err);
    }

    setToken(token){
        this.ls.set('token',token);
        return;
    }

    getToken(){
        return this.ls.get('token');
    }

    removeToken(){
        this.ls.remove('token');
        return;
    }
}