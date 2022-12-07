import { Component, Input, OnInit } from '@angular/core';
import { IRecommendation } from 'src/app/models/recommendation';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit {
  @Input() recommendation!: IRecommendation;

  constructor() { }

  ngOnInit(): void {
  }

}
