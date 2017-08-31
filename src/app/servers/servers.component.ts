import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  // styleUrls: ['./servers.component.css']
  // styles: [`
  //   .title {
  //   color: dodgerblue;
  // }
  // `]
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  allowNewServer: boolean = false;
  serverCreated: boolean = false;
  serverCreationStatus: string= "NO servers yet...";
  serverName: string = "";
  servers: Array<String> = ["server 1"];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "server created :" + this.serverName;
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName =(<HTMLInputElement>event.target).value;
  }
}
