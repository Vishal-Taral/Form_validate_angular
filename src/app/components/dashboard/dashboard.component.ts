import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title='Kalpesh Ingale';

  today=Date();

  name='Splendid Infosystem';

  user={
    name:'kalpesh',
    age:22
  }

  constructor(private auth :AuthService) { }

  ngOnInit(): void {
  }

  logout():void{
    this.auth.logout();

  }




}
