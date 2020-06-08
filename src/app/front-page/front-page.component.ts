import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  constructor() { }
  Categories=['Medicines','Groceries','Domestic help','Help take care of pet','Can help post a mail to nearby post office','others']
  ngOnInit(): void {
  }
   
}
