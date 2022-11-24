import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-development',
  templateUrl: './web-development.component.html',
  styleUrls: ['./web-development.component.css']
})
export class WebDevelopmentComponent implements OnInit {

  clutch:string;
  wordpress:string;
  phpdevlopment:string;
  ecommerce:string;
  magento:string;
  respinsive1:string;
  shopify:string;
  magentoImg:string;
  MobWebDev:string;
  webPorral:string;
  rubyWebDev:string;
  reactWebDev:string;
  LaravelWebDev:string;
  travelWebDev:string;
  pythonWebDev:string;
  javaWebDev:string;
  angularJs:string;

  constructor() {
    this.clutch='assets/webdesign/clutch.webp';
    this.wordpress='assets/webdesign/wordpress.webp'
    this.phpdevlopment='assets/webdesign/phpdevlopment.webp'
    this.ecommerce='assets/webdesign/ecommerce.webp'
    this.magento='assets/webdesign/magento.webp'
    this.respinsive1='assets/webdesign/responsive4.png';
    this.shopify='assets/webdesign/shopify.webp'
    this.magentoImg='assets/WebDeveopment/Magento Website Development.webp'
    this.webPorral='assets/WebDeveopment/Web-Portal-Development.webp'
    this.MobWebDev='assets/WebDeveopment/Mobile-Web-Development.webp'
    this.rubyWebDev='assets/WebDeveopment/Web-Portal-Development.webp'
    this.reactWebDev='assets/WebDeveopment/React-Web-Development.webp'
    this.angularJs='assets/WebDeveopment/Angularjs-Web-Development.webp'
    this.LaravelWebDev='assets/WebDeveopment/Laravel-Web-Development.webp'
    this.travelWebDev='assets/WebDeveopment/Travel-Website-Development-Company.webp'
    this.pythonWebDev='assets/WebDeveopment/Python-Web-Development-Services.webp'
    this.javaWebDev='assets/WebDeveopment/Java-Web-Development-Services.webp'

   }

  ngOnInit(): void {
  }

}
