import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media-marketing',
  templateUrl: './social-media-marketing.component.html',
  styleUrls: ['./social-media-marketing.component.css']
})
export class SocialMediaMarketingComponent implements OnInit {
  magento:string;



  constructor() {
    this.magento='assets/webdesign/magento.webp'
  
  }

  ngOnInit(): void {
  }

}
