import { environment } from '../../environments/environment';
import { Observable } from "rxjs/Observable";

declare module 'rxjs/Observable' {
    interface Observable<T> {
        debug: (...any) => Observable<T>;
    }
}

Observable.prototype.debug = function (message: string) {
    return this.do(
        (next) => {
            if(!environment.production) {
                console.log(message, next);
            }
        },
        (err) => {
            if(!environment.production) {
                console.error('ERROR>>>',message, err);
            }
        },
        () => {
            if(!environment.production) {
                console.log(message,'Completed-----')
            }
        }
    )
}