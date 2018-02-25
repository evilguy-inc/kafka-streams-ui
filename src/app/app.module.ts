import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { KafkaComponent } from './kafka/kafka.component';
import { MessagesComponent } from './kafka/messages/messages.component';
import { MessageComponent } from './kafka/messages/message/message.component';
import { JsonTreeComponent } from './display-components/json-tree/json-tree.component';

import { RestService } from './shared/services/rest.service';

const appRoutes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {
        path: '', component: KafkaComponent
      }
    ]
  },
  { path: '', redirectTo: '/', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KafkaComponent,
    MessagesComponent,
    MessageComponent,
    JsonTreeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    NgbModule.forRoot(),
  ],
  providers: [
    RestService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
