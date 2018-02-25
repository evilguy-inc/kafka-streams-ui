import { Component, Input, ChangeDetectorRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { RestService } from './../../shared/services/rest.service';


import { Observable } from 'rxjs';

import { Message } from './../../shared/models/Message.model';

@Component({
  selector: 'messages-component',
  templateUrl: './messages.component.html'
})
export class MessagesComponent implements OnInit, OnChanges {


  @Input()
  private selectedTopic: string;

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

  private onChangeSelectedTopic(topicName: string) {
    this.selectedTopic = topicName;
    if (topicName)
      this._restService.getMessages(topicName)
        .subscribe(response => {
          this.messages = response;
        });
  }

  private find() {
    this._restService.findMessagesByKey(this.selectedTopic, this.searchBarValue)
      .subscribe(response => {
        this.messages = Observable.of(response);
      });
  }
}
