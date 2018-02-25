
export class Message{

  text: string;
  content: {};


  constructor(content){
    this.text = JSON.stringify(content);
    this.content = content;
  }
}
