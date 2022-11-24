import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-seo',
  templateUrl: './local-seo.component.html',
  styleUrls: ['./local-seo.component.css']
})
export class LocalSeoComponent implements OnInit {
  magento:string;


  constructor() {
    this.magento='assets/webdesign/magento.webp'
   }

  ngOnInit(): void {
  }

}
