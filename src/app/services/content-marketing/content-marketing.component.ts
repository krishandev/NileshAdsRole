import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-marketing',
  templateUrl: './content-marketing.component.html',
  styleUrls: ['./content-marketing.component.css']
})
export class ContentMarketingComponent implements OnInit {
  magento:string;


  constructor() {
    this.magento='assets/webdesign/magento.webp'
   }


  ngOnInit(): void {
  }

}
