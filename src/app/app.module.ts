import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerModule } from 'ngx-color-picker';

import { AppComponent } from './app.component';
import { SalesCreateComponent } from './sales-create/sales-create.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { ClientCreateComponent } from './client-create/client-create.component';
import { NotificationCreateComponent } from './notification-create/notification-create.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { RouteCreateComponent } from './route-create/route-create.component';
import { ScheduleCreateComponent } from './schedule-create/schedule-create.component';
import { FooterComponent } from './footer/footer.component';


const appRoutes: Routes = [
  {
    path : '',
    component: AppComponent
  },
  { 
    path: 'sales-create', 
    component: SalesCreateComponent 
  },
  { 
    path: 'client-create', 
    component: ClientCreateComponent 
  },
  { 
    path: 'notification-create', 
    component: NotificationCreateComponent 
  },
  { 
    path: 'product-create', 
    component: ProductCreateComponent 
  },
  { 
    path: 'route-create', 
    component: RouteCreateComponent 
  },
  { 
    path: 'schedule-create', 
    component: ScheduleCreateComponent 
  },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SalesCreateComponent,
    PageNotFoundComponent,
    LeftNavComponent,
    TopHeaderComponent,
    ClientCreateComponent,
    NotificationCreateComponent,
    ProductCreateComponent,
    RouteCreateComponent,
    ScheduleCreateComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ColorPickerModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
