import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {
  @Input() title: string;
  isExpanded: boolean;

  Expand() {
    this.isExpanded = !this.isExpanded;
  }

}
