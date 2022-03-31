import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajouter-admin',
  templateUrl: './ajouter-admin.component.html',
  styleUrls: ['./ajouter-admin.component.css']
})
export class AjouterAdminComponent implements OnInit {

  constructor() { }
  form={
    email:'',
    password:'',
    role:''
    }

  
  message = ""
  message1 = ""
  test =false
  test1 =false

  ngOnInit(): void {
  
  }
AddAdmin(){

  if(this.form.email==""){
    this.message = "Email is required"
    this.test =true
    console.log(this.message)
  }
  else  {
    this.message = ""
      this.test = false
  } 

    if(this.form.password==""){
      this.message1 = "password is required"
      this.test1 = true
      console.log(this.message)
    }
    else{
      this.message1 = ""
      this.test1 = false
      }
    console.log(this.form)
  }
}
