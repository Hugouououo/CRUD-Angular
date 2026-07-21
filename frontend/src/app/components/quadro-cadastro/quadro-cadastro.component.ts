import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quadro-cadastro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './quadro-cadastro.component.html',
  styleUrl: './quadro-cadastro.component.scss'
})

export class QuadroCadastroComponent {

  public nome:string = '';


  public gravar():void {
    if(this.nome != ''){
      alert('Usuário registrado com sucesso!')
    } else {
      alert('Nome de usuário')
    }
  }

  public cancelar():void {
    alert('cancelado');
  }
}
