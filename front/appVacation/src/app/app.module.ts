import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing } from "./routerConfig";
import { HttpClientModule } from "@angular/common/http";
import { UserService } from "./services/user.service";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { AlertComponent } from "./directives/alert.component";
import { AlertService } from "./services/alert.service";
import { AuthenticationService } from "./services/authentication.service";
import { AuthGuard } from "./guards/auth.guards";
import { CalendarComponent } from "./calendar/calendar.component";
import { MonthComponent } from "./calendar/month/month.component";
import { WeekComponent } from "./calendar/week/week.component";

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CalendarComponent,
    MonthComponent,
    WeekComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    AlertService,
    AuthenticationService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
