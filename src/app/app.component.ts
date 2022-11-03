import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  panelOpenState = false;
  mountainArray = ['Двойной обод', 'Алюминиевый сплав', 'Колеса диаметром 26 дюймов', 'Покрышки 26х1,95*']
  girlArray = ['Стальная рама', 'Жесткая вилка', 'Колеса диаметром 24 дюймов', '7 скоростей']

  setItemList = ''
  ngOnInit(): void {
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
