import { Component, Input, OnInit } from '@angular/core';

import { Message } from './../../../shared/models/Message.model';

@Component({
  selector: 'message-component',
  templateUrl: './message.component.html'
})
export class MessageComponent implements OnInit {

  @Input()
  private message: Message;

  ngOnInit() {
  }

}
