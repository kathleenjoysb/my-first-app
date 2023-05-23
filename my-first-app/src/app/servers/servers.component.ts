import { Component } from '@angular/core';
// import { NgModel } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { AppComponent } from '../app.component';


// @NgModel({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//   FormsModule
//   ]
// })

@Component({
   selector: 'app-servers',
  //selector: '[app-servers]',
   templateUrl: './servers.component.html',
  //template: ' <app-server></app-server><app-server></app-server> ',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
    allowNewServer = false;
    serverCreationStatus = 'No server was created';
    serverName = 'Testserver';
    serverCreated = false;
    servers = ['Testserver', 'Testserver 2'] //added #41 s2

    constructor () {
      setTimeout (() => {
        this.allowNewServer = true;
      }, 2000);
    }


    onCreateServer() {
      this.serverCreated = true;
      this.servers.push(this.serverName) // added #41 s2
      this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    }

    onUpdateServerName (event: Event){
        this.serverName = (<HTMLInputElement>event.target).value;
    }

}
