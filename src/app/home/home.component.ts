import { Component } from '@angular/core';
import * as data from '../../assets/data.json'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  protected readonly data = data;
}
