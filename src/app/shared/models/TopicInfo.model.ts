
export class TopicInfo {

  name: string;
  partition: number;
  leader: {};
  replicas: {}[];
  inSyncReplicas: {}[];
  offlineReplicas: {}[];

  constructor(name, partition, leader, replicas, inSyncReplicas, offlineReplicas) {
    this.name = name;
    this.partition = partition;
    this.leader = leader;
    this.replicas = replicas;
    this.inSyncReplicas = inSyncReplicas;
    this.offlineReplicas = offlineReplicas;
  }
}

export class BasicTopicInfo {

  name: string;

  constructor(name){
    this.name = name;
  }
}
