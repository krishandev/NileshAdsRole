import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageBodyComponent } from './homepage-body/homepage-body.component';
import { ContentMarketingComponent } from './services/content-marketing/content-marketing.component';
import { DigitalMarketingComponent } from './services/digital-marketing/digital-marketing.component';
import { EcommerceSeoServicesComponent } from './services/ecommerce-seo-services/ecommerce-seo-services.component';
import { EmailMarketingComponent } from './services/email-marketing/email-marketing.component';
import { InternetMarketingComponent } from './services/internet-marketing/internet-marketing.component';
import { LocalSeoComponent } from './services/local-seo/local-seo.component';

import { MobileAppDevelopmentComponent } from './services/mobile-app-development/mobile-app-development.component';
import { MobileMarketingComponent } from './services/mobile-marketing/mobile-marketing.component';
import { OnlineReputationManagementComponent } from './services/online-reputation-management/online-reputation-management.component';
import { OrganicSeoServicesComponent } from './services/organic-seo-services/organic-seo-services.component';
import { PayPerClickManagementPpcComponent } from './services/pay-per-click-management-ppc/pay-per-click-management-ppc.component';
import { SearchEngineOptimizationComponent } from './services/search-engine-optimization/search-engine-optimization.component';
import { SeoForSmallBusinessesComponent } from './services/seo-for-small-businesses/seo-for-small-businesses.component';
import { SocialMediaMarketingComponent } from './services/social-media-marketing/social-media-marketing.component';
import { WebDevelopmentComponent } from './services/web-development/web-development.component';
import { WebdesignComponent } from './services/webdesign/webdesign.component';
import { WhiteLabelSeoComponent } from './services/white-label-seo/white-label-seo.component';
import { WordpressWebsiteComponent } from './services/wordpress-website/wordpress-website.component';

const routes: Routes = [
  {
    path:'webdesign',
    component:WebdesignComponent
  },
  {
    path:'',
    component:HomepageBodyComponent
  },
  {
    path:'web-development',
    component:WebDevelopmentComponent
  },
  {
    path:'wordpress-development',
    component:WordpressWebsiteComponent
  },
  {
    path:'mobile-marketing',
    component:MobileMarketingComponent
  },
  {
    path:'mobile-app-development',
    component:MobileAppDevelopmentComponent
  },
  {
    path:'pay-per-click-management-ppc',
    component:PayPerClickManagementPpcComponent
  },
  {
    path:'social-media-marketing',
    component:SocialMediaMarketingComponent
  },
  {
    path:'email-marketing',
    component:EmailMarketingComponent
  },
  {
    path:'online-reputation-management',
    component:OnlineReputationManagementComponent
  },
  {
    path:'digital-marketing',
    component:DigitalMarketingComponent
  },
  {
    path:'internet-marketing',
    component:InternetMarketingComponent
  },
  {
    path:'search-engine-optimization',
    component:SearchEngineOptimizationComponent
  },
  {
    path:'ecommerce-seo-services',
    component:EcommerceSeoServicesComponent
  },
  {
    path:'organic-seo-services',
    component:OrganicSeoServicesComponent
  },
  {
    path:'local-seo',
    component:LocalSeoComponent
  },
  {
    path:'seo-for-small-businesses',
    component:SeoForSmallBusinessesComponent
  },
  {
    path:'content-marketing',
    component:ContentMarketingComponent
  },
  {
    path:'white-label-seo',
    component:WhiteLabelSeoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
