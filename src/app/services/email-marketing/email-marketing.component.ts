import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-marketing',
  templateUrl: './email-marketing.component.html',
  styleUrls: ['./email-marketing.component.css']
})
export class EmailMarketingComponent implements OnInit {
  magento:string;


  constructor() {
    this.magento='assets/webdesign/magento.webp'
   }

  ngOnInit(): void {
  }

}
