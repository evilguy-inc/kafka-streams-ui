import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeElementComponent } from './tree-element/tree-element.component';
import { JsonTreeComponent } from './json-tree.component';

@NgModule({
  declarations: [
    TreeElementComponent,
    JsonTreeComponent ],
  exports: [ JsonTreeComponent ],
  imports: [ CommonModule ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class JsonTreeModule {}
