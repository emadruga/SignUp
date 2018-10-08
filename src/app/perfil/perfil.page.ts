import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PersonService } from '../services/person.service';
import { Person }        from '../interfaces/person';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

    public pessoa: Person;
    
    constructor(private personServ: PersonService,
	       private navCtrl: NavController) {
    }

    doEdit() {
	this.navCtrl.navigateForward('/NovoCadastro');
    }

    doExit() {
	this.personServ.resetLocalPerson();
	this.navCtrl.navigateForward('/home');
    }

    ngOnInit() {
	this.personServ.load();
	this.pessoa = this.personServ.getLocalPerson();
	console.log("Perfil lido:");
	if(this.personServ.loaded) {
	    console.log(this.pessoa);
	} else {
	    console.log("Vazio");
	}
    }
}
