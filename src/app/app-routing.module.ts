import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MembersComponent} from "./members/members.component";
import {MeetingsComponent} from "./meetings/meetings.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'members', component: MembersComponent },
  { path: 'meetings', component: MeetingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
