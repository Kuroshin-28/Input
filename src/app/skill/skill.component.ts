import { Component, Input } from '@angular/core';

export class skill {
  @Input()
  name: string = "";

  @Input()
  logo: string = "";

  @Input()
  site: string = "";

  constructor(name: string, logo: string, site: string){
    this.name = name;
    this.logo = logo;
    this.site = site;
  }
}

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent{
  ngOnInit(): void {

  }
}
