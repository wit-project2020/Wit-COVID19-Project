import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import{NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { HomeAreaComponent } from './home-area/home-area.component';
import { LoginDetailsComponent } from './Request-info/login-details/login-details.component';
import { LoginDetails2Component } from './Request-info/login-details2/login-details2.component';
import{FormsModule} from '@angular/forms';
import{NgbdModalBasic} from './modal-basic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// import { ModalComponent } from './modal/modal.component'
@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    HomeAreaComponent,
    LoginDetailsComponent,
    LoginDetails2Component,
    NgbdModalBasic,
    
    // ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
