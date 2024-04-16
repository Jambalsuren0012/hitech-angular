import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Ms365Component } from './ms365/ms365.component';
import { FortinetComponent } from './fortinet/fortinet.component';
import { OutsourcingComponent } from './outsourcing/outsourcing.component';
import { ItManagedServiceComponent } from './it-managed-service/it-managed-service.component';
import { ServiceSupportComponent } from './service-support/service-support.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    NavbarComponent,
    Ms365Component,
    FortinetComponent,
    OutsourcingComponent,
    ItManagedServiceComponent,
    ServiceSupportComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-one-page-app';
}
export class header {
  title = 'header';
}
