import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 @Input()
  photoCover:string=""
  @Input()
  cardLabel:string=""
  @Input()
	type:string =""
	@Input()
	price:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
