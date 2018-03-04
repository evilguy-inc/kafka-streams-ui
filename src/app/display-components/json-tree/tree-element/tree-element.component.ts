import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'json-tree-element',
  templateUrl: './tree-element.component.html',
  styleUrls: ['./tree-element.component.css']
})
export class TreeElementComponent implements OnInit {

  @Input()
  private entryKey: string;

  @Input()
  private treeObject;

  private displayStatus: string = 'INLINE';


  ngOnInit() {
  }

  private updateStatus() {
    if (this.isOpen(this.displayStatus))
      this.displayStatus = 'INLINE'
    else
      this.displayStatus = 'OPEN'
  }


  private getKeys(treeObject): string[] {
    return Object.keys(treeObject);
  }

  private isObject(treeObject): boolean {
    return treeObject instanceof Object && treeObject.constructor === Object;
  }

  private isInline(displayStatus) {
    return displayStatus === 'INLINE';
  }

  private isOpen(displayStatus) {
    return displayStatus === 'OPEN';
  }
}
