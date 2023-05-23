import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    // #40 in section 2
    styles: ['.online {color: white;}'],
  
})
export class ServerComponent {
    serverID = 10;
    serverStatus = 'offline';

    constructor() {
        this. serverStatus = Math.random() > 0.5 ? 'online' : 'offline';

    }

    getServerStatus() {
        return this.serverStatus;
    }

    // added at #39 Section 2 attribute directive
    getColor() {
        return this.serverStatus === 'online' ? 'lightgreen' : 'mistyrose';
    }

}