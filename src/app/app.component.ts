import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-address-book';
  contact: any;

  constructor() {
    this.contact = {
      name: ``,
      email: ``,
      company: ``,
      role: ``,
      twitter: ``,
      location: ``,
      notes: ``
    }
  }

  createNewContact() {
    console.log('Someone clicked me!!!')
  }

}
