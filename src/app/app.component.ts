import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';
  rajan: any;
  ngOnInit() {
    this.rajan = 'pppppp';
  }

  onClick() {
    this.rajan = 'Naya agent';
  }
}
