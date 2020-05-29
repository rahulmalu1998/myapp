import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Intellipaat';
  fname:string="Harry";
  lname:string="potter";
  getFull():string {
    return this.fname+" "+this.lname;
  }
}
