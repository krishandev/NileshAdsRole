import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-app-development',
  templateUrl: './mobile-app-development.component.html',
  styleUrls: ['./mobile-app-development.component.css']
})
export class MobileAppDevelopmentComponent implements OnInit {
  magento:string;



  constructor() {
    this.magento='assets/webdesign/magento.webp'
  
  }

  ngOnInit(): void {
  }

}
