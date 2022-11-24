import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-white-label-seo',
  templateUrl: './white-label-seo.component.html',
  styleUrls: ['./white-label-seo.component.css']
})
export class WhiteLabelSeoComponent implements OnInit {
  magento:string;


  constructor() {
    this.magento='assets/webdesign/magento.webp'
   }

  ngOnInit(): void {
  }

}
