import { Component, OnInit } from '@angular/core';
import {WebService} from '../web.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  //providers : [WebService]
})
export class UsersComponent implements OnInit {

	public dataSource : any[];
  public successMsg : any = '';
  public parentData : any = '';
	
	displayedColumns = ['name', 'email', 'phone', 'edu', 'gender','address', 'action'];
  	
  constructor(dbService : WebService) {  
      /*.valueChanges() contain simply data, no key with it. you need to use .snapshotChanges() */
      dbService.fireBase.list('users').snapshotChanges().subscribe(users => {
        //console.log("users",users);
        this.dataSource = users.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      });

  	}

  	ngOnInit() {
  		
  	}

    callbackFn($event){
      this.successMsg = $event;
      this.parentData = '';
    }

    edit(data){
      this.successMsg = '';
      this.parentData = data;
    }

}
