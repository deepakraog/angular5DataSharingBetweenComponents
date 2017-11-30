import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username:string ;
  userData:any;
  message:string;
  constructor(private dataService: DataService) { }

  ngOnInit() {
  		this.username = this.dataService.getUser();
  		this.getClientData();
  		this.dataService.currentMessage.subscribe(message => this.message = message)
  }

  getClientData(){
    this.dataService.getClientService().subscribe(data=>{
     this.userData = data;
    });
  }
  newMessage() {
    this.dataService.changeMessage("Hello from Sibling");
  }

}
