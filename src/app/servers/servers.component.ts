import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer:boolean=false;
  serverName:string='Sahil';
  serverCreationStatus:string='No server Was Created'

  constructor() { 
    setTimeout(()=>this.allowNewServer=true,2000)
  }

  onUpdateServerName(event:Event){
     this.serverName=(<HTMLInputElement>event.target).value;
  }

  onCreateServer(){
   this.serverCreationStatus='Server Created With Name ' + this.serverName;
  }

  ngOnInit() {
  }

}
