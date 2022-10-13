import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseRequest } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private client: HttpClient) {}

  loadUsers() {
    const url = 'https://reqres.in/api/users';

    return this.client.get<ResponseRequest>(url);
  }


}
