import { Component } from '@angular/core'
import { UsuariosService } from './services/usuarios.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private readonly _usuariosService: UsuariosService) {
    this._usuariosService.getUsers()
      .subscribe((resp: any) => {
        console.log({ resp })
      }, (err) => {
        // Here is the error info from the interceptor
        console.log('Error en el appComponent', err)
      })
  }
}
