import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {
  data: any = [];
  courseData: any = [];
  private apiUrl = 'https://demotrainiq.com/case/dashboard';

  constructor(
    private http: HttpClient,
    private router: Router,
    private activetedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activetedRoute.queryParams.subscribe((params: any) => {
      if (params.status == 'inprogress') {
        this.getData().subscribe((data) => {
          this.data = data;
          this.courseData = this.data.data.in_progress_courses;
          console.log(this.courseData);
        });
      } else {
        this.getData().subscribe((data) => {
          this.data = data;
          this.courseData = this.data.data.upcoming_courses;
          console.log(this.courseData);
        });
      }
    });
  }
  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
