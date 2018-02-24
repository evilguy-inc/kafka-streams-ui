import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

import { Message } from './../models/Message.model';
import { TopicInfo, BasicTopicInfo } from './../models/TopicInfo.model';

@Injectable()
export class RestService {

  constructor(
    private _http: Http
  ) { }


  getAllTopics(): Observable<TopicInfo[]> {
    return this._http.get("http://localhost:9096/api/topic/kafka")
      .map(response => {
        return Object.values(response.json())
          .map(item => {
            return new TopicInfo(
              item[0]["topic"], item[0]["partition"], item[0]["leader"], item[0]["replicas"],
              item[0]["inSyncReplicas"], item[0]["offlineReplicas"]);
          });
      });
  };


  getLoadedTopics(): Observable<BasicTopicInfo[]> {
    return this._http.get("http://localhost:9096/api/topic")
      .map(response => {
        return Object.values(response.json())
          .map(item => {
            return new BasicTopicInfo(item);
          });
      });
  };


  getMessages(topicName: string): Observable<Message[]> {
    return this._http.get("http://localhost:9096/api/message/period",
      {
        params: {
          topic: topicName,
          start: 0,
          lenght: 100
        }
      })
      .map(response => {
        return Object.values(response.json())
          .map(item => {
            return new Message(item);
          });
      });
  };

}
