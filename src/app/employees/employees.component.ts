import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
})
export class EmployeesComponent {
  @Input() team: any;
  @Output() goBack = new EventEmitter();
  title: string = '';
  employee: any = [];
  lessons:number = 0;
  inputTitle: string = '';
  name: string = '';
  email: string = '';
  description: string = '';
  skill1: string = '';
  skill2: string = '';
  skill3: string = '';
  score: number = 0;
  skills_being_developed: any[] = [];
  overall = 0;
  constructor() {}
  ngOnInit() {
    console.log(this.team);
    console.log(this.team.employee);
    console.log(this.score);
    this.title = this.team.title;
    this.overall = this.team.overall_score;
    this.goBack.emit();
  }
  addEmployee() {
    if (this.skill1 != '') {
      this.skills_being_developed.push("Active Listening");
    }
    if (this.skill2 != '') {
      this.skills_being_developed.push("Empathy");
    }
    if (this.skill3 != '') {
      this.skills_being_developed.push("Problem Solving");
    }
    this.team.employees.push({
      title: this.inputTitle,
      name: this.name,
      email: this.email,
      skills_being_developed: this.skills_being_developed,
      current_score: this.score,
      lessons_taken: this.lessons,

    });
    console.log(this.employee);

  }
}
