import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { NxtBtnComponent } from './components/nxt-btn/nxt-btn.component';
import { LogoWithTitleComponent } from './components/logo-with-title/logo-with-title.component';
import { MsgDisplayComponent } from './components/msg-display/msg-display.component';
import { SignupTabViewComponent } from './views/signup-tab-view/signup-tab-view.component';
import { Signup1Component } from './views/signup1/signup1.component';
import { Signup2Component } from './views/signup2/signup2.component';
import { PicUploadComponent } from './components/pic-upload/pic-upload.component';
import { NearlySignupComponent } from './views/nearly-signup/nearly-signup.component';
import { SignupTermsComponent } from './views/signup-terms/signup-terms.component';
import { SignupProfileComponent } from './views/signup-profile/signup-profile.component';
import { SignupInterestsComponent } from './views/signup-interests/signup-interests.component';
import { SignupProfileMembersComponent } from './views/signup-profile-members/signup-profile-members.component';
import { HeaderAfterloginComponent } from './components/header-afterlogin/header-afterlogin.component';
import { TimelineComponent } from './views/timeline/timeline.component';
import { CertComponent } from './views/cert/cert.component';
import { MapViewComponent } from './views/map-view/map-view.component';

const appRoutes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupTabViewComponent},
  {path:'timeline', component:TimelineComponent},
  {path:'cert', component:CertComponent},
  {path:'map',component:MapViewComponent},
  {path:'**',component:AppComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    NxtBtnComponent,
    LogoWithTitleComponent,
    MsgDisplayComponent,
    SignupTabViewComponent,
    Signup1Component,
    Signup2Component,
    PicUploadComponent,
    NearlySignupComponent,
    SignupTermsComponent,
    SignupProfileComponent,
    SignupInterestsComponent,
    SignupProfileMembersComponent,
    HeaderAfterloginComponent,
    TimelineComponent,
    CertComponent,
    MapViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
