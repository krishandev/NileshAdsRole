import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wordpress-website',
  templateUrl: './wordpress-website.component.html',
  styleUrls: ['./wordpress-website.component.css']
})
export class WordpressWebsiteComponent implements OnInit {
  magento:string;
  themeCus:string;
  headerBg:string;



  constructor() {
    this.magento='assets/webdesign/magento.webp'
    this.themeCus='assets/WordPress_Website/Theme Customization.webp'
    this.headerBg='assets/WordPress_Website/header-bg.webp'

    
   }

  ngOnInit(): void {
  }

}
