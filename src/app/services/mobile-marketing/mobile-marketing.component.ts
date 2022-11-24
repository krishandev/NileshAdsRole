import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-marketing',
  templateUrl: './mobile-marketing.component.html',
  styleUrls: ['./mobile-marketing.component.css']
})
export class MobileMarketingComponent implements OnInit {
  magento:string;



  constructor() {
    this.magento='assets/webdesign/magento.webp'
  
  
  }

  ngOnInit(): void {
  }

}
