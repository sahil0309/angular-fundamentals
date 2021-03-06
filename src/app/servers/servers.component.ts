import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverName: string = 'Sahil';
  serverCreationStatus: string = 'No Server Was Created';
  serverCreated: boolean = false;
  servers=['Server 1','Server 2'];

  constructor() {
    setTimeout(() => this.allowNewServer = true, 2000)
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onCreateServer() {
    if (this.serverName) {
      this.serverCreationStatus = 'Server Created With Name ' + this.serverName;
      this.serverCreated = true;
      this.servers.push(this.serverName);
    }
    else
    this.serverCreated=false;
  }
  ngOnInit() {
  }

}
