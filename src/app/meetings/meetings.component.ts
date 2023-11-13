import { Component } from '@angular/core';
import * as data from '../../assets/data.json';
@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent {

  protected readonly data = data;
  protected readonly Object = Object;
}
