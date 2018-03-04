import { Component, Input, ChangeDetectorRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { RestService } from './../../shared/services/rest.service';


import { Observable } from 'rxjs';

import { TopicInfo } from './../../shared/models/TopicInfo.model';
import { Message } from './../../shared/models/Message.model';

@Component({
  selector: 'messages-component',
  templateUrl: './messages.component.html'
})
export class MessagesComponent implements OnInit, OnChanges {


  @Input()
  private selectedTopic: TopicInfo;

  private messages: Observable<Message[]>;

  private searchBarValue: string;

  constructor(
    private _restService: RestService
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectedTopic) {
      this.onChangeSelectedTopic(changes.selectedTopic.currentValue);
    }
  }

  private onChangeSelectedTopic(topic: TopicInfo) {
    this.selectedTopic = topic;
    if (topic)
      this._restService.getMessages(topic.name)
        .subscribe(response => {
          this.messages = response;
        });
  }

  private find() {
    this._restService.findMessagesByKey(this.selectedTopic.name, this.searchBarValue)
      .subscribe(response => {
        this.messages = Observable.of(response);
      });
  }
}
