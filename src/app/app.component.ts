import { Component, HostListener, OnInit } from '@angular/core';
import { data } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  dataC: any;  
  setItemList = ''
  ngOnInit(): void {
    this.dataC = data.bikes;
    this.width = document.body.clientWidth;
  }
  width!: number;
	@HostListener('window:resize', ['$event'])
	onResize(event: any) {
		this.width = event.target.innerWidth;    
	}
  public addItems(arr: any)  {    
    arr.push(this.setItemList)
  }
}
