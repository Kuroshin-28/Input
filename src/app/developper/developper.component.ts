import { Component } from '@angular/core';
import { developper } from '../models/developper.model';
import { skill } from '../models/skill.model';

@Component({
  selector: 'app-developper',
  templateUrl: './developper.component.html',
  styleUrls: ['./developper.component.css']
})
export class DevelopperComponent {
  developper: developper = new developper("", "", 0, "", "");
  skill: skill = new skill("", "", "");

  devSubmitted: boolean = false;

  constructor() {

  }

  onSubmit(){
    this.devSubmitted = true;
  }

  skillSubmit(){
    this.developper.skills.push(this.skill);
  }
}
