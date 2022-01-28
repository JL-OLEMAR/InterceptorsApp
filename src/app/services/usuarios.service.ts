import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  constructor (private readonly _http: HttpClient) { }

  getUsers (): Observable<any> {
    let params = new HttpParams().append('page', '2')
    params = params.append('name', 'Fernando')

    // This is where interceptors can be used  ↓↓↓ { headers } ↓↓↓
    return this._http.get('https://reqres.in/kskdfkds/api/user', { params })
      .pipe(map((resp: any) => resp.data))
  }
}
