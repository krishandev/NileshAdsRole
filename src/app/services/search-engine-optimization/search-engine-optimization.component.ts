import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-engine-optimization',
  templateUrl: './search-engine-optimization.component.html',
  styleUrls: ['./search-engine-optimization.component.css']
})
export class SearchEngineOptimizationComponent implements OnInit {
  magento:string;



  constructor() {
    this.magento='assets/webdesign/magento.webp'
  
  }

  ngOnInit(): void {
  }

}
