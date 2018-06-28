import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import {WebService} from '../web.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html', 
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() userData: string;
  @Output() callParentFn = new EventEmitter<any>();
  public mesage : any = '';

  constructor(public dbService : WebService) { }

  ngOnInit() {
    //console.log('userData',this.userData);
  }

  save(){
    console.log('this.userData',this.userData);
    this.dbService.fireBase.list('users').update(this.userData.key,this.userData);
  	this.mesage = 'Data Saved Successfully';
  	this.callParentFn.emit(this.mesage);
  }

}
