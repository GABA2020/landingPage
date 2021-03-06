import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgwWowModule } from 'ngx-wow';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './services/service.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { ErrorComponent } from './404/404.component';
import { BlogDetailComponent } from './blog-detail/blogdetail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { AppHeaderComponent } from './app.header.component';
import { AppHomeHeaderComponent } from './app.homeheader.component';
import { AppFooterComponent } from './app.footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModuleModule } from './router-module.module';
import { RouterModule } from './router.module';
import { ActivatedRouteModule } from './activated-route.module';
import { GtagModule } from 'angular-gtag';
// import {NgxTypedJsModule} from '../assets/js/ngx-typed-js/src/lib/ngx-typed-js.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    PortfolioComponent,
    BlogComponent,
    ErrorComponent,
    ContactComponent,
    BlogDetailComponent,
    LoginComponent,
    RegisterComponent,
    AppHeaderComponent,
    AppHomeHeaderComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgwWowModule,
    // RouterModuleModule,
    RouterModule,
    GtagModule.forRoot({ trackingId: 'G-8RBQ6BLFWE', trackPageviews: true }),
    ActivatedRouteModule
   // NgxTypedJsModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent, AppHeaderComponent, AppHomeHeaderComponent, AppFooterComponent]
})
export class AppModule {
}
