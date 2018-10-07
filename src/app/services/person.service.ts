import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person }     from '../interfaces/person';
import { Observable } from 'rxjs';
import { environment, SERVER_URL } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PersonService {

    private person: Person;

    constructor(private http: HttpClient) {

	this.person = undefined;
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

    persistPersonLocally(p: Person) {
	this.person = p;
    }

    getLocalPerson() : Person {
	return this.person;
    }

    resetLocalPerson() : void {
	this.person = undefined;
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

	return  this.http.put<Person>(url,JSON.stringify(personData),
			   {
			       headers: hdrs,
			   });
    }

}
