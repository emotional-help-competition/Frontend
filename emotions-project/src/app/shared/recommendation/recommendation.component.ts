import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IRecommendation } from 'src/app/models/recommendation';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent {
  @Input() recommendation!: IRecommendation;

}
