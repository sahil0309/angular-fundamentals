import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm:FormGroup;
  forbiddenUsernames=['Chris','Anna'];
  
  constructor() { }

  ngOnInit() {
    this.signUpForm =new FormGroup({
      userData:new FormGroup({
        username:new FormControl(null,[Validators.required,this.forbiddenNames.bind(this)]),
        email:new FormControl(null,[Validators.required,Validators.email],this.forbiddenEmails)
      }),
      gender:new FormControl('female'),
      hobbies:new FormArray([])
    })

    // this.signUpForm.valueChanges.subscribe((value)=>{
    //   console.log(value);
    // })

    this.signUpForm.statusChanges.subscribe((value)=>{
      console.log(value);
    })

  //   this.signUpForm.setValue({
  //     userData:{
  //       username:'Sahil',
  //       email:'arora.sahil8@gmail.com'
  //     },
  //     gender:'male',
  //     hobbies:[]
  //   })
  // }
  this.signUpForm.patchValue({
    userData:{
      username:'Sachin'
    }
  })
  }

  onSubmit(){
    console.log(this.signUpForm);
    this.signUpForm.reset();
  }

  onAddHobby(){
    const control = new FormControl(null,Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }
  
  forbiddenNames(control:FormControl):{[s:string]:boolean}{
    if(this.forbiddenUsernames.indexOf(control.value)!=-1){
      return{'nameIsForbidden':true}
    }
    return null;
  }

  forbiddenEmails(control:FormControl):Promise<any>|Observable<any>{
    const promise = new Promise<any>((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value==='test@test.com'){
          resolve({'emailIsInvalid':true})
        }
        else{
          resolve(null);
        }
      },2000)
    })
    return promise;
  }
}
