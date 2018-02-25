import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'json-tree',
  templateUrl: './json-tree.component.html'
})
export class JsonTreeComponent implements OnInit {


  @Input()
  private entryKey: string;

  @Input()
  private object;

  private displayStatus: string = 'INLINE';


  ngOnInit() {
  }

  private updateStatus() {
    if (this.isOpen(this.displayStatus))
      this.displayStatus = 'INLINE'
    else
      this.displayStatus = 'OPEN'
  }


  private getKeys(object): string[] {
    return Object.keys(object);
  }

  private isObject(object): boolean {
    return object instanceof Object && object.constructor === Object;
  }

  private isInline(displayStatus) {
    return displayStatus === 'INLINE';
  }

  private isOpen(displayStatus) {
    return displayStatus === 'OPEN';
  }
}

