import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { PersonService } from '../services/person.service';
import { Person }        from '../interfaces/person';

@Component({
  selector: 'app-fazer-login',
  templateUrl: './fazer-login.page.html',
  styleUrls: ['./fazer-login.page.scss'],
})
export class FazerLoginPage implements OnInit {

    public backgroundImage = 'assets/img/background/background-5.jpg';
    public username: string;
    public password: string;


    constructor(private personService: PersonService,
		private alertCtrl: AlertController,
	        private navCtrl: NavController) {

    }
    
    ngOnInit() {
    }

    async alertUserAuthFailure(msg: string) {
	const alert = await this.alertCtrl.create({
	    header: 'Acesso',
	    subHeader: 'Informação',
	    message: msg,
	    buttons: ['OK']
	});

	await alert.present();
    }
    
    login() {
	let credentials = {
	    email:         this.username,
	    senha:         this.password
	};

	console.log("Iniciando autenticação...");
	this.personService.doAuthenticateLogin(credentials)
	    .subscribe(
		(person: Person) => {
		    console.log("Auth Ok: " + person.email);
		    this.personService.persistPersonLocally(person);
		    this.navCtrl.navigateRoot('/Perfil');
		},
		(err) => {
		    console.log(err);
		    if (err.status == 401) {
			this.alertUserAuthFailure("Email ou senha inválidos");
		    } else {
			this.alertUserAuthFailure("Usuário inexistente");
		    }
		}
	    );

    }

}
