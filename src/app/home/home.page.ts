import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
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
