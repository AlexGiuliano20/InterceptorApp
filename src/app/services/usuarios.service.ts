import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private _http: HttpClient) {}

  obtenerUsuarios() {
    let params = new HttpParams().append('page', '2');
    params = params.append('nombre', 'Alex');

    return this._http.get('https://reqres.in/api/user', { params }).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }
}
