import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable()
export class ApiRequestInterceptor implements HttpInterceptor {

  private readonly domain: string = environment.apiBaseUrl;

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const req = request.clone({
      url: this.domain + request.url,
    });
    return next.handle(req);
  }
}
