import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor( private usuarioService: UsuariosService) { }

  public usuarios: any = [];

  ngOnInit(): void {

    this.usuarioService.loadUsers()
      .subscribe( resp => {
        console.log(resp.data );
        //console.log(resp.data[0].last_name );
        //console.log(resp.data[0].fullName );
      })
  }

}
