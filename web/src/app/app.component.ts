import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(environment.apiEndpoint).subscribe((response: any) => {
      this.title = response.message;
    });
  }
}
