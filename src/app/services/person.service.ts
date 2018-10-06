import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person }     from '../interfaces/person';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PersonService {

    private person: Person;

    private SERVERNAME = 'http://localhost:8080';
    // private SERVERNAME = 'https://shielded-temple-91138.herokuapp.com';
    
    constructor(private http: HttpClient) {

	this.person = undefined;
    }

    doAuthenticateLogin(credentialData) : Observable<Person> {

	console.log(credentialData);
	
	let url =  this.SERVERNAME + '/api/login';
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
	
	let url = this.SERVERNAME + '/api/rooms/insert';
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
	
	let url = this.SERVERNAME + '/api/rooms/update';
	let hdrs =  new HttpHeaders().set('Content-Type', 'application/json');
	console.log("Using " + url);

	return  this.http.post<Person>(url,JSON.stringify(personData),
			   {
			       headers: hdrs,
			   });
    }

}
