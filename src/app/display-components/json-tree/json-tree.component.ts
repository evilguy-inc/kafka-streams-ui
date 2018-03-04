import { NgModule, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'json-tree',
  templateUrl: './json-tree.component.html'
})
export class JsonTreeComponent implements OnInit {


  @Input()
  private entryKey: string;

  @Input()
  private treeObject;

  ngOnInit() {
  }

}

