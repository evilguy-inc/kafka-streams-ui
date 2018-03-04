import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { JsonTreeModule } from './display-components/json-tree/json-tree.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { KafkaComponent } from './kafka/kafka.component';
import { MessagesComponent } from './kafka/messages/messages.component';
import { MessageComponent } from './kafka/messages/message/message.component';

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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule,
    NgbModule.forRoot(),
    JsonTreeModule,
  ],
  providers: [
    RestService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
