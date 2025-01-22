import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: false,

  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  //users: String[] = ['Vinicius', 'Julio', 'Larissa', 'Maria']
  userSelecionado: User | undefined;
  userForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.initilizeForm();
  }

  initilizeForm(){
    this.userForm = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(250)]],
      idade: ['', [Validators.required, Validators.min(12), Validators.max(110)]]
    });
  }

  SubmitForm(){
    if(this.userForm.valid){
      this.users.push(this.userForm.value)
      this.userForm.reset()
    };
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
