import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seo-for-small-businesses',
  templateUrl: './seo-for-small-businesses.component.html',
  styleUrls: ['./seo-for-small-businesses.component.css']
})
export class SeoForSmallBusinessesComponent implements OnInit {
  magento:string;


  constructor() {
    this.magento='assets/webdesign/magento.webp'
   }


  ngOnInit(): void {
  }

}
