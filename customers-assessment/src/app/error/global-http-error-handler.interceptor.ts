import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class GlobalHttpErrorHandler implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(3),
      catchError(err => {
        console.log('Error caught by Http Interceptor. Rethrowing...');
        return throwError(new Error('Could not complete you request at this time. Kindly try again later...'));
      })
    );
  }
}
