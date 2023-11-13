import { Component } from '@angular/core';
import * as data from '../../assets/data.json'
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent {

  protected readonly data = data;
}
