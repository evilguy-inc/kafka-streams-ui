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


  getMessages(topicName: string): Observable<Observable<Message[]>> {
    return this.getLoadedTopics()
      .map(subscribedTopicList => {

        let currentTopic = subscribedTopicList.find(basicTopic => { return basicTopic.name === topicName });
        if (currentTopic)
          return this.getMessagesObservable(topicName);
        else
          return this._http.post("http://localhost:9096/api/topic",
            {
              topic: topicName
            }
          ).delay(1000).map(response => {
            return response;
          }).flatMap(res => {
            if (res.status == 201){
              return this.getMessagesObservable(topicName);
            }
            return null;
          })
      });
  }


  private getMessagesObservable(topicName: string) {
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
  }
}
