import { skill } from "./skill.model";

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