import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  email;
  password;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
 
  constructor() { }

  ngOnInit() {
  }
  getErrorMessage() {
    return this.emailFormControl.hasError('required') ? 'Ce champ est requis' :
        this.emailFormControl.hasError('email') ? 'Adresse e-mail non valide' :
        this.passwordFormControl.hasError('required') ? 'Ce champ est requis' :
            '';
  }

}
