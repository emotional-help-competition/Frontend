import { Component, Input, OnInit } from '@angular/core';
import { ColoursMap } from 'src/app/mocks/colours';
import { ResultItem } from 'src/app/models/emotions';

@Component({
  selector: 'app-emotion-map',
  templateUrl: './emotion-map.component.html',
  styleUrls: ['./emotion-map.component.scss']
})
export class EmotionMapComponent implements OnInit {
  @Input() result: ResultItem[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  
  getBgColour({ category, subCategories }: ResultItem, opacity = 1): string {
    // @ts-ignore
    let color = subCategories.length ? ColoursMap[category.toLowerCase()] : '#808080';
    color = color.replace('#', '');

    let r = parseInt(color.substring(0, 2), 16);
    let g = parseInt(color.substring(2, 4), 16);
    let b = parseInt(color.substring(4, 6), 16);

    return 'rgba(' + r + ',' + g + ',' + b + ',' + opacity/10 + ')';
  }
}
