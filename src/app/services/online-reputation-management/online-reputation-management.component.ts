import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-online-reputation-management',
  templateUrl: './online-reputation-management.component.html',
  styleUrls: ['./online-reputation-management.component.css']
})
export class OnlineReputationManagementComponent implements OnInit {
  magento:string;


  constructor() {
    this.magento='assets/webdesign/magento.webp'
   }

  ngOnInit(): void {
  }

}
