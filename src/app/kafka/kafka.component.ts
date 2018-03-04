import { Component, OnInit } from "@angular/core";

// import { MessagesComponent } from './messages/messages.component';

import { RestService } from './../shared/services/rest.service';

import { TopicInfo } from './../shared/models/TopicInfo.model';

@Component({
  selector: 'kafka-component',
  templateUrl: './kafka.component.html',
  // directives: [MessagesComponent]
})
export class KafkaComponent implements OnInit {

  private topics: TopicInfo[];
  private selectedTopic: TopicInfo;

  constructor(
    private _restService: RestService
  ) { }

  ngOnInit() {
     this._restService.getAllTopics()
     .subscribe(response => {
       this.topics = response;
     });
  }

  selectTopic(topic: TopicInfo){
    this.selectedTopic = topic;
  }
}
