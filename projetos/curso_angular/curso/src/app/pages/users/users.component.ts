import { Component } from '@angular/core';
import { User } from '../../_models/user';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: false,

  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  //users: String[] = ['Vinicius', 'Julio', 'Larissa', 'Maria']
  userSelecionado: User | undefined;
  userForm: FormGroup = new FormGroup({});

  constructor(private fb: FormGroup){

  }

  users: User[] = [
    {
      nome:'Vinicius',
      idade: 25,
    },
    {
      nome:'Julio',
      idade: 19,
    },
    {
      nome:'Larissa',
      idade: 45,
    },
    {
      nome:'Maria',
      idade: 32,
    },
  ];

  infoUserSelecionado(user: User){
    this.userSelecionado = user;
  }
}
