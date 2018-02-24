import { Component, Input, ChangeDetectionStrategy, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { RestService } from './../../shared/services/rest.service';

import { Message } from './../../shared/models/Message.model';

@Component({
  selector: 'messages-component',
  templateUrl: './messages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesComponent implements OnInit, OnChanges {


  @Input()
  private selectedTopic: string;

  private messages: Message[];

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

  private onChangeSelectedTopic(topicName: string){
    this.selectedTopic = topicName;
    this._restService.getMessages(topicName)
    .subscribe(response => {
      this.messages = response;
    });
  }
}
