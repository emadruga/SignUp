import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person }     from '../interfaces/person';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { environment, SERVER_URL } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PersonService {

    public person: Person;
    public loaded: boolean = false;

    constructor(private http: HttpClient,
	       private storage: Storage) {

	this.person = null;
    }

    load(): Promise<boolean> {

	return new Promise((resolve) => {

	    this.storage.get('single_person').then((person) => {

		if(person != null){
		    this.person = person;
		}
        
		this.loaded = true;
		resolve(true);
  
	    });

	});
    } 

    doAuthenticateLogin(credentialData) : Observable<Person> {

	console.log(credentialData);
	
	let url =  SERVER_URL + '/api/login';
	let hdrs =  new HttpHeaders().set('Content-Type', 'application/json');
	console.log("Using " + url);

	return  this.http.post<Person>(url,JSON.stringify(credentialData),
			   {
			       headers: hdrs,
			   });
    }

    persistPersonLocally(ppp: Person) {
	console.log("Person persist: ");
	console.log(ppp);
	this.storage.set('single_person', ppp);

	this.load().then((result) => {
	    if (result) {
		this.loaded = true;
		console.log("Storage OK!");
	    } else {
		this.loaded = false;
		console.log("Storage failed!");
	    }
	});
    }

    getLocalPerson() : Person {
	if (this.loaded){
	    return this.person;
	}
	else {
	    return null;
	}
    }

    resetLocalPerson() : void {	
	this.storage.remove('single_person')
	    .then(() =>
		  {
		      this.person = null;
		      this.loaded = false;
		  }
		 );
    }

    
    saveApplicant(personData) : Observable<Person> {

	console.log(personData);
	
	let url = SERVER_URL + '/api/rooms/insert';
	let hdrs =  new HttpHeaders().set('Content-Type', 'application/json');
	console.log("Using " + url);

	return  this.http.post<Person>(url,JSON.stringify(personData),
			   {
			       headers: hdrs,
			   });
    }

    updateApplicant(personData) : Observable<Person> {

	console.log("Registro a ser atualizado para:");
	console.log(personData);
	
	let url = SERVER_URL + '/api/rooms/update';
	let hdrs =  new HttpHeaders().set('Content-Type', 'application/json');
	console.log("Using " + url);

	return  this.http.post<Person>(url,JSON.stringify(personData),
			   {
			       headers: hdrs,
			   });
    }

}
