import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {WebService} from '../web.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  //providers : [WebService]
})
export class RegisterComponent implements OnInit {

    public name : any = '';
    public id : number = '';
  	public email = '';//new FormControl('', [Validators.required, Validators.email]);
  	public phone : any = '';
  	public edu : any = {};
  	public address : any = '';
  	public gender : any = '';

  	constructor(private dbService : WebService, public activatedRoute:ActivatedRoute, private router: Router) { 	  
      this.activatedRoute.params.subscribe(params => {      
         this.id = params['id']; 
      });
  	}

  	ngOnInit() {
      let data = {};
      this.dbService.fireBase.list('users/'+this.id).snapshotChanges().subscribe(user => {
          user.map(userData => {data[userData.key] = userData.payload.val();});
          this.name    = data.name;
          this.email   = data.email;
          this.phone   = data.phone;
          this.edu     = data.edu;
          this.address = data.address;
          this.gender  = data.gender;
          this.country = data.country;
          this.date    = data.date;
          this.mba    = data.mba;
          this.mca    = data.mca;
      });
    }

  	/*getErrorMessage() {
	    return this.email.hasError('required') ? 'You must enter a value' :
	        this.email.hasError('email') ? 'Not a valid email' :
	            '';
  	}*/

  	savefData(){
      let mba = '';
      let mca = '';
      if(this.mba){
        mba = 'MBA';
      }
      if(this.mca){
        mca += ' MCA';
      }
  		var data = { 
  			'name'    : this.name,
  			'email'   : this.email,
  			'phone'   : this.phone,
  			'mba'     : mba,
        'mca'     : mca,
  			'address' : this.address,
        'country' : this.country,
  			'gender'  : this.gender,
        'date'    : this.date        
  		};

      if(this.id){ 
        data['key'] = this.id;  
        //console.log('data',data);     
        this.dbService.fireBase.list('users').update(this.id,data);
      }else{
        this.dbService.fireBase.list('users').push(data);
      } 		
      this.router.navigate(["/users"]);
      
  	}

}
