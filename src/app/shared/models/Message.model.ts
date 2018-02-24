
export class Message{

  content: string;

  constructor(content){
    this.content = JSON.stringify(content);
  }
}
