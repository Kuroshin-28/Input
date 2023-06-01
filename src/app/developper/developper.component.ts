import { Component } from '@angular/core';
import { skill } from '../skill/skill.component';

export class developper {
  firstname: string;
  lastname: string;
  age: number;
  gender: string;
  biography: string;
  skills: skill[] = [];

  constructor(firstname: string, lastname: string, age: number, gender: string, biography: string){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.gender = gender;
    this.biography = biography;
  }
}

@Component({
  selector: 'app-developper',
  templateUrl: './developper.component.html',
  styleUrls: ['./developper.component.css']
})
export class DevelopperComponent {
  developper: developper = new developper("", "", 0, "", "");

  constructor() {

  }

  onSubmit(){
    console.log("Submit");
  }

  skillSubmit(name: string, logo: string, site: string){
    this.developper.skills.push(new skill(name, logo, site));
  }
}
