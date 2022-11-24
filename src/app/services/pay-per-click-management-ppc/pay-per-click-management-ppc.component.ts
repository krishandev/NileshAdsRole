import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay-per-click-management-ppc',
  templateUrl: './pay-per-click-management-ppc.component.html',
  styleUrls: ['./pay-per-click-management-ppc.component.css']
})
export class PayPerClickManagementPpcComponent implements OnInit {
  magento:string;



  constructor() {
    this.magento='assets/webdesign/magento.webp'
  
  }

  ngOnInit(): void {
  }

}
