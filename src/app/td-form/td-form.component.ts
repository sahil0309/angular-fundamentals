import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})
export class TdFormComponent implements OnInit {

  
  @ViewChild('f') signUpForm :NgForm;
  genders=['Male','Female'];
  constructor() { 
    console.log('SignUp',this.signUpForm);
  }

  ngOnInit() {
  }

  // onSubmit(form:NgForm){
  //     console.log("Submitted",form);
  // }

  suggestUserName(){
    this.signUpForm.form.patchValue({
      userData:{
        userName:'Sahil'
      }
    })

  //Need to Supply All Values with setValue Method
  // this.signUpForm.setValue({
  //   userData:{
  //     userName:'Sahil'
  //   }
  // })
   }

  onSubmit(){
    console.log(this.signUpForm);
    this.signUpForm.reset(); 
  }
   
}
