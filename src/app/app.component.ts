import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { PersonService } from './services/person.service';

const { SplashScreen, StatusBar } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
    constructor( private personService: PersonService) {

	this.personService.load();
	
	SplashScreen.hide().catch((err) => {
	    console.warn(err);
	});

	StatusBar.hide().catch((err) => {
	    console.warn(err);
	});
  }
}
