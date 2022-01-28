import { Injectable } from '@angular/core'
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Send token in every request
    const headers = new HttpHeaders({
      'x-token': 'SFLSJFASLFLS90SDFLSFJ9S9FJ'
    })

    // Clone the request to add the new header
    const reqClone = req.clone({ headers })

    // Send the newly created request and handle the error
    return next.handle(reqClone)
      .pipe(catchError(this.getErrorHandle))
  }

  // Get error handler
  getErrorHandle (err: HttpErrorResponse): Observable<any> {
    // console.log('Sucedió un error by interceptor')
    // console.warn(err)

    // Return the error info
    return throwError(() => err.message)
  }
}
