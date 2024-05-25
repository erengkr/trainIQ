import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css',
})
export class TeamsComponent {
  constructor(private http: HttpClient, private router: Router) {}
  private apiUrl = 'https://demotrainiq.com/case/dashboard';

  data: any = [];
  teams: any = [];
  selectedTeam: any;
  showCard: boolean = true;
  teamTitle: string = '';
  teamDescription: string = '';

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  saveEmployee() {}

  goEmployees(team: any) {
    this.selectedTeam = team;
    this.showCard = false;
  }
  goBack() {
    this.showCard = true;
  }
  saveTeam() {
    this.showCard = true;
    this.teams.push({
      title: this.teamTitle,
      description: this.teamDescription,
      employees: [],
      overall_score: 0,
      total_employes_count: 0,
    });
    this.teamTitle = '';
    this.teamDescription = '';
  }
  ngOnInit() {
    this.getData().subscribe((data) => {
      console.log(data);
      this.data = data.data;
      this.teams = data.data.teams;
    });
  }
}
