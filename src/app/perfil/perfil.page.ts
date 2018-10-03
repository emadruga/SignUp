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
	this.pessoa = this.personServ.getLocalPerson();
    }

    doEdit() {
	this.navCtrl.navigateForward('/NovoCadastro');
    }

    ngOnInit() {
	console.log(this.pessoa);
    }
}
