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
  public email:string = ''; 

  //funcao para validar o nome (pq? pq eu posso)
  private validaNome(nome:string):boolean {
    if(this.nome.trim() != '' ){
      return true;
    }
    else{
      return false;
    }
  }

  //pra validar email tbm pq sim
  private validaEmail(email:string):boolean{
    return this.email.trim().includes('@');
  }


  public gravar():void {

    if (this.validaNome(this.nome) == true && this.validaEmail(this.email) == true){
      alert('Usuário cadastrado com sucesso!');
    } else{
      alert('Dados inválidos, verifique.');
    }
  }



  public cancelar():void {
    alert('cancelado');
  }
}
