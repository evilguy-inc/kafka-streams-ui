import { Component, Input, OnInit } from '@angular/core';

import { Message } from './../../../shared/models/Message.model';

@Component({
  selector: 'message-component',
  templateUrl: './message.component.html'
})
export class MessageComponent implements OnInit {

  @Input()
  private message: Message;

  private messageKeys: string[];


  ngOnInit() {
  }

  private getKeys(object):string[]{
    return Object.keys(object);
  }

}
