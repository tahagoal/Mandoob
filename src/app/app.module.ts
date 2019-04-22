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
import { SalesComponent } from './sales/sales.component';
import { SalesListComponent } from './sales-list/sales-list.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { RoutesListComponent } from './routes-list/routes-list.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { SchedulesListComponent } from './schedules-list/schedules-list.component';
import { NotificationsListComponent } from './notifications-list/notifications-list.component';
import { OrdersListComponent } from './orders-list/orders-list.component';


const appRoutes: Routes = [
  {
    path : '',
    component: AppComponent
  },
  { 
    path: 'sales', 
    children: [
          { path: 'create', component: SalesCreateComponent },
          { path: 'list', component: SalesListComponent },
        ]
  },
  { 
    path: 'client',
    children: [
      { path: 'create', component: ClientCreateComponent },
      { path: 'list', component: ClientsListComponent },
    ] 
  },
  { 
    path: 'notification', 
    children: [
      { path: 'create', component: NotificationCreateComponent },
      { path: 'list', component: NotificationsListComponent },
    ] 
  },
  { 
    path: 'product', 
    children: [
      { path: 'create', component: ProductCreateComponent },
      { path: 'list', component: ProductsListComponent },
    ] 
  },
  { 
    path: 'route', 
    children: [
      { path: 'create', component: RouteCreateComponent },
      { path: 'list', component: RoutesListComponent },
    ] 
  },
  { 
    path: 'schedule-create', 
    children: [
      { path: 'create', component: ScheduleCreateComponent },
      { path: 'list', component: SchedulesListComponent },
    ] 
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
    FooterComponent,
    SalesComponent,
    SalesListComponent,
    ClientsListComponent,
    RoutesListComponent,
    ProductsListComponent,
    SchedulesListComponent,
    NotificationsListComponent,
    OrdersListComponent
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
