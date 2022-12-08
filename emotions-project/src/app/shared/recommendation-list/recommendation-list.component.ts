import { ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { IRecommendation } from 'src/app/models/recommendation';

@Component({
  selector: 'app-recommendation-list',
  templateUrl: './recommendation-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./recommendation-list.component.scss']
})
export class RecommendationListComponent {
  @Input() recommendations!: IRecommendation[];

}
