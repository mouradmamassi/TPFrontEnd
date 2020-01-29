import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { state, style, trigger, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        // height: '200px',
        // opacity: 1,
        // backgroundColor: 'yellow'
        visibility: 'visible',
        width: '400px',
      })),
      state('closed', style({
        visibility: 'hidden',
        width: 0,
      })),
      transition('open => closed', [
        animate('0.1s')
      ]),
      transition('closed => open', [
        animate('0.1s')
      ]),
    ]),
  ],
})
export class ConnexionComponent implements OnInit {

  inscriptionForm;
  connexionForm;
  
  // emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  // passwordFormControl = new FormControl('', [Validators.required]);
  // passwordConfirmationFormControl = new FormControl('', [Validators.required]);
  isOpenConnexion = true;
  isOpenInscription = false;


  constructor() { }

  ngOnInit() {
    this.inscriptionForm = new FormGroup({
      emailInscription: new FormControl('', [Validators.required, Validators.email]),
      passwordInscription: new FormControl('', [Validators.required]),
      passwordConfirmationInscription: new FormControl('', [Validators.required]),
    }, passwordMatchValidator);

    this.connexionForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  get emailConnexion() { return this.connexionForm.get('email'); }
  get passwordConnexion() { return this.connexionForm.get('password'); }

  get emailInscription() { return this.inscriptionForm.get('emailInscription'); }
  get passwordInscription() { return this.inscriptionForm.get('passwordInscription'); }
  get passwordConfirmationInscription() { return this.inscriptionForm.get('passwordConfirmationInscription'); }

  getErrorMessageConnexion() {
    return this.emailConnexion.hasError('required') ? 'Ce champ est requis' :
        this.emailConnexion.hasError('email') ? 'Adresse e-mail non valide' :
        this.passwordConnexion.hasError('required') ? 'Ce champ est requis' :
            '';
  }
  
  getErrorMessageInscription() {
    return this.emailInscription.hasError('required') ? 'Ce champ est requis' :
        this.emailInscription.hasError('email') ? 'Adresse e-mail non valide' :
        this.passwordInscription.hasError('required') ? 'Ce champ est requis' :
        this.passwordConfirmationInscription.hasError('required') ? 'Ce champ est requis' :
            '';
  }
  

  toggleConnexionInscription() {
    this.isOpenConnexion = !this.isOpenConnexion;
    this.isOpenInscription = !this.isOpenConnexion;
  }

}
function passwordMatchValidator(g: FormGroup){
  return g.get('passwordInscription').value === g.get('passwordConfirmationInscription').value
  ? null : {'mismatch': true};

}
