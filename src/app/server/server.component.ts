import {Component} from '@angular/core';
@Component({
    selector:'app-server',
    /* Selector  Could be app-server [Directive] 
      [app-server] as a property or
      .app-server as a class
    */
    templateUrl:'./server.component.html',
    styles:[`
    .online{
      color:white
    }`]
})
export class ServerComponent{
  serverId:number=10;
  serverStatus:string='Offline';

  constructor(){
    this.serverStatus = Math.random() > 0.5?'Online':'Offline';
  }
  getServerStatus(){
    return this.serverStatus;
  }
  getColor(){
     return this.serverStatus==='Online'?'green':'red';
  }
}