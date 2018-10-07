import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { environment, SERVER_URL } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
      console.log(environment.message);
      console.log(SERVER_URL);
   }

    doForm() {
	console.log("Vamos criar nova ficha de pré-inscrição");
	this.navCtrl.navigateForward('/NovoCadastro');
    }

    doLogin() {
	console.log("Vamos atualizar dados de pré-inscrição de candidato existente");
	this.navCtrl.navigateForward('/FazerLogin');
    }

}
