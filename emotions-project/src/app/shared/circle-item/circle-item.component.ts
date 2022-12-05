import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle-item',
  templateUrl: './circle-item.component.html',
  styleUrls: ['./circle-item.component.scss']
})
export class CircleItemComponent implements OnInit {
  @Input() imgSrc = '';
  @Input() content = '';
  constructor() { }

  ngOnInit(): void {
  }
  
}
