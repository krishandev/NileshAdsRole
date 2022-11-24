import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageBodyComponent } from './homepage-body/homepage-body.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { WebdesignComponent } from './services/webdesign/webdesign.component';
import { WebDevelopmentComponent } from './services/web-development/web-development.component';
import { WordpressWebsiteComponent } from './services/wordpress-website/wordpress-website.component';
import { MobileMarketingComponent } from './services/mobile-marketing/mobile-marketing.component';
import { MobileAppDevelopmentComponent } from './services/mobile-app-development/mobile-app-development.component';
import { PayPerClickManagementPpcComponent } from './services/pay-per-click-management-ppc/pay-per-click-management-ppc.component';
import { SocialMediaMarketingComponent } from './services/social-media-marketing/social-media-marketing.component';
import { EmailMarketingComponent } from './services/email-marketing/email-marketing.component';
import { OnlineReputationManagementComponent } from './services/online-reputation-management/online-reputation-management.component';
import { DigitalMarketingComponent } from './services/digital-marketing/digital-marketing.component';
import { InternetMarketingComponent } from './services/internet-marketing/internet-marketing.component';
import { SearchEngineOptimizationComponent } from './services/search-engine-optimization/search-engine-optimization.component';
import { EcommerceSeoServicesComponent } from './services/ecommerce-seo-services/ecommerce-seo-services.component';
import { OrganicSeoServicesComponent } from './services/organic-seo-services/organic-seo-services.component';
import { LocalSeoComponent } from './services/local-seo/local-seo.component';
import { SeoForSmallBusinessesComponent } from './services/seo-for-small-businesses/seo-for-small-businesses.component';
import { ContentMarketingComponent } from './services/content-marketing/content-marketing.component';
import { WhiteLabelSeoComponent } from './services/white-label-seo/white-label-seo.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageBodyComponent,
    WebdesignComponent,
    WebDevelopmentComponent,
    WordpressWebsiteComponent,
    MobileMarketingComponent,
    MobileAppDevelopmentComponent,
    PayPerClickManagementPpcComponent,
    SocialMediaMarketingComponent,
    EmailMarketingComponent,
    OnlineReputationManagementComponent,
    DigitalMarketingComponent,
    InternetMarketingComponent,
    SearchEngineOptimizationComponent,
    EcommerceSeoServicesComponent,
    OrganicSeoServicesComponent,
    LocalSeoComponent,
    SeoForSmallBusinessesComponent,
    ContentMarketingComponent,
    WhiteLabelSeoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
