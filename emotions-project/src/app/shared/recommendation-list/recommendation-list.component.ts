import { Component, Input, OnInit } from '@angular/core';
import { IRecommendation } from 'src/app/models/recommendation';

@Component({
  selector: 'app-recommendation-list',
  templateUrl: './recommendation-list.component.html',
  styleUrls: ['./recommendation-list.component.scss']
})
export class RecommendationListComponent implements OnInit {
  @Input() recommendations!: IRecommendation[];

  constructor() { }

  ngOnInit(): void {
  }

}
