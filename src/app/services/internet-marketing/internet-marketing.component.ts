import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internet-marketing',
  templateUrl: './internet-marketing.component.html',
  styleUrls: ['./internet-marketing.component.css']
})
export class InternetMarketingComponent implements OnInit {
  magento:string;


  constructor() {
    this.magento='assets/webdesign/magento.webp'
   }

  ngOnInit(): void {
  }

}
